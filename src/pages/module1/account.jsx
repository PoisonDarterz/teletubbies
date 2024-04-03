import React from 'react';
import Header from './headerM1';

function Account() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center h-screen">
                <h1 className="font-bold mt-28 text-3xl">Account Set Up</h1>
                <h2 className="text-xl">Welcome, New Hires !</h2>
            </div>
            {/* rest of your code */}
        </>
    );
}

export default Account;