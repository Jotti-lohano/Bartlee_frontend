import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import './style.css';

function Paginations(props) {
    console.log('propssssss',props.paginateFilter);
    let paginateFilter = props.paginateFilter ?? {};  
    let active = paginateFilter.current_page ?? 1;
    let items = [];
    const changeData = (number) => {    
        props.pageChange(number);
    };
  
   
    for (let number = 1; number <=  paginateFilter.last_page; number++) {
        items.push(
            <Pagination.Item onClick={() => {
                changeData(number);
              }}
              disabled={paginateFilter.current_page == number ? true : false}
               key={number} active={number === active}>
                {number}
              </Pagination.Item>,
        );
    }
    return (
        <div className="container-fluid custum-class">
            <div className="row">
                <div className="col-lg-6">
                    <p className='show-entry-text'>{paginateFilter.from ?? 0} to {paginateFilter.to ?? 0} out of {paginateFilter.total ?? 0}</p>
                </div>
                <div className="col-lg-6">
                    <Pagination>
                        <Pagination.Prev onClick={() => {
                            changeData(paginateFilter.current_page - 1);
                            }}
                            disabled={paginateFilter.current_page == 1 ? true : false}>
                            <span className=" d-sm-inline-block">Previous</span>
                        </Pagination.Prev>
                            {items}
                        <Pagination.Next onClick={() => {
                            changeData(paginateFilter.current_page + 1);
                            }}
                            disabled={
                            paginateFilter.current_page == paginateFilter.last_page
                                ? true
                                : false
                            }>
                            <span className=" d-sm-inline-block">Next</span>
                        </Pagination.Next>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export default Paginations
