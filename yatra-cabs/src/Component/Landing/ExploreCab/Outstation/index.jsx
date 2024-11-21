import React, { useState } from "react";  
import './style.css'
import OneWay from './OneWay'
import RoundTrip from './RoundTrip'

function Index() {
  const [isOneWay, setIsOneWay] = useState(true);


  return (
    <>
      <div className='outstation'>
      <div className="btn-container">
        <button className={`${isOneWay ? 'activeb-btn' : 'btn'}`} onClick={() => setIsOneWay(true)}>One Way</button>
        <button className={`${!isOneWay ? 'activeb-btn' : 'btn'}`} onClick={() => setIsOneWay(false)}>Round Trip</button>
      </div>
      {
        !isOneWay ? <RoundTrip/> : <OneWay/> 
      }
      </div>
    </>
  )
}

export default Index