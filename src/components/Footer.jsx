import React from "react";
import logo from "../logo.svg";
const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="row" style={{ marginBottom: "30px" }}>
          <div className="col-md-6">
            <div className="text-start mb-2">
              <img
                src={logo}
                alt="logo"
                className="mb-2"
                style={{ height: "50px" }}
              />
              <p>
                Subscribe to your news letter for the latest feature and updates
                <br></br>
                delivered to you.
              </p>
              <div className="d-flex mb-2" style={{ gap: "10px" }}>
                <input
                  type="email"
                  className="form-control"
                  placeholder="enter email here"
                  style={{ width: "70%", border: "1px solid" }}
                />{" "}
                <button
                  type="button"
                  className="btn btn-danger"
                  style={{ width: "100px" }}
                >
                  Join
                </button>
              </div>
              <p className="mb-2">
                By subscribing, you consent to our Privacy Policy and agree to
                receive updates.
              </p>
            </div>
          </div>
          <div className="col-md-2 d-flex flex-column align-items-start">
            <h6 className="mb-2">
              <b>Useful Links</b>
            </h6>
            <ul
              className="list-unstyled text-start"
              style={{ paddingBottom: "5px" }}
            >
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Blog Posts</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="col-md-2 d-flex flex-column align-items-start">
            <h6 className="mb-2">
              <b>Resources</b>
            </h6>
            <ul className="list-unstyled text-start m-0">
              <li>Help Center</li>
              <li>User Guide</li>
              <li>Community Forum</li>
              <li>Feedback</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="col-md-2 d-flex flex-column align-items-start">
            <h6 className="mb-2"  style={{ paddingBottom: "5px" }}>
              <b>Connect With Us</b>
              <ul className="list-unstyled text-start">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>X</li>
                <li>LinkedIn</li>   
                <li>YouTube</li>   
              </ul>
            </h6>
          </div>
        </div>
        <div className="row" style={{ borderTop: "1px solid" }}>
          <div className="col-md-6 mt-4 mb-4 text-start">
            <p>&copy; 2024 Osumare. All rights reserved</p>
          </div>
          <div className="col-md-6" style={{}}>
            <ul
              className="list-unstyled d-flex mt-4"
              style={{ gap: "20px", float: "right" }}
            >
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>Coockie Settings</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
