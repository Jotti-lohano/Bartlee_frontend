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
import axios from "axios";

function ArtistProfile() {
    let navigate = useNavigate();
    const { id } = useParams();

    const [show1, setShow1] = useState(false);
    const [profileStatus, setProfileStatus] = useState();
    const [response, setResponse] = useState();

    const handleClose1 = () => {
        setShow1(false);
    };
    const handleShow1 = () => setShow1(true);
    const handleShowAccepted1 = () => {
        setProfileStatus(1);
        setShow1(false);
        setShow3(true);
        setThisartistManagStatus("Active");
    };

    const [show2, setShow2] = useState(false);

    const [data,setData] = useState();

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleShowAccepted2 = () => {
        setProfileStatus(0);
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


    const [thisartistManag, setThisartistManag] = useState({});
    let thisStatus;
    const [thisartistManagStatus, setThisartistManagStatus] = useState();
  
    useEffect(() => {
        document.title = 'BARTLEE | Details';
        
        const fetchData = async () => {
          let response = await axios
            .get(`v1/user/get-artists-detail/12`)
            .catch((e) => {
            });
          if (response.status) {
            console.log('responseaa',response);
            setData(response.data.data);
           // setPostData(response.data.data.post)
          }
        };
        
        fetchData();    
        
        
      }, [response])

      
    useEffect(() => {
       
        const updatStatus = async () => {
            if (typeof profileStatus !== 'undefined') {
                console.log('id', profileStatus);
                let response = await axios
                    .get(`v1/user/business-status/${id}/${profileStatus}`)
                    .catch((e) => {
                        console.log('e1', e);
                    });
                if (response.status) {
                    setResponse(response.data.status);
    
                }
            }
        };
        updatStatus();  
            
        }, [profileStatus]);

 

    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'><Link onClick={() => navigate(-1)}><FontAwesomeIcon className='back-arrow' icon={faCircleArrowLeft} /></Link> Artist Profile Information</h2>
                    <div className="dash-card">
                        <div className="row">
                            <div className="col-md-6 order-lg-1 order-md-1 order-2">
                                <div className='pb-3'>
                                    <span>{<img src={images.ProfilePic} alt="" className="img-fluid" />}</span>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>First Name</label>
                                            <h6 className='normal-text'>{data?.first_name}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Last Name</label>
                                            <h6 className='normal-text'>{data?.last_name}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Profession</label>
                                            <h6 className='normal-text'>{data?.user_arist?.artist_profession?.Profession}</h6>
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
                                            <h6 className='normal-text'>{data?.gender}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Country</label>
                                            <h6 className='normal-text'>{data?.country}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>City</label>
                                            <h6 className='normal-text'>{data?.city}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Contact No.</label>
                                            <h6 className='normal-text'>{data?.phone_number}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='py-3'>
                                            <label className='inner-label'>Address</label>
                                            <h6 className='normal-text'>{data?.location}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='py-3'>
                                            <label className='inner-label'>Something that defines your business / Tagline</label>
                                            <h6 className='normal-text'>{data?.user_artist?.about_yourself}</h6>
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
                                                data?.status === "Active" ? handleShow2 : handleShow1
                                            }
                                                type="button"
                                                text={
                                                    data?.status === "Active"
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
                                    <span className=''>Profile Status: <span className={data?.status === 'Active' ? 'colour-green' : 'colour-red'}>{data?.status}</span></span>
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
