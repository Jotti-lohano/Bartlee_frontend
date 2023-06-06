import React from 'react'
import { Layout } from '../../../Components/Layout/layout.js'
import MainTable from '../../../Components/MainTable/index.js';
import TableFilter from '../../../Components/TableFilter/index.js';
import { paymentLogs } from '../../../Components/Data/data.js'

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
      key: 'total Amount',
      title: 'Total Amount',
    },
    {
      key: 'received On',
      title: 'Received On',
    },
  ]


  return (
    <div>
      <Layout>
        <div className='container-fluid'>
          <div className=''>
            <h2 className='inner-heading'>Payment Logs</h2>
          </div>
          <div className="dash-card">
            <TableFilter />
            <MainTable header={tableHead}>
              <tbody>
                {paymentLogs.map(
                  (paymentLogs, index) => {
                    return (
                      <tr>
                        <td>0{index + 1}</td>
                        <td>{paymentLogs.name}</td>
                        <td>{paymentLogs.totalAmount}</td>
                        <td>{paymentLogs.recievedOn}</td>
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
