import React from 'react';
import TopNav from './TopNav';

function Forum() {
  return (
    <div className="p-8">
      <div className="mt-[-32px] ml-[-32px] mr-[-32px]">
        <TopNav />
      </div>
      <div className="flex justify-between items-center mt-8 mb-4">
        <h1 className="text-2xl font-bold">Forums and Discussion</h1>
        <button style={{backgroundColor: '#0076ce', color: 'white'}} className="px-4 py-2 rounded">+ Create a discussion</button>
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
    </div>
  );
}

export default Forum;