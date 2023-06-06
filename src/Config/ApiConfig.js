import axios from "axios";

// axios.defaults.baseURL = "https://custom-dev.onlinetestingserver.com/mournify-backend/api/";
 axios.defaults.baseURL = "http://localhost/BARTLEE/bartlee/api/";

if (localStorage.getItem("_token") && localStorage.getItem("user")) {

  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("_token")}`;
  
}
