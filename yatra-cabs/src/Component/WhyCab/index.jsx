import "./style.css";
import whyCab from "../../assets/whycab.gif";

function Index() {
  return (
    <>
      <div className="wrapper-0n-whycab">
        <div className="why-choose-one-way-cab">
          <h2 className='title'>WHY CHOOSE ONE WAY CAB?</h2>
          <div className="features-container">
            <div className="features-box">
              <ul>
                <li>Instant Booking & Confirmation</li>
                <li>Confirmed Booking Immediately</li>
                <li>No Return Fare For One-Way Trip</li>
                <li>Clean & Professional Cab Services</li>
                <li>Transparent Billing With GPS Based Billing System</li>
              </ul>
            </div>
            <div className="image-container">
              <img className='image' src={whyCab} alt="Car illustration" />
            </div>
            <div className="features-box">
              <ul>
                <li>Pick-Up From Your House</li>
                <li>Dedicated Cab Just For You</li>
                <li>Drop To Your Desired Destination</li>
                <li>Completed More Than 20,000+ Oneway Trips</li>
                <li>Multiple Payment Option Including Credit Card</li>
              </ul>
            </div>
          </div>
          <div className='subtext-container'>
          <p className="subtext">
            DISCOVER AFFORDABLE TRAVEL WITH OUR SEAMLESS{" "}
            <span className="highlight">INTERCITY CAR RENTALS</span> IN INDIA –
            WHERE EXCELLENCE MEETS AFFORDABILITY WITH STANDARDIZED RATES IN
            EVERY CITY. UNLEASH YOUR JOURNEY!
          </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
