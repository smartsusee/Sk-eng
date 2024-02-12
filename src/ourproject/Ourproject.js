import React from "react";
import img1 from "../images/whatimg/WhatsApp Image 2024-01-26 at 10.41.33 AM.jpeg";
import img2 from "../images/whatimg/WhatsApp Image 2024-01-26 at 10.41.34 AM.jpeg";
import img3 from "../images/whatimg/WhatsApp Image 2024-01-26 at 10.41.35 AM.jpeg";

import "../ourproject/ourproject.css";

function Ourproject() {
  return (
    <>
      <div className="container-fluid mt-4">
        <div className="col-lg-12 text-center">
          <h2 className="ourproject" style={{ fontVariant: "small-caps" }}>
            Our Project
          </h2>

          <div className="row">
            <div className="col-lg-1 "></div>
            <div className="col-lg-3  mt-5">
              <img
                className="img-sha"
                src={img1}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
              <p className="mt-4">hello</p>
            </div>
            {/* <div className="col-lg-1 "></div> */}
            <div className="col-lg-4 mt-5">
              <img
                className="img-sha"
                src={img2}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
              <p className="mt-4  text-center">hello</p>
            </div>
            {/* <div className="col-lg-1 "></div> */}
            <div className="col-lg-3  mt-5">
              <img
                className="img-sha"
                src={img3}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />
              <p className="mt-4 text-center ">hello</p>
            </div>
          </div>
        </div>

        {/* _______________________ test monails_______________________*/}
        <div className="row">
          <div className="col-lg-12 text-center mt-5">
            <h2 className="TESTIMONIALS" style={{ fontVariant: "small-caps" }}>
              TestMonials
            </h2>

            <div className="row mt-5  justify-content-center">
              {/* <div className="col-lg-1"></div> */}
              <div
                className="col-lg-4 p-5 mt-5 text-white  Manythanks "
                style={{
                  backgroundColor: "black",
                  borderRadius: "5px",
                  fontVariant: "small-caps",
                }}
              >
                Many thanks for your roofing system which saved my customers at
                parking.we appreciate your quality concern methods!
              </div>
              <div className="col-lg-1 "></div>
              <div
                className="col-lg-4 mt-5 pt-5 text-white Manythanks"
                style={{
                  backgroundColor: "black",
                  borderRadius: "5px",
                  fontVariant: "small-caps",
                }}
              >
                Many thanks for your roofing system which saved my customers at
                parking.we appreciate your quality concern methods!
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* _________________End ____________________ */}

      {/* _______________________1100+_______________________ */}

      <div className="continer-fluid mt-5  ">
        <div className="row col-lg-12 incresebtn text-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-1 increase mt-4">
            1100+
            <p
              className="mt-3"
              style={{
                fontSize: "25px",
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "lightgray",
              }}
            >
              Clients
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-1 increase mt-4">
            1020+
            <p
              className="mt-3"
              style={{
                fontSize: "25px",
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "lightgray",
              }}
            >
              Project
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-1 increase mt-4">
            1010+
            <p
              className="mt-3"
              style={{
                fontSize: "25px",
                fontFamily: "monospace",
                fontWeight: "bold",
                color: "lightgray",
              }}
            >
              Experience
            </p>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-1"></div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </>
  );
}

export default Ourproject;
