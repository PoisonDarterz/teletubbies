import React from 'react';

function Resource() {
  return (
    <div className="flex flex-col h-screen bg-[#0076CE] text-white">
      <header className="p-5">
        <h1 className="text-4xl">Training Resources Hub</h1>
      </header>
      <main className="flex flex-grow p-5 space-x-5">
        <div className="flex-1 space-y-5 max-w-xl mx-auto overflow-hidden">
          <h2 className="text-4xl font-semibold">Explore our Learning Center!</h2>
          <p className="text-lg">
            Access vital training materials and documents to kickstart your journey with us. Everything you need to excel in your role, all in one place.
          </p>
        </div>
        <div className="flex-1">
          <img src="/module2Photo.jpg" alt="Training Resources" />
        </div>
      </main>
    </div>
  );
}

export default Resource;