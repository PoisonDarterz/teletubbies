import React from 'react';

function ProgressBar({ hires }) {
  return (
    <table className="table-auto w-full mt-4">
      <tbody>
        {hires && hires.map((hire, i) => (
          <tr key={i} className="border-b border-gray-200">
            <td className="p-2 flex items-center">
              <img src={hire.image} alt="Profile" className="w-12 h-12 rounded-full" />
              <span className="ml-4">{hire.name}</span>
            </td>
            <td className="p-2">
              <div className="relative pt-1">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div style={{ width: `${Math.floor(Math.random() * 100)}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-800"></div>
                </div>
                <div className="flex justify-between mt-[-15px]"> {/* Add marginTop here */}
                <span className="text-xs">Station 1</span>
                <span className="text-xs">Station 3</span>
                <span className="text-xs text-red-500">Completed</span>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProgressBar;