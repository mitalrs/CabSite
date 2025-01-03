import "./style.css";
import logo from "../../../assets/logo.png";
import { RiMobileDownloadLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";

function Index() {
  return (
    <>
      <div className="nav-bar">
        <div>
          <img className="logo" src={logo} alt="Logo" />
        </div>
        <div className="contact">
        <a href="tel:+917860663399">+917860663399</a>
        </div>
        <div className="right-menu-items">
          <div className="item-container download-icon">
            <RiMobileDownloadLine className="icon" />
            <p>Download App</p>
          </div>
          <div className="item-container">
            <FaRegUserCircle className="icon" />
            <p>Hi, UserName</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
