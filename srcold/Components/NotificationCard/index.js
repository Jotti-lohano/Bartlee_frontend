import { React, useState } from 'react';
import { images } from '../../Assets';
import WebButton from '../../Components/Buttons/WebButton';
import './style.css'

const NotificationCard = (props) => {
    const [notiRead, setNotiRead] = useState(props.read)
  return (
    <div>
        <div className={`notificationWrapper ${notiRead ? 'unread' : ''}`}>
            <div className={`d-sm-flex justify-content-between align-items-center gap-3 `} key={props.id}>
                <div className="d-flex gap-3">
                    <div className="notificationImageIcon">
                        <img src={images.notifPic} alt="Icon"/>
                    </div>
                    <div className="flex-grow-1">
                        <p className="notificationText">{props?.text}</p>
                        <div className="dateTime">
                            <p className="p-sm normal-text mb-0">{props?.date}</p>
                            <span className='mx-2 normal-text'>|</span>
                            <p className="p-sm normal-text mb-0">{props?.time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default NotificationCard
