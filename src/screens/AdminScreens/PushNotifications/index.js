import React from 'react'
import { useState } from 'react';
import { Layout } from '../../../Components/Layout/layout.js'
import MainTable from '../../../Components/MainTable/index.js';
import TableFilter from '../../../Components/TableFilter/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { pushNotifications } from '../../../Components/Data/data.js'
import { Link } from 'react-router-dom';
import { images } from '../../../Assets';
import Modals from '../../../Components/Modals';
import UseTableControls from '../../../Config/UseTableControls';

function Index() {

    const tableHead = [
        {
            key: 'id',
            title: 'ID',
        },
        {
            key: 'title',
            title: 'Title',
        },
        {
            key: 'date sent',
            title: 'Date Sent',
        },
        {
            key: 'action',
            title: 'Action',
        },
    ]


    const [show1, setShow1] = useState(false);

    const handleClose1 = () => {
        setShow1(false);
    };
    const handleShow1 = () => setShow1(true);
    
    const [show3, setShow3] = useState(false);
    
    const handleClose3 = () => setShow3(false);
    const handleShowAccepted1 = () => {
        setShow1(false);
        setShow3(true);
    };

    const {
        filterSort,
        filterSortValue,
        setFilterSortValue,
        paginateFilter,
        setPaginateFilter,
        filterSortValues,
        filterSearch,
        filterSearchValue,
        setFilterSearchValue,
        dateFilter,
        filterFrom,
        setFilterFrom,
        filterTo,
        setFilterTo
      } = UseTableControls();
      

    const searchFilter = () => {    
        let search = `&search=${filterSearchValue}`;
        console.log('search',search);
        let queryParams = `&from=${filterFrom}&to=${filterTo}&sort=${filterSortValue}`;
        
        // listData(undefined, search+queryParams);
    };
    


    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2 className='inner-heading'>Push Notifications</h2>
                        <Link onClick={handleShow1} className='site-btn' to={''}>Push New Notification</Link>
                    </div>
                    <div className="dash-card">
                        <TableFilter 
                        searchFilter={searchFilter}/>
                        <MainTable header={tableHead}>
                            <tbody>
                                {pushNotifications.map(
                                    (pushNotifications, index) => {
                                        return (
                                            <tr>
                                                <td>0{index + 1}</td>
                                                <td>{pushNotifications.title}</td>
                                                <td>{pushNotifications.datesent}</td>
                                                <td>
                                                    <Link class="view-btn" to={''}><FontAwesomeIcon icon={faEye} /></Link>
                                                </td>
                                            </tr>
                                        )
                                    }
                                )}
                            </tbody>
                        </MainTable>
                    </div>
                </div>
            </Layout>

            
            <Modals show={show1} showTextarea="true"  handleActionSingle={handleShowAccepted1} handleClose={handleClose1} modalbtntext="Push" text={"Push New Notifications"} close={() => { setShow1(false) }} />
            <Modals show={show3}  modalicon={images.check} modalbtntext="Continue"  text={"Notification Pushed"} handleClose={handleClose3} close={() => { setShow1(false) }} />
        </div>
    )
}

export default Index
