import { useEffect, useState } from "react";
import axios from "axios";
import logo from "../assets/image/navbarlogo.png";
const Nabar = () => {
  const [headerData, setHeaderData] = useState(null);
  const fetchNavbar= async()=>{
    try {
         const response=await axios.get("https://landing-2vb.pages.dev/api/header.json")
    if(response.data.status==="success"){
      setHeaderData(response.data.data)
    }
      
    } catch (error) {
      console.error("Error fetching feature data:", error);
    }
 
  }
   useEffect(() => {
    fetchNavbar();
  }, []);
  if (!headerData) return null;

  return (
    
      <nav className="navbar navbar-expand-md navbar-light container container-xxl">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src={headerData.logoUrl || logo}
            alt="Logo"
            width="30"
            className="me-2 navbar-logo "
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mx-auto text-center text-md-start">
            {headerData.navigation.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link mx-2" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex flex-md-row align-items-center gap-2 mt-3 mt-md-0">
            {headerData.authActions.map((action, index) => (
              <a
                key={index}
                href={action.href}
                className={`nav-btn ${
                  action.label.toLowerCase() === "login" ? "login" : "signup"
                } navbar-list fw-medium`}
              >
                {action.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
  );
};

export default Nabar;
