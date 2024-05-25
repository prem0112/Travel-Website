import React, { useEffect } from "react";
import "./footer.css";
import { GiAirplaneDeparture } from "react-icons/gi";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer">
      <div className="sceContainer container grid">
        <div data-aos="flip-up" data-aos-duration="2000" className="logoDiv">
          <div
            data-aos="zoom-out-down"
            data-aos-duration="2000"
            className="footerLogo"
          >
            <a href="#" className="logo flex">
              <h1 className="flex">
                <GiAirplaneDeparture className="icon" />
                JetSet
              </h1>
            </a>
          </div>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="3000"
            className="socials flex"
          >
            <ImFacebook className="icon" />
            <BsTwitter className="icon" />
            <AiFillInstagram className="icon" />
          </div>
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-duration="3000"
          className="footerLinks"
        >
          <span className="linkTitle">Information</span>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Travel</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </div>
        <div
          data-aos="zoom-out-down"
          data-aos-duration="3500"
          className="footerLinks"
        >
          <span className="linkTitle">Helpful Links</span>
          <li>
            <a href="#">Destination</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Travel & Condition</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </div>
        <div  data-aos="zoom-out-down"  data-aos-duration="4000" className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+91 832 805 8457</span>
          <span className="email">jetsettravels07@gmail.com</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
