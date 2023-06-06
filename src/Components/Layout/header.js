import React, { useState,useEffect } from 'react';
import { images } from '../../Assets';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faEllipsisV, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Modals from '../../Components/Modals';
import { useNavigate } from 'react-router-dom';
import axios  from 'axios';
const Userdata = JSON.parse(localStorage.getItem("user"));






export const allNotifications = [

   
    
    {
        id: 1,
        notiTitle: "Lorem Ipsum is simply dummy text",
        notiText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        notiTime: "30 minutes ago",
        read: true,
    },
    {
        id: 2,
        notiTitle: "Lorem Ipsum is simply dummy text",
        notiText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        notiTime: "30 minutes ago",
        read: false,
    },
    {
        id: 3,
        notiTitle: "Lorem Ipsum is simply dummy text",
        notiText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        read: false,
        notiTime: "30 minutes ago"
    },
    {
        id: 4,
        notiTitle: "Lorem Ipsum is simply dummy text",
        notiText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        read: false,
        notiTime: "30 minutes ago"
    },
    {
        id: 5,
        notiTitle: "Lorem Ipsum is simply dummy text",
        notiText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        read: false,
        notiTime: "30 minutes ago"
    },
    {
        id: 6,
        notiTitle: "Lorem Ipsum is simply dummy text",
        notiText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        read: false,
        notiTime: "30 minutes ago"
    },
];

export const DashboardHeader = (props) => {

    const fetchNotifications = async () => {
        let response =  axios
          .get(`v1/user/getNotifications`).then(response => {
            setNotificationState(response.data.data);
          }).catch(e => {
            console.log(e);
          });
        // //   .catch((e) => {
        // //     console.log(e);
        // //   });
        // if (response) {
        //  console.log('niotifuca',response.data.data);
         
          
        // }
      };
      
      const getNotificationCount = async () => {
        let response = await axios
          .get(`v1/user/count`)
          .catch((e) => {
            console.log(e);
          });
        if (response.status) {
          console.log("count",response.data.notification_count);
          setNotificationCount(response.data.notification_count);
        }
      };
      
      const [notificationState, setNotificationState] = useState([]);
      const [notificationCount, setNotificationCount] = useState([]);
      const [showModal, setShowModal] = useState(false);

      useEffect(() => {
        // setNotificationState(notifications)
        console.log('1222222222');
        fetchNotifications()
        getNotificationCount()
    
      }, [])

    const navigate = useNavigate()

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const logout = () => {
        localStorage.clear();
        navigate('/')
     
    }

    return (
        <Navbar className='bg-me1' expand="md">
            <Container fluid>
                <Navbar.Brand onClick={() => navigate('/Dashboard')} className='order-2 order-lg-1'>
                    <Link>
                        <img src={images.logo} alt="" className="img-fluid site-logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='order-4 order-lg-2'>
                    <FontAwesomeIcon className='bell-icon' icon={faEllipsisV} />
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav" className='order-3 order-md-3 order-lg-3'>
              
                    <Nav className="ms-auto">
                        <Dropdown className='noti-dropdown me-3'>
                        <span className="badge">{notificationCount}</span>
                            <Dropdown.Toggle className='transparent-btn' id="dropdown-basic-2">
                        
                                <FontAwesomeIcon className='bell-icon' icon={faBell} />
                              
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <p className="mb-0 px-3 blue-text medium">Notifications</p>
                                <div className="notifications-wrapper">
                                    {notificationState.map(e => (
                                        <>
                                            <hr className="grey-line mb-0 mt-2" />
                                            <Link className='px-3 mt-3' key={e.id}>
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0">
                                                        <img src={images.notiBell} alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="flex-grow-1 ms-2">
                                                        <p className="p-sm blue-text mb-0">{e.title}</p>
                                                        <p className="p-xs l-grey-text mb-0">{e.notiText}</p>
                                                        <p className="p-xs l-grey-text mb-0">{e.created_at}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </>
                                    ))}
                                </div>
                                <div className="text-end">
                                    <Link className='blue-text p-sm mx-3' to={"/Notifications"}>View All</Link>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='user-dropdown'>
                            <Dropdown.Toggle className='transparent-btn' id="dropdown-basic">
                                <img src={Userdata?.avatar_url} alt="" className="img-fluid" /> <span>Admin</span> 
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Link to="/AdminScreens/ViewProfile"><FontAwesomeIcon className='me-2 yellow-text' icon={faUser} /> Profile</Link>
                                <hr className='my-0 grey-line' />
                                <Link onClick={handleShow1}><FontAwesomeIcon className='me-1 yellow-text' icon={faSignOut} /> Logout</Link>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Navbar.Collapse>
                <button className='transparent-btn ms-md-3 order-lg-4 order-md-4 order-1'>
                    <FontAwesomeIcon className='bell-icon' onClick={props.sidebarToggle} icon={faBars} />
                </button>
            </Container>
            <Modals show={show1} modalDouble='true' modalicon={images.logoutmodal} handleActionnew={logout} modalbtntext="Yes" modalbtntext2="No" text={"Are You Sure You Want To Logout ?"} handleClose={handleClose1} close={() => { setShow1(false) }} />
        </Navbar>


    )
}
