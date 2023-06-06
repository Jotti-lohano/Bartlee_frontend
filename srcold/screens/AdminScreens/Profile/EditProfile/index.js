import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { images } from '../../../../Assets';
import { Layout } from '../../../../Components/Layout/layout.js';
import { profiledata } from '../../../../Components/Data/data';
import WebButton from '../../../../Components/Buttons/WebButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import SiteInput from "../../../../Components/Inputs/SiteInput";
import { Link } from 'react-router-dom';
import Modals from '../../../../Components/Modals';
import { useNavigate } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'




function EditProfile() {
    let navigate = useNavigate();

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true)



    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    function handleFileInput(event) {
        setSelectedFile(event.target.files[0]);
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // handle file upload here
    }


    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('profilePicture', selectedFile);

        fetch('/api/uploadProfilePicture', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                // handle successful upload
            })
            .catch(error => {
                // handle upload error
            });
    }

    const [value, setValue] = useState()

    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'><Link onClick={() => navigate(-1)}><FontAwesomeIcon className='back-arrow' icon={faCircleArrowLeft} /></Link> Edit Profile</h2>
                    <div className="dash-card">
                        <div className="row">
                            <div className="col-lg-12">
                                <form onSubmit={handleSubmit} className='py-4'>
                                    {previewImage ? (
                                        <>
                                            <div className='for-relative'>
                                                <img src={previewImage} alt="Preview" className='preview-pic' />
                                                <label for='mechanic-pic' className='uplaod-label2'>

                                                </label>
                                            </div>
                                        </>
                                    )
                                        :
                                        (
                                            <>
                                                <div className='for-relative'>
                                                    <img src={images.ProfilePic} alt="Default Avatar" style={{ width: '150px', height: '150px' }} />
                                                    <label for='mechanic-pic' className='uplaod-label'>
                                                        <img src={images.camera} alt="" />
                                                    </label>
                                                </div>
                                            </>
                                        )}
                                    <input className='mechanic-pic-upload' type="file" id='mechanic-pic' onChange={handleFileInput} />
                                </form>
                            </div>

                            <div className="col-md-6">
                                <div className="">
                                    <div className="media-body">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <SiteInput
                                                    labelText="First Name"
                                                    required
                                                    type="text"
                                                    id="text"
                                                    className="site-input"
                                                    placeholder="Marson"
                                                />
                                            </div>
                                            <div className="col-lg-6">
                                                <SiteInput
                                                    labelText="Last Name"
                                                    required
                                                    type="text"
                                                    id="text"
                                                    className="site-input"
                                                    placeholder="Albert"
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className='my-4'>
                                                    <h5 className='inner-label'>Email Address</h5>
                                                    <h6 className='detail-text'>{profiledata.email}</h6>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <PhoneInput
                                                    defaultCountry="RU"
                                                    placeholder="Enter Phone Number"
                                                    value={value}
                                                    onChange={setValue} />
                                            </div>

                                            <div className="col-lg-12 mt-5">
                                                <WebButton onClick={handleShow1}
                                                    text="Save Changes"
                                                    type="button"
                                                    className="site-btn"
                                                />
                                                <WebButton
                                                    text="Cancel"
                                                    type="button"
                                                    className="site-btn-gray ms-2"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

            <Modals show={show1} modalicon={images.check} modalbtntext="Continue" text={"Your Profile Has Been Updated Successfully"} handleClose={handleClose1} close={() => { setShow1(false) }} />
        </div>
    )
}

export default EditProfile