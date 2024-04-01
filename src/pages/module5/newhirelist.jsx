import React from 'react';

const groups = [
  {
    id: 1,
    hires: [
      { id: 1, name: 'Henry Tan Yin Yi', profilePic: 'Ellipse 51.png' },
      { id: 2, name: 'Samuel Chan', profilePic: 'Ellipse 52.png' },
      { id: 3, name: 'Ali bin Muhammad Hassan', profilePic: 'Ellipse 53.png' },
    ],
  },

  {
    id: 2,
    hires: [
      { id: 4, name: 'Jennie Liew Mei Yin', profilePic: 'Ellipse 54.png' },
      { id: 5, name: 'Kugan a/l Krishnan', profilePic: 'Ellipse 55.png' },
      { id: 6, name: 'Qistina binti Sofian  ', profilePic: 'Ellipse 56.png' },
    ],
  },

  {
    id: 3,
    hires: [
      { id: 7, name: 'James Foo Yok Ling', profilePic: 'Ellipse 57.png' },
      { id: 8, name: 'Jessica Liew Chee Mun', profilePic: 'Ellipse 58.png' },
      { id: 9, name: 'Ruben a/l Raj ', profilePic: 'Ellipse 59.png' },
    ],
  },

  {
    id: 4,
    hires: [
      { id: 10, name: 'Bryan Ooi Kok Soon', profilePic: 'Ellipse 60.png' },
      { id: 11, name: 'Benjamin Leong Hook Chun', profilePic: 'Ellipse 61.png' },
      { id: 12, name: 'Hakim bin Mohammad Arif  ', profilePic: 'Ellipse 62.png' },
    ],
  },
];


function NewHireList() {
  return (
    <div className="flex">
      <div className="w-full p-4 rounded-lg border ml-16 mt-16" style={{ backgroundColor: '#F5F8FF' }}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-blue-800 font-bold underline">New Hire List</h2>
          <p className="text-gray-500">Batch 1 Session 24/25</p>
        </div>
        {groups.map(group => (
          <div key={group.id} className="mb-4 p-4 rounded-lg border" style={{ backgroundColor: group.id === 1 ? '#E7ECFF' : group.id === 2 ? '#F0EBFF' : group.id === 3 ? '#E8F5FF' : '#D7FDFF' }}>
            <h3 className="mb-2 font-bold">Group {group.id}</h3>
            <div className="flex justify-between items-center mb-2 font-bold">
            </div>
            {group.hires.map(hire => (
              <div key={hire.id} className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <img src={hire.profilePic} alt="Profile" className="w-8 h-8 rounded-full mr-2" />
                  <p>{hire.name}</p> {/* Display the actual name */}
                </div>
                <a href="/#" className="text-blue-500 font underline">View details</a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewHireList;