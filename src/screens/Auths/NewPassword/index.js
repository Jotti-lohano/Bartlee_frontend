import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../Assets/images/login-logo.png"
import WebButton from "../../../Components/Buttons/WebButton"
import SiteInput from "../../../Components/Inputs/SiteInput"
import Modals from '../../../Components/Modals';
import { images } from '../../../Assets'
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function NewPassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleRedirection = () => redirect;
  const handleRedirection = () => {
    // Perform any necessary actions or logic before redirection if needed.

    // Redirect to the desired location using history.push()
    navigate("/");
  };




  return (

    <>
      <section class="regiteration-signup">
        <div class="container-fluid">
          <div class="row align-items-center custom-height">
            <div class="col-lg-6 right-side custom-height alignment d-flex">

              <form action="">
                <div className="row">
                  <div className="col-12">
                    <div className='login-heading-box'>
                      <h2 className='login-heading'>New Password</h2>
                      <p>Type In Your New Password</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 form-group'>
                    <div className='form-field combine-field'>
                      <SiteInput
                        // labelText="New Password"
                        // required
                        type="password"
                        id="password"
                        className="site-input2"
                        placeholder="Enter New Password"
                        onChange={(event) => {
                          setFormData({ ...formData, password: event.target.value })
                      }}
                      />
                    </div>
                  </div>
                  <div className='col-12 form-group'>
                    <div className='form-field combine-field'>
                      <SiteInput
                        // labelText="Confirm Password"
                        // required
                        type="password"
                        id="password"
                        className="site-input2"
                        placeholder="Enter Confirm Password"
                        onChange={(event) => {
                          setFormData({ ...formData, password_confirmation: event.target.value })
                      }}
                      />
                    </div>
                  </div>
                </div>
                <WebButton onClick={handleShow}
                  className="site-btn d-block text-center mt-4 mx-auto"
                  text="Update"
                  type="button"
                />
                <div class="col-12 text-center">
                  <span className='backlink'>Back to <Link class="back" to={"/"}> Login</Link></span>
                </div>
              </form>
            </div>
            <div class="col-lg-6 left-side custom-height d-lg-flex d-none">
              <div class="inr-right">
                <img src={images.abc} className='img-fluid abc-pic' />
                <img src={images.authlogo} className='img-fluid pb-3 auth-logo' />
              </div>
            </div>
          </div>
        </div>
        <Modals show={show} modalicon={images.check} modalbtntext="Continue" text={"Your Password Has Been Reset. Please Login To Continue."} handleClose={handleClose} handleActionSingle={handleRedirection} close={() => { setShow(false) }} />
      </section>
    </>
  )
}

export default NewPassword
