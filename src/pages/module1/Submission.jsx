import React, { useState, useRef } from 'react';
import Header from './headerM2';
import { useDropzone } from 'react-dropzone';



function Submission() {
    const [checklist, setChecklist] = useState({
        submitted: false,
        items: ['Personal Information', 'Employment Documents', 'Tax Forms ', 'Banking Information',
            'Benefit Enrollment Forms', 'Emergency Contact Information', 'Educational Background', 'Work Authorization Documentation', 'Training and Certification Records'],
        checkedItems: [],
    });
    const [showDropzone, setShowDropzone] = useState(false); // Add this line
    const fileInputRef = React.useRef();

    const onAddDocumentClick = () => {
        fileInputRef.current.click();
    };

    const onFileChange = (event) => {
        const file = event.target.files[0];
        // Do something with the file
    };

    const handleCheck = (item) => {
        if (checklist.checkedItems.includes(item)) {
            setChecklist({
                ...checklist,
                checkedItems: checklist.checkedItems.filter(i => i !== item)
            });
        } else {
            setChecklist({
                ...checklist,
                checkedItems: [...checklist.checkedItems, item]
            });
        }
    }

    const MyDropzone = ({ onClose }) => {
        const { getRootProps, getInputProps, isDragActive } = useDropzone({
            onDrop: acceptedFiles => {
                // Do something with the files
            }
        });

        return (
            <div {...getRootProps()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
                <button onClick={onClose} className="absolute top-0 right-0 m-2">X</button>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                }
            </div>
        )
    }

    return (
        <div className="bg-F6F1F1">
            <Header />
            <h1 className="text-4xl font-poppins ml-8 mt-4">Onboarding Submission Document</h1>
            <div className="flex justify-between p-8" style={{ backgroundColor: '#F6F1F1' }}>
                <div className="space-y-8">
                    <div className="bg-white rounded-lg p-4 w-96 h-28 ml-8">
                        <div className="flex items-center justify-between">
                            <div className="border-2 border-gray-300 p-2 rounded">
                                <div>
                                    <input type="checkbox" id="submitted" name="submitted" checked={checklist.submitted} onChange={() => setChecklist({ ...checklist, submitted: !checklist.submitted })} />
                                    <label htmlFor="submitted">Submitted</label>
                                </div>
                                <div>
                                    <input type="checkbox" id="unsubmitted" name="unsubmitted" checked={!checklist.submitted} onChange={() => setChecklist({ ...checklist, submitted: !checklist.submitted })} />
                                    <label htmlFor="unsubmitted">Unsubmitted</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 w-96 h-96 overflow-auto ml-8">
                        <h2>CheckList</h2> {/* Add this line */}
                        {checklist.items.map((item, index) => (
                            <div key={index} className="border-2 border-gray-300 p-2 rounded flex items-center">
                                <input type="checkbox" id={item} name={item} checked={checklist.checkedItems.includes(item)} onChange={() => handleCheck(item)} />
                                <label htmlFor={item} className="ml-2">{item}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white rounded-lg p-4 pb-8">
                    <h2 style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '2em' }}>Submitted Documents</h2> {/* Add this line */}
                    <div className="flex flex-col items-start justify-between space-y-4">
                        {checklist.items
                            .filter((item) => checklist.checkedItems.includes(item))
                            .map((item, index) => (
                                <div key={index} className="flex justify-between space-x-4 w-full mb-4">
                                    <p>{item}</p>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Edit
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-4 right-4" onClick={() => setShowDropzone(true)}>
                Add Document
            </button>
            <input type="file" ref={fileInputRef} />
            {showDropzone &&
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-black bg-opacity-50 absolute inset-0"></div>
                    <MyDropzone onClose={() => setShowDropzone(false)} />
                </div>
            }
        </div>
    );
}

export default Submission;