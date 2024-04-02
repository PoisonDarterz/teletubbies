import React from 'react';

function ProgressBar2() { // Change hires to hire
  return (
    <table className="table-auto w-full mt-4">
      <tbody>
        <tr className="border-b border-gray-200">
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
      </tbody>
    </table>
  );
}

export default ProgressBar2;