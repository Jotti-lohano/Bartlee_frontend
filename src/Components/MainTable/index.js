import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import "./style.css"
import Pagination from '../Pagination';


function MainTable(props) {
    return (


        <div className="table-responsive">

            <table className="table">
                <thead>
                    <tr>
                    
                        {props?.header.map((header) => (
                            <th header={header.key}><FontAwesomeIcon icon={faSort} /> {header.title}</th>
                        ))}
                    </tr>
                </thead>
                {props.children}
            </table>
           
            <Pagination  paginateFilter={props?.paginateFilter} 
        pageChange = {props?.pageChange} />
        
        </div>
    )
}

export default MainTable
