import React from 'react';
import ProgressBar2 from './progressbar2'; // Import the ProgressBar component

const hires = [
    { name: 'Henry Tan Yin Yi' },
    { name: 'Ali bin Muhammad Hassan' },
    { name: 'Samuel Chan' },
    { name: 'Jennie Liew Mei Yin' },
    { name: 'Kugan a/l Krishnan' },
    { name: 'Qistina binti Sofian' },
    { name: 'James Foo Yok Ling' },
    { name: 'Jessica Liew Chee Mun' },
    { name: 'Ruben a/l Raj' },
    { name: 'Bryan Ooi Kok Soon' },
    { name: 'Benjamin Leong Hook Chun' },
    { name: 'Hakim bin Mohammad Arif ' },
];
const employees = Array(12).fill().map((_, i) => ({ id: `E${String(i + 1).padStart(3, '0')}`, documentSubmission: `${Math.floor(Math.random() * 6)}/5` }));

function ViewProgress() {
    return (
        <div>
        <table className="table-auto w-4/5 mt-10 mx-auto rounded"> {/* Add borderRadius here */}
          <thead>
            <tr>
              <th className="text-center">Employee ID</th> 
              <th className="text-center">Name</th> 
              <th className="text-center">Document Submission</th> 
              <th className="text-center">Progress</th> 
              <th className="text-center">Contact them</th> 
            </tr>
          </thead>
            <tbody>
    {employees.map((employee, i) => (
        <tr key={i} className={i % 2 === 0 ? 'bg-[#E9F4FF]' : 'bg-[#F1F1F1]'}> 
        <td className="text-center">{employee.id}</td> 
        <td className="text-center">{hires[i] && hires[i].name}</td> 
        <td className="text-center">{employee.documentSubmission}</td> 
        <td><ProgressBar2 /></td>
        <td className="flex justify-center items-center align-middle">
            <span role="img" aria-label="Email Icon">📧</span>
        </td>
        </tr>
    ))}
    </tbody>
        </table>
      </div>
    );
}

export default ViewProgress;