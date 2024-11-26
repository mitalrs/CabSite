import "./style.css";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { RiCloseLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";

function Index() {
  return (
    <>
      <div className="oneway">
        <div className="container-of-field">
          <div className="top-container">
            <div className="field-wrapper">
              <p className="p-for-field">FROM</p>
              <div className="input-wrapper">
                <input for="from" type="text" />
                <RiCloseLine className="icon" />
              </div>
            </div>
            <div className="icon-wrapper">
            <FaArrowRightArrowLeft className="icon"/>
            </div>
            <div className="field-wrapper">
              <p className="p-for-field">TO</p>
              <div className="input-wrapper">
                <input type="text" />
                <IoLocationOutline className="icon" />
              </div>
            </div>
          </div>
          <div className="bottom-container">
            <div className="field-wrapper">
              <p className="p-for-field">PICK UP DATE</p>
              <div className="input-wrapper">
                <input for="from" type="text" />
                <FaRegCalendarAlt className="icon" />
              </div>
            </div>
            <span className="icon-wrapper"></span>
            <div className="field-wrapper">
              <p className="p-for-field">PICK UP AT</p>
              <div className="input-wrapper">
                <input type="text" />
                <MdOutlineWatchLater className="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="explore-btn">
          <button className="btn">EXPLORE CABS</button>
        </div>
      </div>
    </>
  );
}

export default Index;
