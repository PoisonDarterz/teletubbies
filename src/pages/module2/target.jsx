import React, { useState } from 'react';
import Header from './header';
import { Link } from 'react-router-dom'

function Stage({ title, tasks, boxColor, progressBarColor, subtitle }) {
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleTaskChange = (task) => {
    if (completedTasks.includes(task)) {
      setCompletedTasks(completedTasks.filter(t => t !== task));
    } else {
      setCompletedTasks([...completedTasks, task]);
    }
  };

  const progress = (completedTasks.length / tasks.length) * 100;

  return (
    <div style={{ backgroundColor: boxColor, borderRadius: '8px', padding: '20px', margin: '20px' }}>
      <h2 style={{ fontWeight: '600', textDecoration: 'underline' }}>{title}</h2>
      <p>{subtitle}</p>
      {tasks.map(task => (
        <div key={task}>
          <input type="checkbox" id={task} name={task} onChange={() => handleTaskChange(task)} style={{ marginRight: '10px' }} />
          <label htmlFor={task}>{task}</label>
        </div>
      ))}
      <div style={{ backgroundColor: '#D3D3D3', borderRadius: '21px', height: '20px', marginTop: '20px' }}>
        <div style={{ width: `${progress}%`, height: '100%', backgroundColor: progressBarColor, borderRadius: '21px' }} />
      </div>
    </div>
  );
}

const stages = [
  {
    title: 'STAGE 1',
    subtitle: 'Getting Acquainted with Processes and Team Dynamics:',
    tasks: ['On Call', 'Drive team activities', 'Approve someone else’s pull request', 'Build and release process', 'Participate in technical discussions', 'Involved in guilds and charters'],
    boxColor: '#F9E4E4',
    progressBarColor: '#FF9A9A'
  },
  {
    title: 'STAGE 2',
    subtitle: 'Starting coding journey:',
    tasks: ['Set up the development instance on machine', 'Make their first commit', 'Work live on production', 'Understand the system’s architecture', 'Contribute to story estimation', 'Pick up and complete a task from the backlog within the first sprint'],
    boxColor: '#EFFFFC',
    progressBarColor: '#87BBB4'
  }
];

function Target() {
  return (
    <>
      <Header />
      <div className="buttons-container mt-0 ml-4 flex">
        <Link to="/featured">
          <button className="button mr-2" style={{ backgroundColor: 'rgba(246, 241, 241, 0.27)', width: '179px', height: '60px' }}>Language</button>
        </Link>
        <Link to="/sampleproject">
          <button className="button mr-2" style={{ backgroundColor: 'rgba(246, 241, 241, 0.27)', width: '179px', height: '60px' }}>Project Showcase</button>
        </Link>
        <Link to="/target">
          <button className="button" style={{ backgroundColor: '#F6F1F1', width: '179px', height: '60px' }}>Target</button>
        </Link>
      </div>
      <div className="relative flex justify-around mt-8" style={{ backgroundColor: '#F6F1F1' }}>
        <div className="absolute inset-0 bg-cover bg-center opacity-50 z-0" style={{ backgroundImage: 'url("/designer-workplace-working-on-website-layout.jpg")' }}></div>
        <div className="relative z-10">
          {stages.map(stage => (
            <Stage key={stage.title} {...stage} />
          ))}
        </div>
      </div>
    </>
  );
}
  
export default Target;