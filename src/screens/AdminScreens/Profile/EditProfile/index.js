import React, { useState,useEffect } from 'react'
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
import axios  from 'axios';




function EditProfile() {

    
    const [data,setData] = useState({});
    const [userData, setUserData] = useState({});
  

    useEffect(() => {
        document.title = 'BARTLEE | Details';
        
        const fetchData = async () => {
          let response = await axios
            .get(`v1/user/get-profile`)
            .catch((e) => {
                console.log('e',e);
            });
            console.log('resp2222',response.data.response.data);
          if (response.status) {
            setData(response.data.response.data);
           // setPostData(response.data.data.post)
          }
        };
        
        fetchData();    
        
        
      }, [])
    let navigate = useNavigate();

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
   // const handleShow1 = () => setShow1(true)



    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    function handleFileInput(event) {
        setUserNewData({ ...userNewData, avatar_url:event.target.files[0]});
        // setSelectedFile(event.target.files[0]);
        setPreviewImage(URL.createObjectURL(event.target.files[0]));
    }
    const handleShow1 = async (e) => {
        e.preventDefault();
        
        console.log('new data',userNewData);

        let response = await axios
         .post("v1/user/edit-profile", userNewData, {
          headers: {
             "Content-Type": `multipart/form-data`,
           },
         })
        .catch((e) => {
            console.log('eee',e);
          document.getElementById(
            "resultDiv"
          ).innerHTML = `<div class="alert alert-danger" id="result" role="alert">
                        <strong>Oops!</strong> ${e.response.data.message}.
                      </div>`;

          setTimeout(() => {
            document.getElementById("result").hidden = true;
          }, 2000);
        });
       
        
        if (response.status) {
            console.log('responseedit',response.data.response);
            localStorage.setItem("user", JSON.stringify(response.data.response.data));
            setShow1(true);
          
        }
    }

    const [userNewData, setUserNewData] = useState({});
    console.log('new datas1',userNewData);
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
                                <form  className='py-4'>
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
                                                    <img src={userNewData.avatar_url || data.avatar_url } alt="Default Avatar" style={{ width: '150px', height: '150px' }} />
                                                    <label for='mechanic-pic' className='uplaod-label'>
                                                        <img src={images.camera} alt=""  onChange={(event) => setUserNewData({ ...userNewData, avatar_url: URL.createObjectURL(event.target.files[0]) })} />
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
                                                    value={userNewData.first_name || data.first_name}
                                                    onChange={(event) => setUserNewData({ ...userNewData, first_name: event.target.value })}
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
                                                    value={userNewData.last_name || data.last_name}
                                                    inputClass="mainInput"
                                                    onChange={(event) => setUserNewData({ ...userNewData, last_name: event.target.value })}
                                                />
                                            </div>
                                            <div className="col-lg-12">
                                                <div className='my-4'>
                                                    <h5 className='inner-label'>Email Address</h5>
                                                    <h6 className='detail-text'>{data.email}</h6>
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
                                        <div className="col-12" id="resultDiv"></div>
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