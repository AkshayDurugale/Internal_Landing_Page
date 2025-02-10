import React from 'react'
import logo from "../logo.svg"

const Header = () => {
  return (
   <>
   <div className="container">
  <div className="row align-items-center text-center">
    <div className="col-md-6 d-flex justify-content-center">
      <img src={logo} alt="logo" className="img-fluid" style={{ height: '50px',marginRight: '572px'
      }} />
    </div>
    <div className="col-md-6">
      <ul className="ml-5 list-unstyled d-flex justify-content-center align-items-center gap-3 m-0 p-3">
        <li>About Us</li>
        <li>Features</li>
        <li>More Option</li>
        <li>Contact</li>
        <li>
          <button type="button" className="btn btn-outline-danger">Log In</button>
        </li>
        <li>
          <button type="button" className="btn btn-danger">Sign Up</button>
        </li>
      </ul>
    </div>
  </div>
</div>

   </>
  )
}

export default Header