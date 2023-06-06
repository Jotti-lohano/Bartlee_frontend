import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import WebButton from "../../../Components/Buttons/WebButton"
// import AuthInput from "../../../Components/Inputs/AuthInput"
import SiteInput from "../../../Components/Inputs/SiteInput"
import { images } from '../../../Assets'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import "./styles.css";
// import { Button } from 'bootstrap';

function Login() {
  const navigate = useNavigate();
  return (
    <>
      <section class="regiteration-signup">
        <div class="container-fluid">
          <div class="row align-items-center custom-height">
            <div class="col-lg-6 right-side custom-height alignment d-flex">

              <form action="" onSubmit={() => navigate("/Dashboard")}>
                <div className="row">
                  <div className="col-12">
                    <div className='login-heading-box'>
                      <h2 className='login-heading'>Login</h2>
                      <p>Please Login In To Continue</p>
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
                  <div className='col-12 form-group position-relative'>
                    <div className='form-field combine-field'>
                      <SiteInput
                        // labelText="Password"
                        // required
                        type="password"
                        id="password"
                        className="site-input2"
                        placeholder="Enter Your Password"
                      />
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check
                        type={type}
                        id={`default-${type}`}
                        label={`Remember me`}
                      />
                    </div>
                  ))}
                  <div class="">
                    <Link class="forgot" to="/forgetPassword">Forgot Password ?</Link>
                  </div>
                </div>
                <WebButton
                  className="site-btn d-block text-center mx-auto"
                  text="Login"
                />
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

export default Login
