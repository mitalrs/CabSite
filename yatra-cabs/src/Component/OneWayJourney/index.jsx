import './style.css'

function Index() {

  return (
    <>
      <div className="one-way-journey">
      <div className="content">
        <h2>
          WHY CHOOSE AC BUS OR AC TRAIN FOR YOUR <span className="highlight">ONE-WAY JOURNEY?</span>
        </h2>
        <p>
          Our Oneway Cab Service Is Cheaper Than AC Bus And 2 Tier AC Train Ticket Fares, It Reduces
          Your Travel Time And You Travel At Your Own Private Space Also To Enjoy Your Journey. Our
          One Way Taxi Will Come At Your Doorstep And Take You To Your Desired Destination. So Book
          You Oneway Cab From Lucknow To Gorakhpur Or Varanasi To Bareilly.
        </p>
        <a href="#read-more" className="read-more">Read More....</a>
      </div>
      <div className="image-container">
        <img
          src="https://via.placeholder.com/600x400" /* Replace with actual image URL */
          alt="Taxi booking illustration"
          className="illustration"
        />
      </div>
    </div>
    </>
  )
}

export default Index
