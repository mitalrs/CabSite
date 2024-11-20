import React, { useState } from "react";  
import './style.css';
import OutStation from './Outstation';
import Local from './Local';
import Airport from './Airport';

function Index() {
  const [activeComponent, setActiveComponent] = useState('OutStation');

  return (
    <div className='export-cab'>
      <div className="btn-cantainer">
      <button className={`${activeComponent === 'OutStation' ? 'activeb-btn' : 'btn'}`} onClick={() => setActiveComponent('OutStation')}>OutStation</button>
      <button className={`${activeComponent === 'Local' ? 'activeb-btn' : 'btn'}`} onClick={() => setActiveComponent('Local')}>Local</button>
      <button className={`${activeComponent === 'Airport' ? 'activeb-btn' : 'btn'}`} onClick={() => setActiveComponent('Airport')}>Airport</button>
      </div>
      <div className='component-container'>
        {activeComponent === 'OutStation' && <OutStation />}
        {activeComponent === 'Local' && <Local />}
        {activeComponent === 'Airport' && <Airport />}
      </div>
    </div>
  );
}

export default Index;
