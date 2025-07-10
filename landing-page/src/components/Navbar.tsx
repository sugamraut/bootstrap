import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/image/navbarlogo.png";
import type { RootState, AppDispatch } from "../store/store";
import { fetchNavbarAsync } from "../store/NavbarSlice";
import { Status } from "../globals/types";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: headerData, status } = useSelector(
    (state: RootState) => state.navbar
  );

  useEffect(() => {
    if (status === Status.Loading) {
      dispatch(fetchNavbarAsync());
    }
  }, [dispatch, status]);

  if (status === Status.Loading) {
    return <div>Loading ...</div>;
  }
  if (status === Status.Error || !headerData) {
    return <div>Failed to load.....</div>;
  }
  return (
    <div className="bg-light py-2">
      <nav className="navbar navbar-expand-md navbar-light container container-xxl">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Logo" width="30" className="me-2 navbar-logo" />
        </Link>
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
            {headerData.navigation?.map((item, index) => (
              <li className="nav-item" key={index}>
                <a className="nav-link mx-auto" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="d-flex flex-md-row align-items-center gap-2 mt-3 mt-md-0">
            {headerData.authActions?.map((action, index) => (
              <Link
                key={index}
                to={action.href}
                className={`nav-btn ${
                  action.label.toLowerCase() === "login" ? "login" : "signup"
                } navbar-list fw-medium`}
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
