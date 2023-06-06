import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../../Components/Layout/layout.js'
import { businessManag } from '../../../Components/Data/data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { images } from '../../../Assets';
import Modals from '../../../Components/Modals';

function BusinessProfile() {
    let navigate = useNavigate();

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => {
        setShow1(false);
    };
    const handleShow1 = () => setShow1(true);
    const handleShowAccepted1 = () => {
        setShow1(false);
        setShow3(true);
        setThisbusinessManagStatus("Active");
    };

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const handleShowAccepted2 = () => {
        setShow2(false);
        setShow4(true);
        setThisbusinessManagStatus("InActive");
    };


    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);


    const { id } = useParams();
    const [thisbusinessManag, setThisbusinessManag] = useState({});
    let thisStatus;
    const [thisbusinessManagStatus, setThisbusinessManagStatus] = useState();
    useEffect(() => {
        businessManag.find(businessManag => {
            if (businessManag.id == id) {
                setThisbusinessManag(businessManag);
                thisStatus = businessManag.status;
            }
        })
        setThisbusinessManagStatus(thisStatus);
    }, [])

    // const { id } = useParams();
    // const [thisbusinessManag, setThisbusinessManag] = useState({});
    // useEffect(() => {
    //     businessManag.find(businessManag => {
    //         if (businessManag.id == id) {
    //             setThisbusinessManag(businessManag);
    //         }
    //     })
    // }, [])
    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'><Link onClick={() => navigate(-1)}><FontAwesomeIcon className='back-arrow' icon={faCircleArrowLeft} /></Link> Business Profile Information</h2>
                    <div className="dash-card">
                        <div className="row">
                            <div className="col-md-6 order-lg-1 order-md-1 order-2">
                                <div className='pb-3'>
                                    <span>{thisbusinessManag.pic}</span>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>First Name</label>
                                            <h6 className='normal-text'>{thisbusinessManag.fname}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Last Name</label>
                                            <h6 className='normal-text'>{thisbusinessManag.lname}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Company Name</label>
                                            <h6 className='normal-text'>{thisbusinessManag.companyName}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Business Type</label>
                                            <h6 className='normal-text'>{thisbusinessManag.type}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='py-3'>
                                            <label className='inner-label'>Website</label>
                                            <h6 className='normal-text'>{thisbusinessManag.website}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='py-3'>
                                            <label className='inner-label'>Something that defines your business / Tagline</label>
                                            <h6 className='normal-text'>{thisbusinessManag.tagline}</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 order-lg-2 order-md-2 order-1">
                                <div className='d-flex align-items-center justify-content-end'>
                                    <span className=''>Profile Status:</span>
                                    <Dropdown>
                                        <Dropdown.Toggle className='web-slect' id="dropdown-basic">
                                            {thisbusinessManagStatus}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={handleShow1}>Active</Dropdown.Item>
                                            <Dropdown.Item onClick={handleShow2}>In-active</Dropdown.Item>
                                            {/* <Dropdown.Item href="#/action-2"  onClick={handleShow2}>In-active</Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                {/* <div className='d-flex align-items-center justify-content-end'>
                                    <span className=''>Profile Status:</span>
                                    {thisbusinessManag.status === 'Active' ?
                                        (<Form.Select aria-label="Default select example" className={`web-slect ${thisbusinessManag.status === "Active" ? "green-option" : thisbusinessManag.status === 'Inactive' ? 'red-option' : ''}`}>
                                            <option selected value="1">Active</option>
                                            <option value="2">Inactive</option>
                                        </Form.Select>) :
                                        (<Form.Select aria-label="Default select example" className={`web-slect ${thisbusinessManag.status === "Active" ? "green-option" : thisbusinessManag.status === 'Inactive' ? 'red-option' : ''}`}>
                                            <option value="1">Active</option>
                                            <option selected value="2">Inactive</option>
                                        </Form.Select>)
                                    }
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

            <Modals show={show1} modalDouble='true' modalicon={images.modalicon1} handleActionnew={handleShowAccepted1} modalbtntext="Yes" modalbtntext2="No" text={"Are you sure you want to active this Business?"} handleClose={handleClose1} close={() => { setShow1(false) }} />
            <Modals show={show2} modalDouble='true' modalicon={images.modalicon1} handleActionnew={handleShowAccepted2} modalbtntext="Yes" modalbtntext2="No" text={"Are you sure you want to in-active this Business?"} handleClose={handleClose2} close={() => { setShow2(false) }} />
            <Modals show={show3}  modalicon={images.check} modalbtntext="Okay"  text={"Abc Business Activated Successfully"} handleClose={handleClose3} close={() => { setShow1(false) }} />
            <Modals show={show4}  modalicon={images.check} modalbtntext="Okay"  text={"Abc Business Inactivated Successfully"} handleClose={handleClose4} close={() => { setShow1(false) }} />
        </div>
    )
}

export default BusinessProfile
