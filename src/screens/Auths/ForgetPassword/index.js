import { React, useContext ,useState,useEffect } from 'react'
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

import axios from "axios";
import { MyContext } from "../../../MyContext";


import "./styles.css";


  
const ForgetPassword = (props) => {

  const { email, setEmail } = useContext(MyContext); 
  
  
  useEffect(() => {
    setEmail(formData.email);
    console.log('formData',email);
  });
  
  const [formData, setFormData] = useState({})
  

  const handleClick = async (e) => {
    
    e.preventDefault()
    // let response = await axios.post("http://localhost/BARTLEE/bartlee/api/v1/user/forgot-password", formData).catch((e) => {
    let response = await axios.post("http://127.0.0.1:8000/api/v1/user/forgot-password", formData).catch((e) => {
      console.log('eee');
        document.getElementById(
          "responseFromServer"
        ).innerHTML = `<div class="alert alert-danger"role="alert"><strong>Oops !</strong> ${e.response.data.message}</div>`;
  
        setTimeout(() => {
          document.getElementById("responseFromServer").children[0].hidden = true;
        }, 1500);
      });
  
      if (response.status == 200) {
        
        document.getElementById(
          "responseFromServer"
        ).innerHTML = `<div class="alert alert-success"role="alert"><strong>Success !</strong> ${response.data.response.message}</div>`;

       // props.emailHandler(formData);
        setTimeout(() => {
          document.getElementById("responseFromServer").hidden = true;
          navigate("/PasswordVerificationCode");
        }, 1000);
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
              <form onSubmit={handleClick} >
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
                        onChange={(event) => {
                          setFormData({ ...formData, email: event.target.value });
                        }}
                      />
                      <FontAwesomeIcon className='envelop' icon={faEnvelope}  />
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
