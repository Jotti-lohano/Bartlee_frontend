import React, { useState,useEffect } from 'react'
import { Layout } from '../../../Components/Layout/layout.js'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import MainTable from '../../../Components/MainTable/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { businessType } from '../../../Components/Data/data.js';
import WebButton from '../../../Components/Buttons/WebButton';
import Modals from '../../../Components/Modals';
import './style.css';
import axios from 'axios';

function Addbusiness() {

    const tableHead = [
        {
            key: 'business type',
            title: 'Business Type',
        },
        {
            key: 'status',
            title: 'Status',
        },
    ]
    const handleClose = () => setShow1(false);

    let navigate = useNavigate();
    const [formData, setFormData] = useState({})
 
    const [show1, setShow1] = useState(false);
      const [data,setData] = useState([]);
      const [result,setResult] = useState({});

    
    useEffect(() => {
        document.title = 'BARTLEE | Business Types';
        
        const fetchData = async () => {
          let response = await axios
            .get(`v1/user/get-business-list`)
            .catch((e) => {
                console.log('e',e);
            });
            
          if (response.status) {
           setData(response.data.businessList);
        
          }
        };
        
        fetchData();    
        
        
      }, [result])

    const handleClose1 =  async (e) => {

        let response = await axios.post("v1/user/add-business", formData).catch((e) => {
     
        });

        if (response.status === 200) {
            setShow1(false);
            setResult(response.status)
          document.getElementById(
            "responseFromServer"
          ).innerHTML = `<div class="alert alert-success"role="alert"><strong>Success !</strong> Business Add Sucessfully</div>`;
        }
    }


    

    
    const handleShow1 = () => setShow1(true)
    const handleClick = async (e) => {
    
        e.preventDefault()
        console.log('formData',formData);
    }
    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'><Link onClick={() => navigate(-1)}><FontAwesomeIcon className='back-arrow' icon={faCircleArrowLeft} /></Link> Business Type</h2>
                    <div className="dash-card">
                        <div className="row">
                            <div className="col-md-4 order-lg-1 order-md-1 order-2 business-type-table">
                                <MainTable header={tableHead}>
                                    <tbody>
                                      
                                        {data?.map(
                                            (item, index) => {
                                                return (
                                                    <tr>
                                                        <td>{item.business_type}</td>
                                                        <td className={item.status === 'Active' ? 'colour-green' : item.status === 'Inactive' ? 'colour-red' : 'def-red'}>{item.status}</td>
                                                    </tr>
                                                )
                                            }
                                        )}
                                    </tbody>
                                </MainTable>
                                <WebButton onClick={handleShow1}
                                    text="Add New Business Type"
                                    type="button"
                                    className="site-btn ms-2"
                                />
                            </div>
                      
                            <div className="col-md-6 order-lg-2 order-md-2 order-1">
                            <div id="responseFromServer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

            <Modals show={show1} showTypeinput="true" modalbtntext="Add" label={'Business Type'}  onClick={handleClick}  onChange={(event) => {
                          setFormData({ ...formData, type: event.target.value });
                        }} text={"Business Type"}   handleClose={handleClose} close={() => { setShow1(false) }} />
        </div>
    )
}

export default Addbusiness
