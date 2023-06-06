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

function ChangePassword() {
    let navigate = useNavigate();

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true)


    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'><Link onClick={() => navigate(-1)}><FontAwesomeIcon className='back-arrow' icon={faCircleArrowLeft} /></Link> Change Password</h2>
                    <div className="dash-card">
                        <div className="row">
                            <div className="col-lg-12">
                            </div>
                            <div className="col-md-3">
                                <div className="">
                                    <div className="media-body">
                                        <SiteInput
                                            labelText="Current Password"
                                            required
                                            type="password"
                                            id="text"
                                            className="site-input"
                                            placeholder="Enter Current Password"
                                        />
                                        <SiteInput
                                            labelText="New Password"
                                            required
                                            type="password"
                                            id="text"
                                            className="site-input"
                                            placeholder="Enter New Password"
                                        />
                                        <SiteInput
                                            labelText="Confirm Password*"
                                            required
                                            type="password"
                                            id="text"
                                            className="site-input"
                                            placeholder="Enter Confirm Password"
                                        />
                                        <WebButton onClick={handleShow1}
                                            text="Update"
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
