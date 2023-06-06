import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../Assets/images/login-logo.png"
import WebButton from "../../../Components/Buttons/WebButton"
import SiteInput from "../../../Components/Inputs/SiteInput"
import Form from 'react-bootstrap/Form';
import { images } from '../../../Assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import "./styles.css";

function ForgetPassword() {
  const navigate = useNavigate();
  return (
    <>
      <section class="regiteration-signup">
        <div class="container-fluid">
          <div class="row align-items-center custom-height">
            <div class="col-lg-6 right-side custom-height alignment d-flex">

              <form action="" onSubmit={() => navigate("../PasswordVerificationCode")}>
                <div className="row">
                  <div className="col-12">
                    <div className='login-heading-box'>
                      <h2 className='login-heading'>Forgot Password</h2>
                      <p>Enter Your Email Address To Receive A Verification Code</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 form-group'>
                    <div className='form-field combine-field'>
                      <SiteInput
                        labelText="Email"
                        // required
                        type="email"
                        id="email"
                        className="site-input2"
                        placeholder="info@example.com"
                      />
                      <FontAwesomeIcon className='envelop' icon={faEnvelope} />
                    </div>
                  </div>
                </div>
                <WebButton
                  className="site-btn d-block text-center mt-4 mx-auto"
                  text="Continue"
                  
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
      </section>
    </>
  )
}

export default ForgetPassword
