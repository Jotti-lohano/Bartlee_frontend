import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './style.css';

function TableFilter({ name, ...props }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


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
                                <input type="date" name="" id="" className='date-input' />
                            </div>
                            <div className="col-lg-12">
                                <input type="date" name="" id="" className='date-input' />
                            </div>
                            <h6 className='filter-headings mt-3'>Filter By Status:</h6>
                            <select class="form-select filter-select" aria-label="Default select example">
                                <option selected>Active</option>
                                <option value="1">Inactive</option>
                            </select>
                            <div>
                            <Link className='site-btn my-2' to={''}>Apply</Link>
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
                    placeholder="Search Here...."></input>
            </div>

        </>

    )
}

export default TableFilter
