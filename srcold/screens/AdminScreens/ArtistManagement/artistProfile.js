import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { Layout } from '../../../Components/Layout/layout.js'
import { artistManag } from '../../../Components/Data/data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import WebButton from '../../../Components/Buttons/WebButton/index.js';
// import Dropdown from 'react-bootstrap/Dropdown';
import { images } from '../../../Assets';
import Modals from '../../../Components/Modals';

function ArtistProfile() {
    let navigate = useNavigate();


    const [show1, setShow1] = useState(false);

    const handleClose1 = () => {
        setShow1(false);
    };
    const handleShow1 = () => setShow1(true);
    const handleShowAccepted1 = () => {
        setShow1(false);
        setShow3(true);
        setThisartistManagStatus("Active");
    };

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleShowAccepted2 = () => {
        setShow2(false);
        setShow4(true);
        setThisartistManagStatus("InActive");
    };


    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);


    const { id } = useParams();
    const [thisartistManag, setThisartistManag] = useState({});
    let thisStatus;
    const [thisartistManagStatus, setThisartistManagStatus] = useState();
    useEffect(() => {
        artistManag.find(artistManag => {
            if (artistManag.id == id) {
                setThisartistManag(artistManag);
                thisStatus = artistManag.status;
            }
        })
        setThisartistManagStatus(thisStatus);
    }, [])

    useEffect(() => {
        let artist = artistManag.find(artistManag => artistManag.id == id);
        setThisartistManag(artist);
        setThisartistManagStatus(artist.status);
    }, [id]);

    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'><Link onClick={() => navigate(-1)}><FontAwesomeIcon className='back-arrow' icon={faCircleArrowLeft} /></Link> Artist Profile Information</h2>
                    <div className="dash-card">
                        <div className="row">
                            <div className="col-md-6 order-lg-1 order-md-1 order-2">
                                <div className='pb-3'>
                                    <span>{thisartistManag.pic}</span>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>First Name</label>
                                            <h6 className='normal-text'>{thisartistManag.fname}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Last Name</label>
                                            <h6 className='normal-text'>{thisartistManag.lname}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Profession</label>
                                            <h6 className='normal-text'>{thisartistManag.skill}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Years Of Experience</label>
                                            <h6 className='normal-text'>{thisartistManag.experience}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Gender</label>
                                            <h6 className='normal-text'>{thisartistManag.gender}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Country</label>
                                            <h6 className='normal-text'>{thisartistManag.country}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>City</label>
                                            <h6 className='normal-text'>{thisartistManag.city}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Contact No.</label>
                                            <h6 className='normal-text'>{thisartistManag.contact}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='py-3'>
                                            <label className='inner-label'>Address</label>
                                            <h6 className='normal-text'>{thisartistManag.address}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='py-3'>
                                            <label className='inner-label'>Something that defines your business / Tagline</label>
                                            <h6 className='normal-text'>{thisartistManag.something}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='py-3 d-flex gap-1 flex-wrap'>
                                            {thisartistManag.imgVideo ? thisartistManag.imgVideo.map((e, index) => (
                                                <div key={index} className="d-flex">
                                                    <img src={e} alt="" />
                                                </div>
                                            )) : ''}
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12">
                                        <div className='py-3'>
                                            <span>{thisartistManag.imgVideo}</span>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className='py-3'>
                                            <WebButton onClick={
                                                thisartistManagStatus === "Active" ? handleShow2 : handleShow1
                                            }
                                                type="button"
                                                text={
                                                    thisartistManagStatus === "Active"
                                                        ? "INACTIVE USER"
                                                        : "ACTIVE USER"
                                                }
                                                className="site-btn"
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 order-lg-2 order-md-2 order-1">
                                <div className='d-flex align-items-center justify-content-end'>
                                    <span className=''>Profile Status: <span className={thisartistManagStatus === 'Active' ? 'colour-green' : 'colour-red'}>{thisartistManagStatus}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

            <Modals show={show1} modalDouble='true' modalicon={images.modalicon1} handleActionnew={handleShowAccepted1} modalbtntext="Yes" modalbtntext2="No" text={"Are You Sure You Want To Activate This Artist?"} handleClose={handleClose1} close={() => { setShow1(false) }} />
            <Modals show={show2} modalDouble='true' modalicon={images.modalicon1} handleActionnew={handleShowAccepted2} modalbtntext="Yes" modalbtntext2="No" text={"Are You Sure You Want To Inactivate This Artist?"} handleClose={handleClose2} close={() => { setShow2(false) }} />
            <Modals show={show3} modalicon={images.check} modalbtntext="Okay" text={"Abc Artist Activated Successfully"} handleClose={handleClose3} close={() => { setShow1(false) }} />
            <Modals show={show4} modalicon={images.check} modalbtntext="Okay" text={"Abc Artist Inactivated Successfully"} handleClose={handleClose4} close={() => { setShow1(false) }} />
        </div>
    )
}

export default ArtistProfile
