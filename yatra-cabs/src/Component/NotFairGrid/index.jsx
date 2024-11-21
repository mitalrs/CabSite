import './style.css'
import { FaHandHolding } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BsTaxiFrontFill } from "react-icons/bs";



function Index() {

  return (
    <>
      <div className='wrapper-on-notfaigrid'> 
      {/* <div>
        <FaHandHolding/>
        <h3>Return Fare, Not Fair!</h3>
        <p>Why Pay for Return Journey when you are travelling one-way? Now get discounted AC Taxi at just half of the round trip cost for your oneway travel.</p>
      </div>
      <div>
        <SlLocationPin/>
        <h3>GPS Based Billing System </h3>
        <p>Since the GPS data captures the actual distance and time traveled,   it reduce the chance of Kilometer tampering or discrepancies in billing.</p>
      </div>
      <div>
        <BsTaxiFrontFill/>
        <h3>Now available routes are!</h3>
        <p>Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly</p>
      </div> */}
       <div className="info-section">
      <div className="info-card">
        <div className="icon">✋</div>
        <h3 className="title">RETURN FARE, NOT FAIR!</h3>
        <p className="description">
          Why Pay For Return Journey When You Are Travelling One-Way? Now Get
          Discounted AC Taxi At Just Half Of The Round Trip Cost For Your
          Oneway Travel.
        </p>
      </div>
      <div className="info-card">
        <div className="icon">📍</div>
        <h3 className="title">GPS BASED BILLING SYSTEM</h3>
        <p className="description">
          Since The GPS Data Captures The Actual Distance And Time Traveled, It
          Reduce The Chance Of Kilometer Tampering Or Discrepancies In Billing.
        </p>
      </div>
      <div className="info-card">
        <div className="icon">🚖</div>
        <h3 className="title">NOW AVAILABLE ROUTES ARE!</h3>
        <p className="description">
          Lucknow | Gorakhpur | Varanasi | Ayodhya | Allahabad | Bareilly
        </p>
      </div>
    </div>
      </div>
    </>
  )
}

export default Index