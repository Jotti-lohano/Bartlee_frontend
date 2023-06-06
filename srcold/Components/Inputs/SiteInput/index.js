import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faLock } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const SiteInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className='my-3'>
        {props?.labelText && (
          <label className='d-block ms-1 my-2 inner-label'>
            {props?.labelText}
            {props?.required && <span className='text-danger'>*</span>}
          </label>
        )}
        <div className='input-group'>
          <input
            type={showPassword ? 'text' : props?.type}
            id={props?.id}
            contentEditable={props?.editable ?? 'true'}
            className={props?.className}
            placeholder={props?.placeholder}
          />
          {props?.type === 'password' && (
            <div className='input-group-append'>
            <span className='input-group-text'>
              <FontAwesomeIcon icon={faLock} />
            </span>
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
          </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SiteInput;