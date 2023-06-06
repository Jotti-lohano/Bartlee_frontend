import { React, useContext ,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import WebButton from "../../../Components/Buttons/WebButton"
import { images } from '../../../Assets'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { MyContext } from "../../../MyContext";


function PasswordVerificationCode() {
  const navigate = useNavigate();
  const {email} = useContext(MyContext);
  console.log('email2',email);
  return (
    <>
      <section class="regiteration-signup">
        <div class="container-fluid">
          <div class="row align-items-center custom-height">
            <div class="col-lg-6 right-side custom-height alignment d-flex">

              <form action="" onSubmit={() => navigate("../NewPassword")}>
                <div className="row">
                  <div className="col-12">
                    <div className='login-heading-box'>
                      <h2 className='login-heading'>Verification Code</h2>
                      <p>An Email Has Been Sent To You With A Verification Code. <br />
                        Please Enter It Here.</p>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12 form-group position-relative'>
                    <div className='form-field for-code'>
                      <input className='code-input' type='text' maxLength='1' minLength='1' size='1' />
                      <input className='code-input' type='text' maxLength='1' minLength='1' size='1' />
                      <input className='code-input' type='text' maxLength='1' minLength='1' size='1' />
                      <input className='code-input' type='text' maxLength='1' minLength='1' size='1' />
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-end">
                  <div class="">
                    <Link class="forgot" to="">Resend Code</Link>
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

export default PasswordVerificationCode
