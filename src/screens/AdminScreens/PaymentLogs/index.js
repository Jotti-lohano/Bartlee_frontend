import {React,useState,useEffect } from 'react'
import { Layout } from '../../../Components/Layout/layout.js'
import MainTable from '../../../Components/MainTable/index.js';
import TableFilter from '../../../Components/TableFilter/index.js';
import { paymentLogs } from '../../../Components/Data/data.js'
import UseTableControls from '../../../Config/UseTableControls';
import axios from "axios";

function Index() {

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
    document.title = 'BARTLEE| Payment Logs';
  
    listData();
  }, []);

  const listData = async (page = 1, filter = null) => {

    console.log('filer',filter);

    setData([]);
    let pages = page;
 
    let response = await axios
      .get(`v1/artist/paymentLogs?page=${pages + filter}`)
      .catch((e) => {
        console.log('eeee',e);
      
      });
      console.log('responsepayment',response);
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
                {data.map(
                  (item, index) => {
                    return (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item?.user_artist?.artist_name}</td>
                        <td>{item.total_amount}</td>
                        <td>{item.created_at}</td>
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
