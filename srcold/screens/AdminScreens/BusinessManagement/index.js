import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from '../../../Components/Layout/layout.js'
import MainTable from '../../../Components/MainTable/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import TableFilter from '../../../Components/TableFilter/index.js';
import { businessManag } from '../../../Components/Data/data.js'
import { Link } from 'react-router-dom';

function BusinessManagement() {

  const tableHead = [
    {
      key: 'id',
      title: 'ID',
    },
    {
      key: 'name',
      title: 'First Name',
    },
    {
      key: 'email',
      title: 'Email',
    },
    {
      key: 'type',
      title: 'Type',
    },
    {
      key: 'registered on',
      title: 'Registered on',
    },
    {
      key: 'status',
      title: 'Status',
    },
    {
      key: 'action',
      title: 'Action',
    },
  ]





  return (
    <div>
      {/* <Layout pageheading="User Management" linkBtn="Blocked Drivers" linkBtnLink='abc' newDriverbtn=" New Drivers" linkBtnnewdriver='abc'> */}
      <Layout>
        <div className='container-fluid'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2 className='inner-heading'>Business Management</h2>
            <Link className='site-btn' to={'/BusinessAdd'}>Add New Business Type</Link>
          </div>
          <div className="dash-card">
            <TableFilter />
            <MainTable header={tableHead}>
              <tbody>
                {businessManag.map(
                  (businessManag, index) => {
                    return (
                      <tr>
                        <td>0{index + 1}</td>
                        <td>{businessManag.fname}</td>
                        <td>{businessManag.email}</td>
                        <td>{businessManag.type}</td>
                        <td>{businessManag.registered}</td>
                        <td className={businessManag.status === 'Active' ? 'colour-green' : businessManag.status === 'Inactive' ? 'colour-red' : 'def-red'}>{businessManag.status}</td>
                        <td>
                        <Link class="view-btn" to={`/BusinessProfile/${businessManag.id}`}><FontAwesomeIcon icon={faEye} /></Link>
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
    </div>
  )
}

export default BusinessManagement
