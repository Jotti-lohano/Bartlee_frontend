import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../Assets/';
import { useLocation } from "react-router-dom";
import Modals from '../../Components/Modals';
import { useNavigate } from 'react-router-dom';

export const SideBar = (props) => {
  const location = useLocation();
  // console.log (location)

  const navigate = useNavigate()

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const logout = ()=>{
navigate('/')
  } 

  return (
    <div className={`sidebar ${props.sideClass}`} id="sidebar">
      <ul className="ps-0">
        <li className={`mt-3 sidebar-li ${location.pathname.includes('Das') && ("active")}`}>
          <Link className="sidebar-links" to="/Dashboard"><span className="dash-icons flex-shrink-0"><img src={images.dashboardIcon} alt="" className="img-fluid me-2" /></span><span className="dash-link">Dashboard</span> </Link>
        </li>
        <li className={`mt-3 sidebar-li ${location.pathname.includes('/Business') && ("active")}`}>
          <Link className="sidebar-links" to="/BusinessManagement"><span className="dash-icons flex-shrink-0"><img src={images.businessMang} alt="" className="img-fluid me-2" /></span><span className="dash-link">Business Management</span></Link>
        </li>
        <li className={`mt-3 sidebar-li ${location.pathname.includes('/Artist') && ("active")}`}>
          <Link className="sidebar-links" to="/ArtistManagement"><span className="dash-icons flex-shrink-0"><img src={images.artistManag} alt="" className="img-fluid me-2" /></span><span className="dash-link">Artist Management</span></Link>
        </li>
        <li className={`mt-3 sidebar-li ${location.pathname.includes('/PaymentLogs') && ("active")}`}>
          <Link className="sidebar-links" to="/PaymentLogs"><span className="dash-icons flex-shrink-0"><img src={images.paymentLogsIcon} alt="" className="img-fluid me-2" /></span><span className="dash-link">Payment Logs</span></Link>
        </li>
        <li className={`mt-3 sidebar-li ${location.pathname.includes('/Feedback') && ("active")}`}>
          <Link className="sidebar-links" to="/FeedbackManagement"><span className="dash-icons flex-shrink-0"><img src={images.feedbacksManagIcon} alt="" className="img-fluid me-2" /></span><span className="dash-link">Feedback Management</span></Link>
        </li>
        <li className={`mt-3 sidebar-li ${location.pathname.includes('/PushNotifications') && ("active")}`}>
          <Link className="sidebar-links" to="/PushNotifications"><span className="dash-icons flex-shrink-0"><img src={images.pushNoti} alt="" className="img-fluid me-2" /></span><span className="dash-link">Push Notifications</span></Link>
        </li>
        <li className={`mt-3 sidebar-li ${location.pathname.includes('/logout') && ("active")}`}>
          <Link onClick={handleShow1} className="sidebar-links"><span className="dash-icons flex-shrink-0"><img src={images.logoutIcon} alt="" className="img-fluid me-2" /></span><span className="dash-link">Logout</span></Link>
        </li>
      </ul>
      <Modals show={show1} modalDouble='true'  modalicon={images.logoutmodal} handleActionnew={logout} modalbtntext="Yes" modalbtntext2="No"  text={"Are You Sure You Want To Logout ?"} handleClose={handleClose1} close={() => { setShow1(false) }} />
    </div>
  );
}