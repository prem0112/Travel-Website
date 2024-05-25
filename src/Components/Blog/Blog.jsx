import React, { useEffect } from "react";
import "./blog.css";
import { BsArrowRightShort } from "react-icons/bs";
import img1 from "../../Assets/bimage1.jpg";
import img2 from "../../Assets/bimage4.jpg";
import img3 from "../../Assets/bimage2.jpg";
import img4 from "../../Assets/bimage3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const Posts = [
  {
    postImage: img1,
    title: "Let us have an adventure outside Tunisia",
    desc: "Tunisa is a small Arab country in North Africa that represents both the aspirations of freedom and struggles against terrorism that roil the region",
  },
  {
    postImage: img3,
    title: "Explore the City, Scotland",
    desc: "Scotland, part of the UK, is famed for its rich history, stunning landscapes, and vibrant culture. It is located in northern Great Britain, bordered by England, the Atlantic Ocean, and the North Sea.",
  },
  {
    postImage: img4,
    title: "Brown Wooden House Surrounded by Grass",
    desc: "A charming brown wooden house sits peacefully, surrounded by lush, green grass. Its rustic appeal blends seamlessly with the natural beauty of the serene countryside.",
  },
  {
    postImage: img2,
    title: "Hike the Rocky Mountains, Canada",
    desc: "Hike the Rocky Mountains in Canada to enjoy breathtaking landscapes and diverse wildlife. Traverse scenic trails through rugged peaks, lush forests, and crystal-clear lakes.",
  },
];

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experince in the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {Posts.map(({ postImage, title, desc }) => {
            return (
              <div
                data-aos="fade-down-left"
                data-aos-duration="2000"
                className="singlePost grid"
              >
                <div className="imgDiv">
                  <img src={postImage} alt="Image Name" />
                </div>
                <div className="postDetails">
                  <h3 data-aos="flip-right" data-aos-duration="2000">
                    {title}
                  </h3>
                  <p data-aos="flip-right" data-aos-duration="2500">
                    {desc}
                  </p>
                </div>
                <a
                  data-aos="zoom-in-right"
                  data-aos-duration="3000"
                  href="#"
                  className="flex"
                >
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
