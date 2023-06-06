import { useEffect, useState } from "react";

import { Link, useNavigate, useLocation } from "react-router-dom";
function AuthGuard(props) {
  const [formData] = useState();
  const { Component } = props;
  const locationHere = useLocation().pathname.replace(/['/']/g, "");
  const navigate = useNavigate();

  let reverseAuthGuard = [
    "login",
    "forget-password",
    "forget-password2",
    "forget-password3",
  ];
  useEffect(() => {
    let login = localStorage.getItem("_token");
    let user = localStorage.getItem("user");
    if (!login || !user) {
      if (reverseAuthGuard.indexOf(locationHere) > -1) {
      } else navigate("/login");
    } else {
      if (reverseAuthGuard.indexOf(locationHere) > -1) {
        // console.log(reverseAuthGuard.indexOf(location.pathname));
        navigate("/dashboard");
      }
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
}
export default AuthGuard;
