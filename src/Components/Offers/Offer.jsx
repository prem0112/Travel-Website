import React, {useEffect} from "react";
import "./offer.css";
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { MdAirportShuttle } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img6 from "../../Assets/oimage2.jpg";
import img7 from "../../Assets/oimage3.jpg";
import img8 from "../../Assets/oimage1.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Offers = [
  {
    id: 1,
    imgSrc: img8,
    stTdeitle: "Machu Picchu",
    location: "1010 Avenida Larco #7A, Trujillo",
    price: "$2,452",
  },
  {
    id: 2,
    imgSrc: img6,
    stTdeitle: "Machu Picchu",
    location: "45 Calle La Merced #201, Cusco",
    price: "$1,840",
  },
  {
    id: 3,
    imgSrc: img7,
    stTdeitle: "Machu Picchu",
    location: "215 Calle San Martin #4B, Puno",
    price: "$2,001",
  },
];
const Offer = () => {
useEffect(()=>{
Aos.init({duration:2000})
},[])
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            From historical cities to natural specteculars, come see the best of
            the World!
          </p>
        </div>
        <div className="mainContent grid">
          {Offers.map(({ id, imgSrc, stTdeitle, location, price }) => {
            return (
              <div className="singleOffer">
                <div data-aos="fade-up" data-aos-duration="3000" className="destImage">
                  <img src={imgSrc} alt={stTdeitle} />
                  <span className="discount">45% Off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>1 Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>{location}</small>
                  </div>
                  <button className="btn flex">
                    View Details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Offer;
