import React from 'react'
import { Layout } from '../../../Components/Layout/layout.js'
import MainTable from '../../../Components/MainTable/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import TableFilter from '../../../Components/TableFilter/index.js';
import { artistManag } from '../../../Components/Data/data.js'
import { Link } from 'react-router-dom';

function ArtistManagement() {

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
          key: 'skill',
          title: 'Skill',
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
     <Layout>
        <div className='container-fluid'>
          <div className='d-flex justify-content-between align-items-center'>
            <h2 className='inner-heading'>Artist Management</h2>
            <Link className='site-btn' to={'/ArtistSkillAdd'}>Add Skill</Link>
          </div>
          <div className="dash-card">
            <TableFilter />
            <MainTable header={tableHead}>
              <tbody>
                {artistManag.map(
                  (artistManag, index) => {
                    return (
                      <tr>
                        <td>0{index + 1}</td>
                        <td>{artistManag.fname}</td>
                        <td>{artistManag.email}</td>
                        <td>{artistManag.skill}</td>
                        <td>{artistManag.registered}</td>
                        <td className={artistManag.status === 'Active' ? 'colour-green' : artistManag.status === 'Inactive' ? 'colour-red' : 'def-red'}>{artistManag.status}</td>
                        <td>
                        <Link class="view-btn" to={`/ArtistProfile/${artistManag.id}`}><FontAwesomeIcon icon={faEye} /></Link>
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

export default ArtistManagement
