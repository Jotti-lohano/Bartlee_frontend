import {React, useState, useEffect} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from '../../../Components/Layout/layout.js'
import MainTable from '../../../Components/MainTable/index.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import TableFilter from '../../../Components/TableFilter/index.js';
import { Link } from 'react-router-dom';
import UseTableControls from '../../../Config/UseTableControls';
import axios from "axios";
function BusinessManagement() {

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

  const [data, setData] = useState([]);


  useEffect(() => {
    document.title = 'BARTLEE| FeedBack Management';
  
    listData();
  }, []);

  const listData = async (page = 1, filter = null) => {

    console.log('filer',filter);

    setData([]);
    let pages = page;
 
    let response = await axios
      .get(`v1/user/get-business?page=${pages + filter}`)
      .catch((e) => {
        console.log('eeee',e);
      
      });
      
    if (response) {
      
      let filter = response.data;
      
      window.e = filter;
      setData(response.data.data);

      setPaginateFilter(filter.meta);
    }
  };

  
  const searchFilter = () => {    
    let search = `&search=${filterSearchValue}`;
    console.log('search',search);
    let queryParams = `&from=${filterFrom}&to=${filterTo}&sort=${filterSortValue}`;
    
    listData(undefined, search+queryParams);
  };

  
  const pageChange = (value = 1)=>{
    listData(value);
  }
  const sortingValues = [
    {
      value: 'all',
      text: 'All'
    },
    {
      value: 'status',
      text: 'Status'
    }
  ]

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
            <TableFilter 
             
              filterSort={true}
              filterSortValue={filterSortValue}
              setFilterSortValue={setFilterSortValue}
              filterSortValues={sortingValues}
              filterSearch={true}
              filterSearchValue={filterSearchValue}
              setFilterSearchValue={setFilterSearchValue}
              searchFilter={searchFilter}
              setPaginateFilter={setPaginateFilter}
              paginateFilter={paginateFilter}
              dateFilter={true}
              filterFrom={filterFrom}
              setFilterFrom={setFilterFrom}
              filterTo={filterTo}
              setFilterTo={setFilterTo}
              pageChange = {pageChange}
            
            />
            <MainTable header={tableHead}
           
            paginateFilter={paginateFilter}
            pageChange = {pageChange}
            >
            <tbody>
              {/* <td>  {data} </td> */}
                        {data?.map((item, index) => (
                          <tr key={index}>
                            <td>{index+1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.email}</td>
                            <td>{item.business_type}</td>
                            <td>{item.created_at}</td>
                            <td>{item.status}</td>

                            
                            <td>
                            <Link class="view-btn" to={`/businessProfile/${item.id}`}><FontAwesomeIcon icon={faEye} /></Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
            </MainTable>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default BusinessManagement
