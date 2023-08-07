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
import axios  from 'axios';


function ArtistSkillAdd() {

    const tableHead = [
        {
            key: 'skill type',
            title: 'Skill Type',
        },
        {
            key: 'status',
            title: 'Status',
        },
    ]


    let navigate = useNavigate();

    const [show1, setShow1] = useState(false);
    const [formData, setFormData] = useState({});
    console.log('formData3',formData);
    const [data,setData] = useState([]);
    const [result,setResult] = useState({});

    const handleShow1 = () => setShow1(true)

        
    useEffect(() => {
        document.title = 'BARTLEE | Artist Skills';
        
        const fetchData = async () => {
          let response = await axios
            .get(`v1/user/get-skill-list`)
            .catch((e) => {
                console.log('e',e);
            });
            
          if (response.status) {
            setData(response.data.skillList);
        
          }
        };
        
        fetchData();    
        
        
      }, [result])

      const handleClose = () => setShow1(false);  

    const handleClose1 =  async (e) => {

        let response = await axios.post("v1/user/add-skill", formData).catch((e) => {
            console.log('ebuss',e);
        });

        if (response.status === 200) {
            setShow1(false);
            setResult(response.status);
          document.getElementById(
            "responseFromServer"
          ).innerHTML = `<div class="alert alert-success"role="alert"><strong>Success !</strong> Skill Add Sucessfully</div>`;
        }
    }

  return (
    <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'><Link onClick={() => navigate(-1)}><FontAwesomeIcon className='back-arrow' icon={faCircleArrowLeft} /></Link> Skill Type</h2>
                    <div className="dash-card">
                        <div className="row">
                            <div className="col-md-4 order-lg-1 order-md-1 order-2 business-type-table">
                                <MainTable header={tableHead}>
                                    <tbody>
                                        {data?.map(
                                            (item, index) => {
                                                return (
                                                    <tr>
                                                        <td>{item.skill}</td>
                                                        <td className={item.status === 'Active' ? 'colour-green' : item.status === 'Inactive' ? 'colour-red' : 'def-red'}>{item.status}</td>
                                                    </tr>
                                                )
                                            }
                                        )}
                                    </tbody>
                                </MainTable>
                                <WebButton onClick={handleShow1}
                                    text="Add New Skill Type"
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

            <Modals show={show1} showTypeinput="true" modalbtntext="Add"  text={"Skill Type"} label={'Skill Type'} onChange={(event) => {
                          setFormData({ ...formData, skill: event.target.value });
                        }} handleClose={handleClose} close={() => { setShow1(false) }} />
        </div>
  )
}

export default ArtistSkillAdd
