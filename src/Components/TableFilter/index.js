import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './style.css';

function TableFilter({ name, ...props }) {
    const searchHere = () => {
        console.log('filterSearchValue',props?.filterSearchValue);
        props?.searchFilter();
      }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        document.title = 'BARTLEE| Bussiness Management';
        props?.searchFilter();
       
      },[props?.filterSearchValue]);

    return (
        <>
            <div className='filtr-box'>
                <Button onClick={handleShow} className="me-2 filter-btn">

                    <FontAwesomeIcon icon={faFilter} />

                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className="row">
                            <h2 className='filter-main-heading'>Filters</h2>
                            <h6 className='filter-headings'>Sort by Date</h6>
                            <div className="col-lg-12">
                            <input
                                type="date"
                                placeholder="From"
                                name="from"
                                className='date-input'
                                defaultValue={props?.filterFrom}
                                onChange={(event) => {
                                    props?.setFilterFrom(event.target.value);
                                }}
                                />
                            </div>
                            <div className="col-lg-12">
                                <input
                                    type="date"
                                    placeholder="To"
                                    name="to"
                                    className='date-input'
                                    defaultValue={props?.filterTo}
                                    onChange={(event) => {
                                        props?.setFilterTo(event.target.value);
                                    }}
                                />
                            </div>
                            <h6 className='filter-headings mt-3'>Filter By Status:</h6>
                            <select class="form-select filter-select" aria-label="Default select example">
                                <option selected>Active</option>
                                <option value="1">Inactive</option>
                            </select>
                            <div>
                            <Link className='site-btn my-2' onClick={() => {
                            searchHere();
                            }} >Apply</Link>
                            </div>
                            <div>
                            <Link className='site-btn-transparent my-2' to={''}>Cancel</Link>
                            </div>
                        </div>
                        {props.children}
                    </Offcanvas.Body>
                </Offcanvas>

                <input type="search"
                    id="search-input"
                    class="table-search"
                    placeholder="Search Here...."
                    value={props?.filterSearchValue}
                    onChange={(event) => {
                      props?.setFilterSearchValue(event.target.value);
                    }}
                    ></input>
                   
            </div>

        </>

    )
}

export default TableFilter
