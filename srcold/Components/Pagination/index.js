import React from 'react'
import Pagination from 'react-bootstrap/Pagination';
import './style.css';

function Paginations() {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <div className="container-fluid custum-class">
            <div className="row">
                <div className="col-lg-6">
                    <p className='show-entry-text'>Showing 05 out of 20 Entries</p>
                </div>
                <div className="col-lg-6">
                    <Pagination>
                        <Pagination.Prev className='prev'>Previous</Pagination.Prev>
                        <Pagination>{items}</Pagination>
                        <Pagination.Next className='next'>Next</Pagination.Next>
                    </Pagination>
                </div>
            </div>
        </div>
    )
}

export default Paginations
