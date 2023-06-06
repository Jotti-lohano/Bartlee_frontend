import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from 'react-bootstrap/Modal';
// import { images } from '../../../Assets'
// import { images } from '../../Assets';
import WebButton from '../Buttons/WebButton';
import SiteInput from "../../Components/Inputs/SiteInput";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './style.css'

const Modals = (props) => {

  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({});
  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <div>
      <Modal show={props?.show}  onHide={props?.handleClose1}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className='text-center'>
            <img src={props.modalicon} className='img-fluid pb-3' />
          </div>

          <h4 className='update-pop-txt'>{props.status}</h4>
          <h4 className='update-pop-txt'>{props.text}</h4>

          {props.showTextarea && (
            <div className="form-group">
              <textarea className="form-control" id="textarea" rows="5" placeholder='Write Description'></textarea>
            </div>
          )}

          {props.showTypeinput && (
            <div className="form-group">
               <h4 className='d-block ms-1 my-2 inner-label'>{props.label}</h4>
              <SiteInput
                // labelText="Business Type"
                type="text"
                id="text"
                className="site-input"
                placeholder="Type"
                name={props?.name} onChange={props?.onChange}
              />
            </div>
          )}

     
          {props.showInputs && (
            <div className='aa'>
              <SiteInput
                labelText="Current Password"
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
                labelText="Confirm Password"
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
              {props?.type === 'password' && (
                <button
                  type='button'
                  className='btn btn-outline-secondary for-eye'
                  onClick={handleTogglePassword}
                >
                  {showPassword ? (
                    <FontAwesomeIcon icon={faEye} />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  )}
                </button>
              )}
            </div>
          )}

          {props.modalDouble
            ?
            (<div className='d-flex align-items-center justify-content-center'>
              <WebButton onClick={props?.handleActionnew}
                className="site-btn d-block text-center mt-4 mx-1"
                text={props.modalbtntext}
                type="button"
              />
              <WebButton onClick={props?.handleClose}
                className="site-btn-gray d-block text-center mt-4 mx-1"
                text={props.modalbtntext2}
                type="button"
              />
            </div>)
            :
            (<WebButton onClick={props.handleActionSingle?props.handleActionSingle:props?.handleClose}
              className="site-btn d-block text-center mt-4 mx-auto"
              text={props.modalbtntext}
              type="button"
            />)
          }
          {/* {props.modalDouble ? (<div className='d-flex align-items-center justify-content-center'>
            <WebButton onClick={props?.handleAction}
              className="site-btn d-block text-center mt-4 mx-auto"
              text={props.modalbtntext}
              type="button"
            />
            <WebButton onClick={props?.handleClose}
              className="site-btn d-block text-center mt-4 mx-auto"
              text={props.modalbtntext2}
              type="button"
            />
          </div>):
            (<WebButton onClick={props?.handleClose}
              className="site-btn d-block text-center mt-4 mx-auto"
              text={props.modalbtntext}
              type="button"
            />)
          } */}

        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Modals
