import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { images } from '../../../Assets/index';
import StatCard from '../../../Components/DashboardCards/statCard'
import { Layout } from '../../../Components/Layout/layout.js'
import { CChart } from '@coreui/react-chartjs';
import "./style.css"

function Dashboard() {
  const statistics = [
    {
      id: 1,
      imgSrc: images.statIcon1,
      stats: "143",
      statText: "Total Business",
    },
    {
      id: 2,
      imgSrc: images.statIcon2,
      stats: "20",
      statText: "Total Artist",
    },

  ];
  return (
    <div>
      <Layout>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h3 className='inner-heading'>Dashboard</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-12">
                <div className="row">
                    <div className="my-3 col-xxl-3 col-xl-4 col-md-6">
                      <StatCard items={statistics[0]} cardClass='' />
                    </div>
                    <div className="my-3 col-xxl-3 col-xl-4 col-md-6">
                      <StatCard items={statistics[1]} cardClass='secondcard' />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Dashboard;
