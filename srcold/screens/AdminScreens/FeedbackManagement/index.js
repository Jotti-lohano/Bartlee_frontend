import React from 'react'
import { Layout } from '../../../Components/Layout/layout.js'
import MainTable from '../../../Components/MainTable/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import TableFilter from '../../../Components/TableFilter/index.js';
import { feedbacks } from '../../../Components/Data/data.js'
import { Link } from 'react-router-dom';

function Index() {

    const tableHead = [
        {
          key: 'id',
          title: 'ID',
        },
        {
          key: 'name',
          title: 'Name',
        },
        {
          key: 'email',
          title: 'Email',
        },
        {
          key: 'date posted',
          title: 'Date Posted',
        },
        {
          key: 'subject',
          title: 'Subject',
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
          <div className=''>
            <h2 className='inner-heading'>Feedbacks Management</h2>
          </div>
          <div className="dash-card">
            <TableFilter />
            <MainTable header={tableHead}>
              <tbody>
                {feedbacks.map(
                  (feedbacks, index) => {
                    return (
                      <tr>
                        <td>0{index + 1}</td>
                        <td>{feedbacks.name}</td>
                        <td>{feedbacks.email}</td>
                        <td>{feedbacks.date}</td>
                        <td>{feedbacks.subject}</td>
                        <td>
                        <Link class="view-btn" to={`/FeedbackDetails/${feedbacks.id}`}><FontAwesomeIcon icon={faEye} /></Link>
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

export default Index
