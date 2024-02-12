import React from "react";
import img_1 from "../images/logo.jpeg";
import img_2 from "../images/Slide1.JPG";
import img_3 from "../images/whatimg/WhatsApp Image 2024-01-26 at 10.41.34 AM (2).jpeg";
// import "../css/slider.css";
function Slider() {
  return (
    <div className="container" data-aos="fade-up-left" id="slider-top">
      {/* <h2>Carousel Example</h2> */}
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img
              src={img_1}
              alt="isu"
              style={{ width: "100%", height: "400px" }}
            />
          </div>

          <div className="item">
            <img
              src={img_2}
              alt="isu"
              style={{ width: "100%", height: "400px" }}
            />
          </div>

          <div className="item">
            <img
              src={img_3}
              alt="isu"
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        </div>

        <a
          className="left carousel-control"
          href="#myCarousel"
          data-slide="prev"
        >
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          href="#myCarousel"
          data-slide="next"
        >
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Slider;
