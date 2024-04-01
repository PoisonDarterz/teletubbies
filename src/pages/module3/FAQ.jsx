import React, { useState } from 'react';
import TopNav from './TopNav';

const faqs = [
    { question: 'Question 1', answer: 'Answer 1' },
    { question: 'Question 2', answer: 'Answer 2\nanswer\nanswer' },
    { question: 'Question 3', answer: 'Answer 3' },
    // Add more FAQs as needed
];


function FAQ() {
    const [openFAQ, setOpenFAQ] = useState(null);
    return (
        <div className="p-8">
            <div className="mt-[-32px] ml-[-32px] mr-[-32px]">
                <TopNav />
            </div>
            <div className="flex justify-between items-center mt-8 mb-2">
                <h1 className="text-2xl font-bold">Frequently Asked Questions (FAQs)</h1>
                <input type="search" placeholder="Search..." className="border-2 border-gray-300 rounded-md p-2" />
            </div>
            <p className="mt-0">Your one-stop station to most commonly asked questions.</p>
            <p className="mt-4 font-bold">Browse by category:</p>
            <div className="mt-2 space-x-8">
                <a href="#" className="text-blue-500 underline">General</a>
                <a href="#" className="text-blue-500 underline">Facilities</a>
                <a href="#" className="text-blue-500 underline">Attendance</a>
                <a href="#" className="text-blue-500 underline">About us</a>
                <a href="#" className="text-blue-500 underline">Policy</a>
            </div>
            <div className="mt-4">
                {faqs.map((faq, i) => (
                    <div key={i} className={`rounded p-4 mb-2 cursor-pointer ${i % 2 === 0 ? 'bg-[#a2d2ff]' : 'bg-[#f6f1f1]'}`} onClick={() => setOpenFAQ(i)}>
                        <p>{faq.question}</p>
                        {openFAQ === i && faq.answer.split('\n').map((line, j) => <p key={j} className="mt-2">{line}</p>)}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FAQ;