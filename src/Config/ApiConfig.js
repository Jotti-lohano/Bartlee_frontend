import axios from "axios";

// axios.defaults.baseURL = "https://custom-dev.onlinetestingserver.com/mournify-backend/api/";
//  axios.defaults.baseURL = "http://localhost/BARTLEE/batrlee/api/";
 axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

if (localStorage.getItem("_token") && localStorage.getItem("user")) {

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("_token")}`;
  
}
