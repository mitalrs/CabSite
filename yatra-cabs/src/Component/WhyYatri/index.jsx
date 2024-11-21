import './style.css'

function Index() {

  return (
    <>
       <div className="why-yatri">
      <h2 className="section-title">
        WHY <span className="highlight">YATRI</span> ?
      </h2>
      <div className="content-container">
        <div className="image-container">
          <img
            src="https://via.placeholder.com/500x300" // Replace with actual car image URL
            alt="Car"
            className="car-image"
          />
        </div>
        <div className="features-container">
          <div className="feature">
            <span className="feature-icon">⏱️</span>
            <div>
              <h3 className="feature-title">FAST RESPONSE TIME</h3>
              <p className="feature-description">
                Experience The Best Car Rental Service With Driver For Local Or
                Outstation Trips. Enjoy Prompt Response Times And Seamless Car
                Hire Service, Ensuring You Get On The Road Quickly.
              </p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon">🚗</span>
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
            <span className="feature-icon">📱</span>
            <div>
              <h3 className="feature-title">EASY TO ORDER</h3>
              <p className="feature-description">
                Easily Book A Cab Online Through Our User-Friendly Website,
                Mobile Application, Or By Calling Our Customer Support Team.
              </p>
            </div>
          </div>
          <div className="feature">
            <span className="feature-icon">💰</span>
            <div>
              <h3 className="feature-title">GREAT TARIFFS</h3>
              <p className="feature-description">
                Rent A Car At The Lowest Rates! Our Car Hire Tariffs Are Highly
                Competitive Compared To Other Operators. Book Online Cabs At The
                Best Prices With Yatri Car Rental.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Index