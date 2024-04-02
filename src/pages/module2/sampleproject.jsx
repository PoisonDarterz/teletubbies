import React from 'react';
import Header from './header';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faWifi, faSignal } from '@fortawesome/free-solid-svg-icons';


function SampleProject() {
    return (
        <div>
        <Header />
        <div className="buttons-container mt-0 ml-4 flex">
        <Link to="/featured">
        <button className="button mr-2" style={{ backgroundColor: 'rgba(246, 241, 241, 0.27)', width: '179px', height: '60px' }}>Featured</button>
      </Link>
      <Link to="/sampleproject">
      <button className="button" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Sample Project</button>
      </Link>
      </div>
        <div className="flex justify-between w-full px-20 py-10 bg-[#F6F1F1]">
          {/* First iPhone */}
          <div className="relative w-[271px] h-[464px] border-4 border-gray-800 rounded-lg overflow-hidden">
        <IphoneHeader />
        <div className="bg-brown w-full h-full relative">
        <img src="/chessgame.png" alt="Chess Board Game" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full" />
        </div>
        <button className="bg-blue-700 w-64 h-10 mt-4 text-white">Chess Game</button>
        </div>

          {/* Second iPhone */}
          <div className="relative w-[271px] h-[464px] border-4 border-gray-800 rounded-lg overflow-hidden">
          <IphoneHeader />
          <div className="bg-gradient-to-b from-[#CD6200] via-[#C99361] to-[#BA997C] w-full h-full relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
            <img src="/cheeseburgers.png" alt="Cheeseburger Cartoon" className="w-32 h-32" />
            <div className="absolute" style={{top: '300px', left: '530px'}}> <p className="text-center">Cheese Burger</p>
            </div>
            <p className="line-through text-red-500">RM9.99</p>
            <p className="text-green-500">RM6.66</p>
            <button className="bg-green-500 w-32 h-8 mt-2 text-white">Add to Cart</button>
            </div>
            </div>
            <button className="bg-blue-700 w-64 h-10 mt-4 text-white">Food Delivery App</button>
          </div>
    
          {/* Third iPhone */}
          <div className="relative w-[271px] h-[464px] border-4 border-gray-800 rounded-lg overflow-hidden">
          <IphoneHeader />
            <div className="bg-white w-full h-full relative">
              <div className="bg-blue-700 w-full h-24 text-white text-JejuHallasan pt-4 pl-4">My Course</div>
              <div className="flex justify-around mt-2">
                <button>All</button>
                <button>In Progress</button>
                <button>Completed</button>
              </div>
              <div className="bg-blue-200 w-full h-24 mt-2">
                <button className="bg-blue-700 w-32 h-8 mt-2 text-white">Programming</button>
                <p>Machine Learning</p>
                <div className="bg-gray-300 w-48 h-1 mt-2 rounded-full">
                  <div className="bg-blue-700 w-28 h-1 rounded-full"></div>
                </div>
              </div>
              <div className="bg-yellow-200 w-full h-24 mt-2">
                <button className="bg-orange-500 w-32 h-8 mt-2 text-white">Programming</button>
                <p>Python for Everybody</p>
                <div className="bg-gray-300 w-48 h-1 mt-2 rounded-full">
                  <div className="bg-orange-300 w-28 h-1 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
    }
    function IphoneHeader() {
        return (
          <div className="flex justify-between items-center px-2 py-1 bg-gray-200">
            <span>12:00 PM</span> {/* Time */}
            <div>
            <span><FontAwesomeIcon icon={faSignal} /></span> {/* Cellular connection symbol */}            
              <span><FontAwesomeIcon icon={faWifi} /></span> {/* Wi-Fi symbol */}
              <span><FontAwesomeIcon icon={faBatteryFull} /></span> {/* Battery symbol */}
            </div>
          </div>
        );
      }
export default SampleProject;
