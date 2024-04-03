import React from 'react';
import TopNav from './TopNav'; // replace '../module3/TopNav' with the correct path to TopNav

function Goal() {
    return (
        <div>
            <TopNav title="Goal Setting" />
            <h2 className="text-3xl font-bold mt-10 ml-10">Goal Setting</h2> 
            <h2 className="text-xl font ml-10">Congratulations on your efforts in your onboarding session !</h2> 
            <h2 className="text-xl font ml-10">Let’s set a few goals for the next few months</h2> 
            <div className="mx-20 pb-20">
                <h3 className="text-xl font-bold mb-2 mt-10">What aspects of our company mission, values, and goals resonate most with you?</h3>
                <div className="bg-[#E3F0FF] rounded p-5 mb-5 h-40 overflow-auto" contentEditable>
                    {/* rest of your code */}
                </div>
                <h3 className="text-xl font-bold mb-2 mt-10">Think about ways you can contribute to achieving team goals within the first 15 days.</h3>
                <div className="bg-[#EAEDFF] rounded p-5 mb-5 h-40 overflow-auto" contentEditable>
                    {/* rest of your code */}
                </div>
                <h3 className="text-xl font-bold mb-2 mt-10">Is there a specific skill or area of knowledge outside of your core role that you'd like to develop in the coming months?</h3>
                <div className="bg-[#E3F0FF] rounded p-5 mb-5 h-40 overflow-auto" contentEditable>
                    {/* rest of your code */}
                </div>
                <h3 className="text-xl font-bold mb-2 mt-10">What aspects of our company mission, values, and goals resonate most with you?</h3>
                <div className="bg-[#EAEDFF] rounded p-5 mb-5 h-40 overflow-auto" contentEditable>
                    {/* rest of your code */}
                </div>
            </div>
        </div>
    );
}

export default Goal;
 