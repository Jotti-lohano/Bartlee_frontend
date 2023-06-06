import {React,useEffect,useState} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { images } from '../../../Assets/index';
import StatCard from '../../../Components/DashboardCards/statCard'
import { Layout } from '../../../Components/Layout/layout.js'
import { CChart } from '@coreui/react-chartjs';
import "./style.css"
import axios from 'axios';

function Dashboard() {

  const [business_user, setBusinessRecords] = useState({});

  const [artist_user, setArtistRecords] = useState({});
  
  useEffect(() => {

    document.title = 'Bartlee | Dashboard';
    fetchTotalData()

  }, []);

  const fetchTotalData = async () => {
    let response = await axios
      .get(`v1/user/dashboard-record`)
      .catch((e) => {
        console.log(e);
      });
    if (response.status) {
      console.log(response.data)
      setArtistRecords(response?.data?.total_artist_user);
      setBusinessRecords(response?.data?.total_business_user)
      // setNotificationState(response.data.data)
      
    }
  };

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
                      <StatCard items={statistics[0]} total={3 } cardClass='' />
                    </div>
                    <div className="my-3 col-xxl-3 col-xl-4 col-md-6">
                      <StatCard items={statistics[1]} total={1 }  cardClass='secondcard' />
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
