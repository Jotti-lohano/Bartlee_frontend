import React, { useState, useEffect } from "react";
import { Layout } from "../../../Components/Layout/layout.js";
import NotificationCard from "../../../Components/NotificationCard/index.js";
import PaginationNew from "../../../Components/PaginationNew/index.js";
import Lottie from "lottie-react";
import { images } from "../../../Assets/index";
import "./style.css";
import axios from "axios";

function Notifications() {
  const [notificationState, setNotificationState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0)
  const itemsPerPage = 5; // You can set the number of items to display per page

  useEffect(() => {
    document.title = "Mournify | Notifications";
    fetchNotifications();
  }, []);

  const fetchNotifications = async (id = 1) => {
    setNotificationState([])
    let response = await axios.get(`v1/user/getNotifications?page=${id}`).catch((e) => {
      console.log(e.response.data.message);
    });
    if (response.status) {

      console.log("snoti", response.data.data);
      setTotalRecords(response.data.meta.total)
      setCurrentPage(response.data.meta.current_page)
      setNotificationState(response.data.data);
    }
  };

  // Calculate the index of the first and last notification to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotifications = notificationState.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle pagination page change
  const handlePageChange = async (pageNumber) => {

    // alert(pageNumber)
    await fetchNotifications(pageNumber)
  };

  return (
    <div>
      <Layout>
        <div className="container-fluid">
          <h2 className="inner-heading"> Notification</h2>
          <div className="dash-card">
            <div className="row">
              <div className="col-lg-6">
                {notificationState?.map((notification, index) => (
                  <div className="col-12" key={index}>
                    <NotificationCard text={notification.title} date={notification.created_at} time={notification.time} />
                  </div>
                ))}
                <PaginationNew
                  itemsPerPage={itemsPerPage}
                  totalItems={totalRecords}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                />
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
  );
}

export default Notifications;
