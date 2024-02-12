import React from "react";
import { Link } from "react-router-dom";
import img_2 from "../images/logo.jpeg";

function About() {
  return (
    <div>
      <div style={{ position: "relative" }} className="m-3  ">
        <nav
          className="navbar navbar-expand-md  
                navbar-dark bg-dark"
        >
          <div className="container-fluid" data-aos="zoom-out-right">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarToggler"
              aria-controls="navbarToggler"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <img
              src={img_2}
              alt=""
              style={{ width: "80px", height: "50px", borderRadius: "20px" }}
            />
            <div
              className="collapse navbar-collapse"
              id="navbarToggler"
              data-aos="zoom-out-right"
            >
              {/* <a className="navbar-brand" href="#">
                Hidden Navbar
              </a> */}

              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li
                  className="nav-item"
                  style={{ fontSize: "15px", marginLeft: "30px" }}
                >
                  <Link
                    to="/home"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li
                  className="nav-item"
                  style={{ fontSize: "15px", marginLeft: "30px" }}
                >
                  <Link
                    to="/About"
                    className="nav-link active"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li
                  className="nav-item "
                  style={{ fontSize: "15px", marginLeft: "30px" }}
                >
                  <Link
                    to="/Product"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Product
                  </Link>
                </li>
                <li
                  className="nav-item"
                  style={{ fontSize: "15px", marginLeft: "30px" }}
                >
                  <Link
                    to="/Specification"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Specification
                  </Link>
                </li>
                <li
                  className="nav-item"
                  style={{ fontSize: "15px", marginLeft: "30px" }}
                >
                  <Link
                    to="/Colourrange"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Colour range
                  </Link>
                </li>
                <li
                  className="nav-item"
                  style={{ fontSize: "15px", marginLeft: "30px" }}
                >
                  <Link
                    to="/Contactus"
                    className="nav-link active"
                    aria-current="page"
                  >
                    {" "}
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default About;
