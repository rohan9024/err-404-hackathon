import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.compose import ColumnTransformer
from sklearn.linear_model import LinearRegression
from sklearn.impute import SimpleImputer
import joblib
import pickle

# Load the dataset
df = pd.read_csv('dataset.csv')

# Split into features and target variable
X = df[['Education', 'Experience', 'Skill1', 'Skill2', 'Skill3']]
y = df['JFS']

# Define categorical and numerical column transformer
cat_cols = ['Education', 'Skill1', 'Skill2', 'Skill3']
num_cols = ['Experience']
cat_transformer = OneHotEncoder()
num_transformer = StandardScaler()

# Combine column transformers
preprocessor = ColumnTransformer(
    transformers=[
        ('num', num_transformer, num_cols),
        ('cat', cat_transformer, cat_cols)
    ])

# Impute missing values with mode
imputer = SimpleImputer(strategy='most_frequent')
X = pd.DataFrame(imputer.fit_transform(X), columns=X.columns)

# Split data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Concatenate the training and test data
X_combined = pd.concat([X_train, X_test], axis=0)

# Preprocess the combined data
X_combined_prep = preprocessor.fit_transform(X_combined)

# Split the preprocessed data back into training and test sets
X_train_prep = X_combined_prep[:len(X_train)]
X_test_prep = X_combined_prep[len(X_train):]

# Initialize and fit the linear regression model
model = LinearRegression()
model.fit(X_train_prep, y_train)

# Preprocess the test data and make predictions
y_pred = model.predict(X_test_prep)

# Print the model's R-squared score
print('R-squared score:', model.score(X_test_prep, y_test))

# Save the model
# Save the trained model to a file using the highest protocol version
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f, protocol=-1)
