import React from 'react'
import "./statCard.css"

const StatCard = (props) => {
  return (
    <div className={`stat-card ${props?.cardClass}`} key={props.items.id}>
        <div className="d-flex align-items-center justify-content-between">
            <div className="flex-grow-1 ms-2">
                <p className="dashboard-card-text mb-0">{props.items.statText}</p>
                <h3 className="dashboard-card-num mb-0">{props.items.stats}</h3>
            </div>
            <div className="flex-shrink-0">
                <img src={props.items.imgSrc} alt="" className="img-fluid stat-img" />
            </div>
        </div>
    </div>
  )
}

export default StatCard
