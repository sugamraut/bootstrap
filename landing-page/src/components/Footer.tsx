import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import footerimage from "../assets/image/favicon-32x32.png";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import type { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Status } from "../globals/types";
import { featchfooterAsync } from "../store/footerSlice";

const Footer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: footerData, status } = useSelector(
    (state: RootState) => state.footer
  );
  useEffect(() => {
    if (status === Status.Loading) {
      dispatch(featchfooterAsync());
    }
  }, [dispatch, status]);
  if (status === Status.Loading) {
    return <div> Loading client......</div>;
  }
  if (status === Status.Error || !footerData) {
    return <div>failed to footer ......</div>;
  }
  const { socialLinks, footerNavigation } = footerData;

  const iconMap: Record<string, any> = {
    facebook: faFacebook,
    instagram: faInstagram,
    twitter: faTwitter,
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-md-center custom-css-for-row">
          <div className="col-lg-4 col-sm-12 mb-4 text-center text-md-start text-sm-center">
            <div className="d-flex align-items-center text-sm-">
              <img src={footerimage} alt="logo" />
              <h2 className="footer-company-name fw-bolder ms-2">Nexcent</h2>
            </div>
            <p className="gap-4 mt-3 footer-section-text fs-normal">
              Copyright © 2025 Nexcent Ltd.
            </p>
            <p className="footer-section-text fs-normal">All rights reserved</p>

            <div className="mt-4 ">
              {socialLinks.map((link, index) => {
                const icon = iconMap[link.platform.toLowerCase()];
                return (
                  <Link
                    to={link.url}
                    target="_blank"
                    key={index}
                    className="pe-3"
                  >
                    {icon ? (
                      <FontAwesomeIcon
                        icon={icon}
                        size="lg"
                        className="mouse-cursor social-icon"
                      />
                    ) : (
                      link.platform
                    )}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="col-md-12 col-lg-8 col-sm-12">
            <div className="row custom-css-for-row">
              <div className="col-md-4 col-sm-12 mb-4 text-center text-md-start">
                <h4 className="footer-heading fw-semibold mouse-cursor">
                  Company
                </h4>
                {footerNavigation.company.map((item, index) => (
                  <p
                    key={index}
                    className="footer-heading-subtext mouse-cursor"
                  >
                    <Link
                      to={item.href}
                      className="text-decoration-none text-reset"
                    >
                      {item.label}
                    </Link>
                  </p>
                ))}
              </div>

              <div className="col-md-4 col-sm-12 mb-4 text-center text-md-start">
                <h4 className="footer-heading fw-semibold mouse-cursor">
                  Support
                </h4>
                {footerNavigation.support.map((item, index) => (
                  <p
                    key={index}
                    className="footer-heading-subtext mouse-cursor"
                  >
                    <Link
                      to={item.href}
                      className="text-decoration-none text-reset"
                    >
                      {item.label}
                    </Link>
                  </p>
                ))}
              </div>

              <div className="col-md-4 col-sm-12 mb-4 text-center text-md-start">
                <h4 className="footer-heading fw-semibold">Stay up to date</h4>
                <div className="position-relative footer-email-container">
                  <input
                    type="email"
                    className="email-section form-control"
                    placeholder="Your email address"
                  />
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="sendButton position-absolute"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
