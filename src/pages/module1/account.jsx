import React from 'react';
import Header from './headerM1';

function Account() {
    return (
        <div className="bg-gray-100">
            <Header />
            <div className="flex flex-col justify-center items-center h-screen text-center mt-[-100px]">
                <h1 className="font-bold text-3xl">Account Set Up</h1>
                <h2 className="text-xl">Welcome, New Hires !</h2>
            </div>
            <div className="flex justify-center items-center h-screen">
                <div className="flex justify-center items-center space-x-4 w-full mx-auto">
                    <div className="bg-white shadow-lg rounded w-1/4 h-64"></div>
                    <div className="bg-white shadow-lg rounded w-1/2 h-64"></div>
                </div>
            </div>
        </div>
    );
}


export default Account;