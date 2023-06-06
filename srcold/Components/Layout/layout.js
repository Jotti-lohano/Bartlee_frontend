import { React, useState, useEffect } from 'react';
import { DashboardHeader } from './header';
import { SideBar } from './sideBar';
import "./layout.css"
import TableFilter from '../TableFilter';
import { Link } from 'react-router-dom';

export const Layout = (props) => {
    const [sideBarClass, setsideBarClass] = useState("");
    const [bodyClass, setbodyClass] = useState("");
    useEffect(() => {
        if (window.innerWidth <= 991) {
            setsideBarClass("collapsed");
            setbodyClass("expanded");
        }
        else {
            setsideBarClass("");
            setbodyClass("");
        }
        function handleResize() {
            if (window.innerWidth <= 991) {
                setsideBarClass("collapsed");
                setbodyClass("expanded");
            }
            else {
                setsideBarClass("");
                setbodyClass("");
            }
        }
        window.addEventListener('resize', handleResize)
    }, []);
    function sidebarToggle() {
        if (sideBarClass == "") {
            setsideBarClass("collapsed");
            setbodyClass("expanded");
        }
        else {
            setsideBarClass("");
            setbodyClass("");
        }
    };
    // function outCardelements() {
    //    if (props.linkBtn && true){
        
    //    }
    //    else{
        
    //    }
    // };
    
    return (
        <>
            <DashboardHeader sidebarToggle={sidebarToggle} />
            <SideBar sideClass={sideBarClass} />
            <div className={`main-body ${bodyClass}`}>
                <div className='d-flex justify-content-between align-items-center'>
                    {/* <h2 className='inner-heading'>{props.pageheading}</h2> */}
                       <div> 
                        {props.filterBtn?<TableFilter/>:''}
                        </div>
                </div>
                {props.children}
            </div>
        </>
    )
}
