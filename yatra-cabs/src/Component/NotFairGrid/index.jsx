import './style.css'
import { FaHandHolding } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BsTaxiFrontFill } from "react-icons/bs";



function Index() {

  return (
    <>
      <div className='wrapper-on-notfaigrid'> 
       <div className="info-section">
      <div className="info-card">
      <FaHandHolding className='card-icon'/>
        <h3 className="title">RETURN FARE, NOT FAIR!</h3>
        <p className="description">
          Why Pay For Return Journey When You Are Travelling One-Way? Now Get
          Discounted AC Taxi At Just Half Of The Round Trip Cost For Your
          Oneway Travel.
        </p>
      </div>
      <div className="info-card">
      <SlLocationPin className='card-icon'/>
        <h3 className="title">GPS BASED BILLING SYSTEM</h3>
        <p className="description">
          Since The GPS Data Captures The Actual Distance And Time Traveled, It
          Reduce The Chance Of Kilometer Tampering Or Discrepancies In Billing.
        </p>
      </div>
      <div className="info-card">
      <BsTaxiFrontFill className='card-icon'/>
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