import './style.css'
import Logo from '../../assets/logo.png'

function Index() {

  return (
    <>
      <div className='wrapper-0n-footer'> 
      <footer className="footer">
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={Logo} alt="Yatri Cabs" />
        </div>

        {/* Navigation Links */}
        <ul className="footer-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#privacy-policy">Privacy Policy</a></li>
        </ul>

        {/* Newsletter Section */}
        <div className="newsletter">
          <label htmlFor="newsletter">Newsletter</label>
          <div className="newsletter-input">
            <input type="email" id="newsletter" placeholder="Email" />
            <button type="submit">
              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>All Copyrights are reserved by YATRI CABS</p>
      </div>
    </footer>
      </div>
    </>
  )
}

export default Index
