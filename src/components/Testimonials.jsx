import React from "react";
import cronin from "../Cronin.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="container mt-2 mb-5">
        <h1 style={{ textAlign: "left", marginBottom: "20px" }}>
          Customer Testimonials
        </h1>
        <p style={{ textAlign: "left", marginBottom: "20px" }}>
          This toll has transformed my productivity and organization!
        </p>
        <div className="row align-items-center">
          <div
            className="col-md-4 "
            style={{
              textAlign: "left",
              border: "10px solid red",
              height: "360px",
            }}
          >
            <div
              className="r1 d-flex flex-column justify-content-center"
              style={{
                display: "flex",
                zIndex: 1,
                marginLeft: "120px",
                marginTop: "20px",
                height: "300px",
                width: "500px",
                backgroundColor: "White",
                textAlign: "left",
                padding: "20px",
              }}
            >
              <h3>
                Using this website has made my tasks so much easier! I can't
                imagine my day without it."
              </h3>
              <h6>Sherri Cronin</h6>
              <p>Project Manager,TechCorp</p>
            </div>
          </div>
          <div
            className="col-md-4 d-flex flex-column justify-content-center"
            style={{
              textAlign: "left",
              marginLeft: "100px",
              backgroundColor: "black",
              height: "200px",
              width: "300px",
              marginTop: "55px",
              zIndex: "-1",
              border: "10px solid red",
            }}
          >
            <img src={cronin} alt="" width={270} height={190} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
