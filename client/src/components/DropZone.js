import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import upload from "../assets/upload.jpg"


function DropZone() {
    const [files, setFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
    });

    return (
        <div
            {...getRootProps()}
            className={`${isDragActive ? 'bg-gray-100' : 'bg-white'
                }  rounded-lg p-4`}
        >
            <input {...getInputProps()} />
            {isDragActive ? (
                <div>
                    <img src={upload} alt="upload" className='w-36 object-contain' />
                    <h1>Upload your resume</h1>
                </div>
            ) : (
                <div>
                    <img src={upload} alt="upload" className='w-36 object-contain' />
                    <h1>Upload your resume</h1>
                </div>

            )}
            {files.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-gray-600">Selected Files:</h4>
                    <ul>
                        {files.map((file) => (
                            <li
                                key={file.name}
                                className="text-gray-600"
                            >
                                {file.name} - {file.size} bytes
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default DropZone;
