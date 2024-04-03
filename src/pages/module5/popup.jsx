import React from 'react';
import MyCalendar from './calendar'; // replace './calendar' with the correct path to MyCalendar // replace './Calendar' with the correct path to Calendar



function Popup({ onClose }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-black opacity-50 absolute inset-0" onClick={onClose}></div>
            <div className="bg-white p-10 rounded-lg relative w-3/4 h-3/4 m-auto flex">
                <div className="w-1/2 p-10 bg-[#CEF0FF] ml-10">
                    <h1 className="text-3xl font-bold">Schedule a meeting</h1>
                    <br/><br/><br/>
                    <MyCalendar />
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
        </div>
    );
}




export default Popup;