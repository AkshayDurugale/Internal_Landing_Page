import React from "react";
import image from "../istockphoto.jpg";

const JoinUs = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={image}
              alt="logo"
              style={{ height: "90%", width: "100%" }}
            />
          </div>
          <div
            className="col-md-6 d-flex flex-column justify-content-center"
            style={{ textAlign: "left" }}
          >
            <h1>Start Organizing Your</h1>
            <h1>Life Today</h1>
            <p>
              Join us now and transform your productivity with our initivity
              to-do <br></br>list platform!
            </p>

            <div className="d-flex" style={{ gap: "15px" }}>
              <button type="button" className="btn btn-danger">
                Sign Up
              </button>
              <button type="button" className="btn btn-outline-danger">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
