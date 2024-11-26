import "./style.css";
import car from "../../assets/cab.png";
import { FiFlag } from "react-icons/fi";
import { FaUsers } from "react-icons/fa6";
import { BsPhone } from "react-icons/bs";
import { LuCircleDollarSign } from "react-icons/lu";

function Index() {
  return (
    <>
      <div className="why-yatri">
        <div className="content-container">
          <h2 className="section-title mobile-view">
            WHY <span className="highlight">YATRI</span> ?
          </h2>
          <div className="image-container">
            <img src={car} alt="Car" className="car-image" />
          </div>
          <div className="features-container">
            <h2 className="section-title desktop-view">
              WHY <span className="highlight"> YATRI</span> ?
            </h2>
            <div className="feature">
              <FiFlag className="feature-icon" />
              <div>
                <h3 className="feature-title">FAST RESPONSE TIME</h3>
                <p className="feature-description">
                  Experience The Best Car Rental Service With Driver For Local
                  Or Outstation Trips. Enjoy Prompt Response Times And Seamless
                  Car Hire Service, Ensuring You Get On The Road Quickly.
                </p>
              </div>
            </div>
            <div className="feature">
              <FaUsers className="feature-icon" />
              <div>
                <h3 className="feature-title">VAST FLEET</h3>
                <p className="feature-description">
                  We Offer A Wide Range Of Rental Cars Including Sedans, SUVs,
                  MUVs, Premium Sedans, And Tempo Travellers To Meet All Your
                  Needs.
                </p>
              </div>
            </div>
            <div className="feature">
              <BsPhone className="feature-icon" />
              <div>
                <h3 className="feature-title">EASY TO ORDER</h3>
                <p className="feature-description">
                  Easily Book A Cab Online Through Our User-Friendly Website,
                  Mobile Application, Or By Calling Our Customer Support Team.
                </p>
              </div>
            </div>
            <div className="feature">
              <LuCircleDollarSign className="feature-icon" />
              <div>
                <h3 className="feature-title">GREAT TARIFFS</h3>
                <p className="feature-description">
                  Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are
                  Highly Competitive Compared To Other Operators. Book Online
                  Cabs At The Best Prices With Yatri Car Rental.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
