import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Layout } from '../../../Components/Layout/layout.js'
import { feedbacks } from '../../../Components/Data/data.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import { images } from '../../../Assets';

function FeedbackDetails() {
    let navigate = useNavigate();


    const { id } = useParams();
    const [thisfeedbacks, setThisfeedbacks] = useState({});
    let thisStatus;
    const [thisfeedbacksStatus, setThisfeedbacksStatus] = useState();
    useEffect(() => {
        feedbacks.find(feedbacks => {
            if (feedbacks.id == id) {
                setThisfeedbacks(feedbacks);
                thisStatus = feedbacks.status;
            }
        })
        setThisfeedbacksStatus(thisStatus);
    }, [])

    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'><Link onClick={() => navigate(-1)}><FontAwesomeIcon className='back-arrow' icon={faCircleArrowLeft} /></Link> Feedback</h2>
                    <div className="dash-card">
                        <div className="row">
                            <div className="col-md-6 order-lg-1 order-md-1 order-2">
                                <div className='pb-3'>
                                    <span>{thisfeedbacks.pic}</span>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Name</label>
                                            <h6 className='normal-text'>{thisfeedbacks.name}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Email Address</label>
                                            <h6 className='normal-text'>{thisfeedbacks.email}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Subject</label>
                                            <h6 className='normal-text'>{thisfeedbacks.subject}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className='py-3'>
                                            <label className='inner-label'>Date</label>
                                            <h6 className='normal-text'>{thisfeedbacks.date}</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className='py-3'>
                                            <label className='inner-label'>Message</label>
                                            <h6 className='normal-text'>{thisfeedbacks.message}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 order-lg-2 order-md-2 order-1">
                                <div className="for-loti">
                                    <Lottie animationData={images.loti3} loop={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default FeedbackDetails
