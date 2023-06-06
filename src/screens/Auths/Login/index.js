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
import { useState } from 'react';
import axios from "axios";
// import { Button } from 'bootstrap';

function Login() {

  const [formData, setFormData] = useState({})

  const handleClick = async (e) => {
    e.preventDefault()

    let response = await axios.post("v1/user/login", formData).catch((e) => {

      if(e.response.data.email ){
        document.getElementById(
          "responseFromServer"
        ).innerHTML = `<div class="alert alert-danger"role="alert"><strong>Oops !</strong>  ${e.response.data.email} </div>`;
      }
      else if(e.response.data.password ){
        document.getElementById(
          "responseFromServer"
        ).innerHTML = `<div class="alert alert-danger"role="alert"><strong>Oops !</strong>  ${e.response.data.password}</div>`;
      }
      else{
        document.getElementById(
          "responseFromServer"
        ).innerHTML = `<div class="alert alert-danger"role="alert"><strong>Oops !</strong> ${e.response.data.error.message}</div>`;
      }   
        setTimeout(() => {
          document.getElementById("responseFromServer").children[0].hidden = true;
        }, 1500);
      });

      if (response.status === 200) {
        document.getElementById(
          "responseFromServer"
        ).innerHTML = `<div class="alert alert-success"role="alert"><strong>Success !</strong> Redirecting to Dashboard</div>`;
 
        localStorage.setItem("_token", response.data.response.data.token_detail.access_token);
         console.log("_token", response.data.response.data.token_detail.access_token);
     
        localStorage.setItem("user", JSON.stringify(response.data.response.data));
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.response.data.token_detail.access_token}`;
        setTimeout(() => {
     
          document.getElementById("responseFromServer").hidden = true;
          navigate("/dashboard");
        }, 500);
       
      }else{
        localStorage.setItem("_token",'');
     
        localStorage.setItem("user", '');
      }        
}


  const navigate = useNavigate();
  return (
    <>
      <section class="regiteration-signup">
        <div class="container-fluid">
          <div class="row align-items-center custom-height">
            <div class="col-lg-6 right-side custom-height alignment d-flex">
            <div id="responseFromServer"></div>
              <form action="" onSubmit={handleClick}>
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
                        onChange={(event) => {
                          setFormData({ ...formData, email: event.target.value });
                        }}
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
                        onChange={(event) => {
                          setFormData({ ...formData, password: event.currentTarget.value });
                        }}
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
