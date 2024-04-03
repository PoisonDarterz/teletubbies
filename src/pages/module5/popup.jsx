import React from 'react';
import Calendar from './calendar'; // replace './Calendar' with the correct path to Calendar

function Popup() {
    return (
        <div className="flex w-full h-screen fixed top-0 left-0 bg-white">
            <div className="w-1/2 p-10 bg-[#CEF0FF]">
                <h1 className="text-3xl font-bold">Schedule a meeting</h1>
                <br/><br/><br/>
                <Calendar />
            </div>
            <div className="w-1/2 p-10">
                <h1 className="text-3xl font-bold">How long is your meeting?</h1>
                <div className="flex items-center mt-10 border-t border-gray-300 pt-5">
                    <div className="w-1/3 text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 mx-auto hover:bg-blue-500 transition-colors"></div>
                        <p className="mt-2">15 minutes</p>
                    </div>
                    <div className="w-1/3 text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 mx-auto hover:bg-blue-500 transition-colors"></div>
                        <p className="mt-2">30 minutes</p>
                    </div>
                    <div className="w-1/3 text-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 mx-auto hover:bg-blue-500 transition-colors"></div>
                        <p className="mt-2">60 minutes</p>
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-10">Which time works best</h1>
                <div className="mt-5 p-5 border rounded">
                    <p>9:00am</p>
                </div>
                <div className="mt-5 p-5 border rounded">
                    <p>10:00am</p>
                </div>
                <div className="mt-5 p-5 border rounded">
                    <p>11:00am</p>
                </div>
                <div className="mt-5 p-5 border rounded">
                    <p>12:00pm</p>
                </div>
                <div className="mt-5 p-5 border rounded">
                    <p>1:00pm</p>
                </div>
            </div>
        </div>
    );
}

export default Popup;