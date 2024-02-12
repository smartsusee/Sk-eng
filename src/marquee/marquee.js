import React from "react";
import img1 from "../images/marquee_img/logo_1.png";
import img2 from "../images/marquee_img/logo_2.png";
import img3 from "../images/marquee_img/logo_3.png";
import img4 from "../images/marquee_img/logo_4.png";
import img5 from "../images/marquee_img/logo_5.png";
import "./marquee.css";

function Marquee() {
  return (
    <>
      <div className="container-fluid">
        <div className="row col-lg-12 mt-1 text-center p-5">
          {/* <div
              className="col-lg-2 d-flex align-items-center justify-content-end"
              style={{
                fontSize: "15px",
                textShadow: "10px 10px 10px",
                fontWeight: "900",
              }}
            >
              OUR AWESOME CLIENTS
            </div> */}
          <div className="col-lg-2 p-2 mt-5">
            <img src={img4} alt="" style={{ width: "120px", height: "50px" }} />
          </div>
          <div className="col-lg-2 p-2 mt-5">
            <img src={img1} alt="" style={{ width: "120px", height: "50px" }} />
          </div>
          <div className="col-lg-2 p-2 mt-5">
            <img src={img2} alt="" style={{ width: "120px", height: "50px" }} />
          </div>
          <div className="col-lg-2 p-2 mt-5">
            <img src={img3} alt="" style={{ width: "120px", height: "50px" }} />
          </div>
          <div className="col-lg-2  mt-5">
            <img src={img4} alt="" style={{ width: "120px", height: "50px" }} />
          </div>
          <div className="col-lg-2  mt-5">
            <img src={img5} alt="" style={{ width: "120px", height: "50px" }} />
          </div>
        </div>

        <div className="row col-lg-12 mt-5 bg bg-dark p-5 ">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 text-center">
            <h1
              style={{
                fontSize: "30px",
                color: "yellow",
                // textTransform: "uppercase",
                fontVariant: "small-caps",
              }}
            >
              Address
            </h1>
            <div
              className="mt-3"
              style={{
                fontSize: "20px",
                lineHeight: "30px",
                color: "white",
                fontVariant: "small-caps",
              }}
            >
              96 Gandhiji Street, Anthiyur, Coimbatore 638601 (TN)
            </div>
          </div>
          <div
            className="col-lg-1"
            style={{ color: "white", fontSize: "22px" }}
          >
            <i class="fa-brands fa-instagram">
              <span
                style={{
                  fontSize: "8px",
                  marginLeft: "5px",
                  marginTop: "10px",
                  position: "absolute",
                }}
                className="font"
              >
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  whatsapp
                </a>
              </span>
            </i>
          </div>
          <div
            className="col-lg-1"
            style={{ color: "white", fontSize: "22px" }}
          >
            <i class="fa-brands fa-facebook-f">
              <span
                style={{
                  fontSize: "8px",
                  marginLeft: "5px",
                  marginTop: "10px",
                  position: "absolute",
                }}
                className="font"
              >
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  facebook
                </a>
              </span>
            </i>
          </div>
          <div
            className="col-lg-1"
            style={{ color: "white", fontSize: "22px" }}
          >
            <i class="fa-brands fa-whatsapp">
              <span
                style={{
                  fontSize: "8px",
                  marginLeft: "5px",
                  marginTop: "10px",
                  position: "absolute",
                }}
                className="font"
              >
                <a href="#" style={{ textDecoration: "none", color: "white" }}>
                  whatsapp
                </a>
              </span>
            </i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Marquee;
