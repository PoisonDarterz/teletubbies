import React, { useState } from 'react';
import Header from './header';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Speech from 'react-speech';

const Testing = () => {
  const [questions] = useState([
    'Explain the differences between <div> and <span> elements in HTML5, and provide examples of when each would be most appropriate to use.',
    'Write a SQL query to find the second highest salary from an Employee table. Provide both MySQL and PostgreSQL syntax for the query',
    'Write a SQL query to find the second highest salary from an Employee table. Provide both MySQL and PostgreSQL syntax for the query',
  ]);

  const [answers, setAnswers] = useState(Array(questions.length).fill(''));

  const handleAnswerChange = (index, newAnswer) => {
    setAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[index] = newAnswer;
      return newAnswers;
    });
  };

  return (
    <>
    <Header />
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Questions</h1>
      {questions.map((question, index) => (
        <div key={index} className="mb-4">
          <div className="flex items-center mb-2">
            <p className="mr-2">{question}</p>
            <Speech text={question} />
            <CopyToClipboard text={question}>
              <button className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">Copy</button>
            </CopyToClipboard>
          </div>
          <textarea
            className="w-full p-2 border rounded"
            value={answers[index]}
            onChange={e => handleAnswerChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
    </>
  );
};

export default Testing;