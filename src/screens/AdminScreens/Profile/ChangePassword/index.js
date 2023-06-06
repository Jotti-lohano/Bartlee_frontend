import React, { useState } from 'react'
import WebButton from '../../../../Components/Buttons/WebButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Layout } from '../../../../Components/Layout/layout.js';
import { images } from '../../../../Assets';
import SiteInput from "../../../../Components/Inputs/SiteInput";
import { Link } from 'react-router-dom';
import Modals from '../../../../Components/Modals';
import { useNavigate } from "react-router-dom";
import axios  from 'axios';
function ChangePassword() {
    let navigate = useNavigate();

    const [show1, setShow1] = useState(false);

    const [userData, setUserData] = useState({});

    
    const handleShow11 = async (e) => {
        console.log('saassaassa');
        e.preventDefault();
        console.log(userData);
        if (
          !userData.old_password ||
          !userData.password ||
          !userData.password_confirmation
        ) {
          document.getElementById(
            "resultDiv"
          ).innerHTML = `<div class="alert alert-danger" id="result" role="alert">
                            <strong>Oops!</strong> Please fill the form correctly.
                          </div>`;
          setTimeout(() => {
            document.getElementById("result").hidden = true;
          }, 2000);
        } else if (userData.password != userData.password_confirmation) {
          document.getElementById(
            "resultDiv"
          ).innerHTML = `<div class="alert alert-danger" id="result" role="alert">
                            <strong>Oops!</strong> Password not matched.
                          </div>`;
          setTimeout(() => {
            document.getElementById("result").hidden = true;
          }, 2000);
        } else {
          let response = await axios
            .post("admin/update-password", userData)
            .catch((e) => {
              document.getElementById(
                "resultDiv"
              ).innerHTML = `<div class="alert alert-danger" id="result" role="alert">
                            <strong>Oops!</strong> ${e.response.data.errors?.old_password ?? e.response.data.errors?.old_password }.
                          </div>`;
    
              setTimeout(() => {
                document.getElementById("result").hidden = true;
              }, 3000);
            });
          if (response.data.status) {
            setShow1(true)
            document.getElementById(
              "resultDiv"
            ).innerHTML = `<div class="alert alert-success" id="result" role="alert">
                            <strong>Success!</strong> ${response.data.data.message}.
                          </div>`;
    
            setTimeout(() => {
              document.getElementById("result").hidden = true;
              navigate("/profile");
            }, 3000);
          }
        }
      };


    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => {
        console.log('saassaassa');
    }
    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'><Link onClick={() => navigate(-1)}><FontAwesomeIcon className='back-arrow' icon={faCircleArrowLeft} /></Link> Change Password</h2>
                    <div className="dash-card">
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                            <div className="col-md-12" id="resultDiv"></div>
                            <div className="col-md-3">
                                <div className="">
                                    <div className="media-body">
                                        <SiteInput
                                            labelText="Current 1Password"
                                            required
                                            type="password"
                                            id="text"
                                            className="site-input"
                                            placeholder="Enter Current Password"
                                            onChange={(event) => {
                                                setUserData({
                                                  ...userData,
                                                  old_password: event.target.value,
                                                });
                                              }}  
                                        />
                                        <SiteInput
                                            labelText="New Password"
                                            required
                                            type="password"
                                            id="text"
                                            className="site-input"
                                            placeholder="Enter New Password"
                                            onChange={(event) => {
                                                setUserData({
                                                  ...userData,
                                                  password: event.target.value,
                                                });
                                              }}  
                                        />
                                        <SiteInput
                                            labelText="Confirm Password*"
                                            required
                                            type="password"
                                            id="text"
                                            className="site-input"
                                            placeholder="Enter Confirm Password"
                                             onChange={(event) => {
                                                setUserData({
                                                  ...userData,
                                                  password_confirmation: event.target.value,
                                                });
                                              }}  
                                        />
                                        <WebButton onClick={handleShow1}
                                            text="Update1"
                                            type="button"
                                            className="site-btn w-100 my-3"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

            <Modals show={show1} modalicon={images.check} modalbtntext="OK" text={"Password has been updated Successfully  "} handleClose={handleClose1} close={() => { setShow1(false) }} />

        </div>
    )
}

export default ChangePassword
