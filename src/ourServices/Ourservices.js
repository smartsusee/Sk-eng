import React from "react";
import "./ourService.css";
import img1 from "../images/whatimg/WhatsApp Image 2024-01-26 at 10.41.44 AM.jpeg";
import img2 from "../images/whatimg/WhatsApp Image 2024-01-26 at 10.41.42 AM.jpeg";
import img3 from "../images/whatimg/WhatsApp Image 2024-01-26 at 10.41.41 AM (1).jpeg";
import img4 from "../images/whatimg/WhatsApp Image 2024-01-26 at 10.41.40 AM (1).jpeg";
import img5 from "../images/whatimg/WhatsApp Image 2024-01-26 at 10.41.39 AM.jpeg";
import img6 from "../images/whatimg/WhatsApp Image 2024-01-26 at 10.41.38 AM (1).jpeg";

function Ourservices() {
  return (
    <>
      <div className="container-fluid">
        {/* _______ box1 our ser_______ */}
        <div className="row">
          <div className="col-lg-12 text-center bg-col  mt-4">
            <h1>our services</h1>
            <div className="row mt-5">
              {/* <div className="col-lg-1"></div> */}
              <div className="col-lg-4">
                {/* _____one_____  */}
                <div className=" p-3 mt-4">
                  <img
                    className="img_big"
                    src={img1}
                    alt="1"
                    style={{ width: "250px", height: "300px" }}
                  />
                  <p className="text-center mt-5">WALL CADDING</p>
                </div>
              </div>
              <div className="col-lg-4">
                {/* _____two_____  */}
                <div className="p-3 mt-4">
                  <img
                    className="img_big"
                    src={img2}
                    alt="1"
                    style={{ width: "250px", height: "300px" }}
                  />
                  <p className="text-center mt-5">ZINCALUME</p>
                </div>
              </div>

              <div className="col-lg-4">
                {/* _____three_____  */}
                <div className=" p-3 mt-4">
                  <img
                    className="img_big"
                    src={img3}
                    alt="1"
                    style={{ width: "250px", height: "300px" }}
                  />
                  <p className="text-center mt-5">SMART BUILDING</p>
                </div>
              </div>
            </div>

            <div className="row mt-5">
              <div className="col-lg-4">
                {/* _____four_____  */}
                <div className=" p-3 mt-4">
                  <img
                    className="img_big"
                    src={img4}
                    alt="1"
                    style={{ width: "250px", height: "300px" }}
                  />
                  <p className="text-center mt-5">WALL CADDING</p>
                </div>
              </div>
              <div className="col-lg-4">
                {/* _____five_____  */}
                <div className="p-3 mt-4">
                  <img
                    className="img_big"
                    src={img5}
                    alt="1"
                    style={{ width: "250px", height: "300px" }}
                  />
                  <p className="text-center mt-5">ZINCALUME</p>
                </div>
              </div>
              <div className="col-lg-4">
                {/* _____six_____  */}
                <div className=" p-3 mt-4">
                  <img
                    className="img_big"
                    src={img6}
                    alt="1"
                    style={{ width: "250px", height: "300px" }}
                  />
                  <p className="text-center mt-5">SMART BUILDING</p>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-lg-5"></div>
              <div className="col-lg-2 butn_1">
                <button className="butn p-2 ">view all service</button>
              </div>
              {/* <div className="col-lg-2">213</div> */}
              <div className="col-lg-5"></div>
            </div>
          </div>

          {/* _______end ______________ */}
        </div>

        <div className="row border border-2 mt-3 p-5 bg bg-dark">
          <div className="col-lg-12 mt-5 p-5 hari">
            <h2 style={{ color: "white" }}>
              Hari Om Roofing Industries is one of the leading and the largest
              <br />
              <br />
              <span>private sector producer of roofing sheets in India.</span>
            </h2>
          </div>
        </div>

        <div className="row mt-3 ">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 chooseus">
            <div className="mt-3">
              <h2 style={{ fontVariant: "small-caps" }}>Why Choose Us</h2>
            </div>
            <h4 className="mt-3 hariom">
              Hari Om Roofing Industries foundied by chairman Mr H Harish. Our
              range of pre-engineered buildings, roofing, cladding and rainwater
            </h4>
            <h4 className="hariom">
              systems, made from raw materials of the highest quality in
              accordance
            </h4>
            <h4 className="hariom">
              with strict ASTM / JIS / AS and IS standards, offers flexibility
              of design to
            </h4>
            <h4 className="hariom">
              suit any construction need be it your business, factory, home or
              office.
            </h4>
            <h4 className="hariom">
              Our products are made to meet your aesthetic needs as well.
            </h4>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </>
  );
}

export default Ourservices;
