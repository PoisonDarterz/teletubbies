import React from 'react';
import Header from './header';
import { Link } from 'react-router-dom'

function Box({ title, description, imageSrc }) {
    return (
      <div className="w-1/3 p-4">
        <div className="bg-white rounded-lg shadow-md">
          <img src={imageSrc} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
  <h2 className="text-2xl font-bold text-blue-700 mb-2">{title}</h2>
  <p className="text-black text-base mb-4">{description}</p>
  <div className="text-center">
    <button className="bg-blue-700 text-white px-4 py-2 rounded-md">Explore Now</button>
  </div>
</div>
        </div>
      </div>
    );
  }
  
  function Page() {
    const boxes = [
      { title: 'HTML5', description: 'Discover the power of HTML5, revolutionizing the way we experience the web and shaping the future of digital innovation.', imageSrc: '/HTML5.jpg' },
      { title: 'CSS3', description: 'Explore CSS3, the language that brings creativity to web design, enhancing user experiences and elevating digital aesthetics.', imageSrc: '/CSS3.png' },
      { title: 'ReactJS', description: 'Delve into ReactJS, the cutting-edge framework revolutionizing web development with its efficiency, flexibility, and dynamic user interfaces.', imageSrc: '/ReactJS.jpg' },
      { title: 'SQL', description: 'Unlock the power of SQL: the backbone of database management, streamlining data retrieval and manipulation.', imageSrc: '/SQL.jpg' },
      { title: 'ORM (Hibernate)', description: 'Explore ORM (Hibernate): simplifying database interactions for efficient data management.', imageSrc: '/ORM.png' },
      { title: 'Java (Spring)', description: 'Dive into Java Spring: the versatile framework empowering robust and scalable web applications.', imageSrc: '/JavaSpring.jpg' },
    ];
  
    function renderBoxes() {
      return boxes.map((box, index) => (
        <Box key={index} title={box.title} description={box.description} imageSrc={box.imageSrc} />
      ));
    }
  
    return (
        <div className="bg-F6F1F1">
          <Header />
          <div className="buttons-container mt-0 ml-4 flex">
        <Link to="/featured">
          <button className="button mr-2" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Featured</button>
        </Link>
        <Link to="/sampleproject">
          <button className="button mr-2" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Sample Project</button>
        </Link>
        <Link to="/target">
          <button className="button" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Target</button>
        </Link>
      </div>
      <div className="bg-[#F6F1F1] p-8">
            <div className="flex flex-wrap -mx-4">
              {renderBoxes()}
            </div>
          </div>
        </div>
      );      
  }
  
  export default Page;
