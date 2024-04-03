import React from 'react';
import TopNav from './TopNav';

const forumData = [
  { id: '#G0090', user: 'Lorem', updated: '3/4/2024', category: 'General', title: 'Help me to random generate', likes: 10, comments: 5 },
  { id: '#Q0132', user: 'Ipsum', updated: '3/4/2024', category: 'Question', title: 'Help me to random generate', likes: 15, comments: 7 },
  { id: '#G0089', user: 'Dolor', updated: '3/4/2024', category: 'General', title: 'Help me to random generate', likes: 20, comments: 10 },
  { id: '#T0010', user: 'Sit', updated: '2/4/2024', category: 'Technical', title: 'Help me to random generate', likes: 25, comments: 12 },
  { id: '#G0088', user: 'Amet', updated: '2/4/2024', category: 'General', title: 'Help me to random generate', likes: 30, comments: 15 },
  { id: '#Q0131', user: 'Consecteteur', updated: '31/3/2024', category: 'Question', title: 'Help me to random generate', likes: 35, comments: 17 },
];

function ForumAdmin() {
  return (
    <div className="p-8">
      <div className="mt-[-32px] ml-[-32px] mr-[-32px]">
        <TopNav />
      </div>
      <div className="flex justify-between items-center mt-8 mb-4">
        <h1 className="text-2xl font-bold">Forums and Discussion</h1>
        <button style={{ backgroundColor: '#0076ce', color: 'white' }} className="px-4 py-2 rounded">+ Create a discussion</button>
      </div>
      <h2 className="text-lg font-semibold mb-2">Browse by category</h2>
      <div className="flex space-x-8 mb-4">
        <a href="#" className="text-blue-500">General</a>
        <a href="#" className="text-blue-500">Questions</a>
        <a href="#" className="text-blue-500">Notices / PSA</a>
        <a href="#" className="text-blue-500">Technical</a>
        <a href="#" className="text-blue-500">Fun & Memes</a>
        <a href="#" className="text-blue-500">View all</a>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label className="mr-2">Filters: Submitted by:</label>
          <input type="text" className="border p-1 rounded" />
          <label className="ml-4 mr-2">Date submitted:</label>
          <input type="date" className="border p-1 rounded" />
        </div>
        <input type="text" className="border p-1 rounded" placeholder="Search" />
      </div>
      <div className="overflow-x-auto mt-6 p-4">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-sm font-medium text-left text-gray-700 rounded-lg">
              <th className="w-[15%] px-4 py-2 bg-gray-200">Thread ID</th>
              <th className="w-[15%] px-4 py-2 bg-gray-200">User</th>
              <th className="w-[15%] px-4 py-2 bg-gray-200">Last Updated</th>
              <th className="w-[15%] px-4 py-2 bg-gray-200">Category</th>
              <th className="w-[30%] px-4 py-2 bg-gray-200">Title</th>
              <th className="w-[10%] px-4 py-2 bg-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm font-normal text-gray-700">
            {forumData.map((data, i) => (
              <tr className={`${i % 2 === 0 ? 'bg-[#fefefe]' : 'bg-[#f7f6fe]'} px-4 py-2`}>
                <td className="w-[15%] px-4 py-4">{data.id}</td>
                <td className="w-[15%] px-4 py-4">{data.user}</td>
                <td className="w-[15%] px-4 py-4">{data.updated}</td>
                <td className="w-[15%] px-4 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs ${data.category === 'General' ? 'text-[#1F9254] bg-[#EBF9F1]' :
                      data.category === 'Question' ? 'text-[#CD6200] bg-[#FEF2E5]' :
                        'text-[#A30D11] bg-[#FBE7E8]'
                    }`}>
                    {data.category}
                  </span>
                </td>
                <td className="w-[30%] px-4 py-4">{data.title}</td>
                <td className="w-[10%] px-4 py-4 flex justify-end items-center">
                  <span className="mr-2">👍 {data.likes}</span>
                  <span>💬 {data.comments}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-center items-center mt-4">
          <button className="px-4 py-2 text-sm text-white bg-gray-500 rounded">Previous</button>
          <button className="px-4 py-2 ml-2 text-sm text-white bg-indigo-700 rounded">1</button>
          <button className="px-4 py-2 ml-2 text-sm text-black bg-gray-300 rounded">2</button>
          <button className="px-4 py-2 ml-2 text-sm text-black bg-gray-300 rounded">3</button>
          <button className="px-4 py-2 ml-2 text-sm text-white bg-gray-500 rounded">Next</button>
        </div>
      </div>
    </div>
  );
}

export default ForumAdmin;