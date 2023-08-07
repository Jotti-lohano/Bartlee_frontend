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
import axios  from 'axios';
import { MyContext } from "../../../MyContext";

function BusinessProfile() {
   
   const { id } = useParams();
    
    let navigate = useNavigate();
   
    const [show1, setShow1] = useState(2);

    const handleClose1 = () => {
        setShow1(2);
    };
    const handleShowAccepted1 = () => {
        setShow1(2);
        setShow3(true);
        setThisbusinessManagStatus("Active");
        setProfileStatus(1);
    };

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow1(2);
    const handleShowAccepted2 = () => {
        setShow1(2);
        setShow4(true);
        setThisbusinessManagStatus("In-Active");
        setProfileStatus(0);
    };


    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);


    const [data,setData] = useState({});
    const [profileStatus, setProfileStatus] = useState();
    const [response, setResponse] = useState();
   // const [id,setID] = useState();

    //  const [context, setContext] = useContext(Context);
  //  const [postData,setPostData] = useState({});
  
  useEffect(() => {
    document.title = 'BARTLEE | Details';
    
    const fetchData = async () => {
      let response = await axios
        .get(`v1/user/get-business-detail/11`)
        .catch((e) => {
        });
      if (response.status) {
        setData(response.data.data);
       // setPostData(response.data.data.post)
      }
    };
    
    fetchData();    
    
    
  }, [response])
  const handleClick = async (e) => {
    e.preventDefault()
  }

    
    const [thisbusinessManag, setThisbusinessManag] = useState({});
    let thisStatus;
    const [thisbusinessManagStatus, setThisbusinessManagStatus] = useState();

    



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
                                            <h6 className='normal-text'>{data.first_name}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Last Name</label>
                                            <h6 className='normal-text'>{data.last_name}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div chandleClose1lassName='py-3'>
                                            <label className='inner-label'>Company Name</label>
                                            <h6 className='normal-text'>{data?.user_business_detail?.company_name}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Business Type</label>
                                            <h6 className='normal-text'>{data?.user_business_detail?.business_type}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='py-3'>
                                            <label className='inner-label'>Website</label>
                                            <h6 className='normal-text'>{"No Data"}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='py-3'>
                                            <label className='inner-label'>Something that defines your business / Tagline</label>
                                            <h6 className='normal-text'> {data?.user_business_detail?.about_company}</h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 order-lg-2 order-md-2 order-1">
                                <div className='d-flex align-items-center justify-content-end'>
                                    <span className=''>Profile Status:{data?.status}</span>
                                    <Dropdown>
                                        <Dropdown.Toggle className='web-slect' id="dropdown-basic">
                                            {data?.status == 'Active' ? 'Active' : 'In-active'}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                       
                                            <Dropdown.Item onClick={() => { data.status == 'Active' ?  setShow1(0) :  setShow1(1)
                                            }}>{data.status == 'Active' ? 'In-Active' : 'Active'}</Dropdown.Item>
                                         
                                            {/* <Dropdown.Item onClick={handleShow2}>In-active</Dropdown.Item> */}
                                            {/* <Dropdown.Item href="#/action-2"  onClick={handleShow2}>In-active</Dropdown.Item> */}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

            <Modals show={show1 == 1 } modalDouble='true' modalicon={images.modalicon1} handleActionnew={handleShowAccepted1} modalbtntext="Yes" modalbtntext2="No" text={"Are you sure you want to active this Business?"} handleClose={handleClose1} close={() => { setShow1(2) }} />
            <Modals show={show1 == 0 } modalDouble='true' modalicon={images.modalicon1} handleActionnew={handleShowAccepted2} modalbtntext="Yes" modalbtntext2="No" text={"Are you sure you want to in-active this Business?"} handleClose={handleClose2} close={() => { setShow1(2) }} />
            <Modals show={show3}  modalicon={images.check} modalbtntext="Ok"  text={"Abc Business Activated Successfully"} handleClose={handleClose3} close={() => { setShow1(2) }} />
            <Modals show={show4}  modalicon={images.check} modalbtntext="Ok"  text={"Abc Business Inactivated Successfully"} handleClose={handleClose4} close={() => { setShow1(2) }} />
        </div>
    )
}

export default BusinessProfile


  