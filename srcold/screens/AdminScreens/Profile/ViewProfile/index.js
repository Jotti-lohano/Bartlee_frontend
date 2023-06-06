import React, { useState } from 'react'
import { Layout } from '../../../../Components/Layout/layout'
import { profiledata } from '../../../../Components/Data/data';
import { Link } from 'react-router-dom';
import Modals from '../../../../Components/Modals';
import { images } from '../../../../Assets';
import Lottie from "lottie-react";
import './style.css'





function ViewProfile() {
    // const ProfileDetails = {
    //     name: "Mark Carson",
    //     phoneNO: "+44 123 456678",
    //     email: "email@email.com"
    // }


    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true)

    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'> My Profile</h2>
                    <div className="dash-card">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='py-3'>
                                    <img src={profiledata.profilePicUser} alt="" />
                                </div>
                                <div className='py-3'>
                                    <h5 className='inner-label'>Full Name</h5>
                                    <h6 className='detail-text'>{profiledata.name}</h6>
                                </div>
                                <div className='py-3'>
                                    <h5 className='inner-label'>Contact Number:</h5>
                                    <h6 className='detail-text'>{profiledata.contactNum}</h6>
                                </div>
                                <div className='py-3'>
                                    <h5 className='inner-label'>Email Address</h5>
                                    <h6 className='detail-text'>{profiledata.email}</h6>
                                </div>

                                <div className='profiles-btn'>
                                    <Link className='site-btn' to={'../EditProfile'}>Edit Profile Information</Link>
                                    <Link className='theme-text-color chnge-ps' to={''} onClick={handleShow1}>Change Password</Link>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="for-loti">
                                    <Lottie animationData={images.loti2} loop={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

            <Modals show={show1} showInputs="true" modalbtntext="Update" text={"Change Password"} handleClose={handleClose1} close={() => { setShow1(false) }} />
        </div>
    )
}

export default ViewProfile
