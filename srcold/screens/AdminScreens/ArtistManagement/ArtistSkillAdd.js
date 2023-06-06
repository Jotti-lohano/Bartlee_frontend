import React, { useState } from 'react'
import { Layout } from '../../../Components/Layout/layout.js'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import MainTable from '../../../Components/MainTable/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { businessType } from '../../../Components/Data/data.js';
import WebButton from '../../../Components/Buttons/WebButton';
import Modals from '../../../Components/Modals';


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

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true)

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
                                        {businessType.map(
                                            (businessType, index) => {
                                                return (
                                                    <tr>
                                                        <td>{businessType.type}</td>
                                                        <td className={businessType.status === 'Active' ? 'colour-green' : businessType.status === 'Inactive' ? 'colour-red' : 'def-red'}>{businessType.status}</td>
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
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>

            <Modals show={show1} showTypeinput="true" modalbtntext="Add" text={"Skill Type"} handleClose={handleClose1} close={() => { setShow1(false) }} />
        </div>
  )
}

export default ArtistSkillAdd
