import React from 'react';
import Header from './headerM1';

function Box({ title, description, imageSrc }) {
    return (
      <div className="p-4" style={{ width: '318px', height: '350px' }}>
        <div className="bg-white rounded-lg shadow-md">
          <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-blue-700 mb-2">{title}</h2>
            <p className="text-black text-base mb-4">{description}</p>
            <div className="text-center">
              <button className="bg-blue-700 text-white px-4 py-2 rounded-md">Read</button>
            </div>
          </div>
        </div>
      </div>
    );
}

function WelcomePackage() {
  const boxes = [
    { title: 'Company Policies and Culture', imageSrc: '/TeamIntro.jpg' },
    { title: 'Employment Contract', imageSrc: '/Programminglanguagefa.jpg' },
    { title: 'Welcome Materials', imageSrc: '/DayOne.jpg' },
    { title: 'Job Description',  imageSrc: '/EmployeeHandbook.jpeg' },
    { title: 'Standard Operating Procedures', imageSrc: '/PayrollBenefit.jpg' },
    { title: 'Performance Goals', imageSrc: '/PayrollBenefit.jpg' },
    { title: 'Confidentially Agreements', imageSrc: '/PayrollBenefit.jpg' },
  ];

  function renderBoxes() {
    return boxes.map((box, index) => (
      <Box key={index} title={box.title} description={box.description} imageSrc={box.imageSrc} />
    ));
  }

  return (
    <div className="bg-F6F1F1">
      <Header />
      <div className="bg-[#F6F1F1] p-8">
        <div className="grid grid-cols-3 gap-20 mx-auto max-w-screen-lg">
          {renderBoxes()}
        </div>
      </div>
    </div>
  );           
}

export default WelcomePackage;