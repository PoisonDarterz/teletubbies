import React from 'react';
import Header from './headerM1';

function Account() {
    return (
        <div className="bg-gray-100">
      <div className="bg-gray-100">
    <Header />
    <div className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col justify-center items-center text-center mb-8">
            <h1 className="font-bold text-3xl">Account Set Up</h1>
            <h2 className="text-xl">Welcome, New Hires !</h2>
        </div>
        <div className="flex justify-center items-center w-full">
            <div className="flex justify-center items-center space-x-4 w-3/5 mx-auto"> 
                <div className="bg-white shadow-lg rounded-md w-64 h-64"></div> 
                <div className="bg-white shadow-lg rounded-md w-full h-64"></div> 
            </div>
        </div>
    </div>
</div>
    </div>
    );
}

export default Account;