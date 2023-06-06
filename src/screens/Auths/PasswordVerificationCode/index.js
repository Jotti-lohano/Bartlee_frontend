import { React, useContext ,useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import WebButton from "../../../Components/Buttons/WebButton"
import { images } from '../../../Assets'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { MyContext } from "../../../MyContext";
import axios from 'axios';

const PasswordVerificationCode = (props) => {
  const navigate = useNavigate();
  const {email} = useContext(MyContext);
  const [codes, setCodes] = useState(["", "", "", ""]);
  const [formData, setFormData] = useState({});
  
  const handleCodeChange = (e, index) => {
    const { value } = e.target;
    const newCodes = [...codes];
 
    newCodes[index] = value;
    setCodes(newCodes);

    if (value && index < 3) {
      const nextInput = document.querySelector(`.code-${index + 1}`);
      nextInput.focus();
    } else if (!value && index > 0) {
      const prevInput = document.querySelector(`.code-${index - 1}`);
      prevInput.focus();
    }

    console.log(document.getElementsByClassName('code-1'));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    formData.email = email;
    formData.code = [...codes].join('');
    console.log(formData);
     let response = await axios.post("v1/user/verify-token", formData).catch((e) => {
      console.log('ee',e);
       document.getElementById(
        "responseFromServer"
       ).innerHTML = `<div class="alert alert-danger"role="alert"><strong>Oops !</strong> ${e.response.data.error.message}</div>`;

      setTimeout(() => {
         document.getElementById("responseFromServer").children[0].hidden = true;
      }, 1500);
   });
console.log('sucess',response);
    if (response) {
      console.log(response);
      document.getElementById(
        "responseFromServer"
      ).innerHTML = `<div class="alert alert-success"role="alert"><strong>Success !</strong> ${response.data.response.message}</div>`;

      setTimeout(() => {
        document.getElementById("responseFromServer").hidden = true;
        navigate("/NewPassword");
      }, 1500);
    }
  };
  console.log('email2', email);
  return (
    <>
      <section class="regiteration-signup">
        <div class="container-fluid">
          <div class="row align-items-center custom-height">
            <div class="col-lg-6 right-side custom-height alignment d-flex">
            <div id="responseFromServer"></div>
              <form action="" onSubmit={(handleClick)}>
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

                    {codes.map((code, index) => (
           <input
           key={index}
                className={`code code-${index}`}
                type="text"
                placeholder="0"
                pattern="[0-9]"
                maxLength="1"
                required
                value={code}
                onChange={(e) => handleCodeChange(e, index)}
                
              />
            ))}
                      {/* <input className='code-input' type='text' maxLength='1' minLength='1' size='1' />
                      <input className='code-input' type='text' maxLength='1' minLength='1' size='1' />
                      <input className='code-input' type='text' maxLength='1' minLength='1' size='1' />
                      <input className='code-input' type='text' maxLength='1' minLength='1' size='1' /> */}
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
