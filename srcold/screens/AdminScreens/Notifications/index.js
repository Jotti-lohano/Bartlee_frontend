import { useState, useEffect } from "react";
import { Layout } from '../../../Components/Layout/layout.js'
import { notifications } from '../../../Components/Data/data.js';
import NotificationCard from '../../../Components/NotificationCard/index.js';
import Pagination from '../../../Components/Pagination';
import Lottie from "lottie-react";
import { images } from '../../../Assets/index';
import './style.css'

function Notifications() {

    const [notificationState, setNotificationState] = useState([])
    // const [notificationType, setNotificationType] = useState('all')

    useEffect(() => {

        document.title = 'Bartlee | Notifications';

        setNotificationState(notifications)
    }, [])





    return (
        <div>
            <Layout>
                <div className='container-fluid'>
                    <h2 className='inner-heading'> Notification</h2>
                    <div className="dash-card">
                        <div className="row" >
                            <div className="col-lg-6">
                                {notificationState.map((notification, index) => (
                                    <>
                                        <div className="col-12" key={index}>
                                            <NotificationCard text={notification.text} date={notification.date} time={notification.time} />
                                        </div>
                                    </>
                                ))}
                                <Pagination />
                            </div>
                            <div className="col-lg-6">
                                <div className="for-loti">
                                    <Lottie animationData={images.loti1} loop={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}

export default Notifications
