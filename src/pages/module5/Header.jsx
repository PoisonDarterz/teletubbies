import React from 'react';

function Header({ title }) {
    return (
        <div className="relative">
            <img src="/Rectangle 38.png" alt="Your Description" className="w-full h-auto" />
            <div className="absolute top-8 left-2 flex flex-col items-start">
                <h1 className="text-white text-6xl mt-2 ml-2">Welcome back !</h1>
                <br></br>
                <h2 className="text-white text-2xl ml-2">{title}</h2> {/* Use the title prop here */}
            </div>
            <div className="absolute top-[80px] right-8 text-center transform -translate-y-1/2">
                <img src="/Ellipse 1.png" alt="Profile" className="w-12 h-12 rounded-full mx-auto" />
                <p className="mt-1 text-white">Michael Lim</p>
            </div>
        </div>
    );
}

export default Header;