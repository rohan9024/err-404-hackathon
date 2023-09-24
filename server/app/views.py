from django.shortcuts import render

# Create your views here.

from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse
from .data_extractor import main
from joblib import load
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
import pandas as pd
import numpy as np
import pickle  # Save the trained model to a file using the highest protocol version
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer


@api_view(['POST'])
def upload_file(request):
    file = request.FILES['resume']
    data = request.data
    print('data', data)
    # process the uploaded file here
    jsondata = main(file)
    print(file, jsondata)
    skills_list = data['skills'].split(',')
    print('skills_list', skills_list)
    # Prepare the input data
    input_data = pd.DataFrame({
        "Education": data['education'],
        "Experience": data['workExperience'],
        "Skill1": skills_list[0] if skills_list else 'Skill1',
        "Skill2": skills_list[1] if len(skills_list) > 1 else 'Skill2',
        "Skill3": skills_list[2] if len(skills_list) > 2 else 'Skill3'
    }, index=[0])

    # Load the training dataset
    train_data = pd.read_csv("dataset.csv")
    train_data.fillna(train_data.mean(), inplace=True)

    # Define the features to be used for training the model
    features = ["Education", "Experience", "Skill1", "Skill2", "Skill3"]

    # Preprocess the training data using one-hot encoding and standard scaling
    preprocessor = ColumnTransformer(transformers=[
        ("cat", OneHotEncoder(handle_unknown='ignore'),
         ["Education", "Skill1", "Skill2", "Skill3"]),
        ("num", StandardScaler(), ["Experience"])
    ])
    X_train = preprocessor.fit_transform(train_data[features])
    y_train = train_data["JFS"]

    # Train the linear regression model
    model = LinearRegression()
    model.fit(X_train, y_train)

    # Preprocess the input data using the same transformer as used for the training data
    X_input = preprocessor.transform(input_data[features])

    # Predict the JFS for the input data
    y_pred = model.predict(X_input)
    print(y_pred)

    return Response({
        "name": jsondata['Name'],
        "email": jsondata['Email'],
        "phone": jsondata['Phone'],
    })


def hello_world(request):
    return HttpResponse('Hello, world!')
