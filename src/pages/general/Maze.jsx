import React, { useEffect, useState } from 'react';
import MazeApp from './MazeApp';
import './MazeApp.css';

const Maze = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const isModalShown = localStorage.getItem('isModalShown');

        if (!isModalShown) {
            setShowModal(true);
            localStorage.setItem('isModalShown', 'true');
        }
    }, []);

    return (
        <div>
            <MazeApp />
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex flex-col items-center justify-center">
                                <h3 className="text-3xl leading-6 font-medium text-gray-900 text-center p-4" id="modal-title">
                                    Your Senior is <br></br>Ali bin Muhammad
                                </h3>
                                <p className="mt-2 text-xl text-gray-500 text-center p-4">
                                    ali@dell.com
                                </p>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => {
                                    setShowModal(false);
                                    localStorage.setItem('isModalShown', 'true');
                                }}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Maze;