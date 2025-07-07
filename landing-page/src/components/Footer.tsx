import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import footerimage from "../assets/image/favicon-32x32.png"
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const base_Url = import.meta.env.VITE_BASE_URL;

  type FooterType = {
    socialLinks: {
      platform: string;
      url: string;
    }[];
    footerNavigation: {
      company: {
        label: string;
        href: string;
      }[];
      support: {
        label: string;
        href: string;
      }[];
    };
  };

  const [footerData, setFooterData] = useState<FooterType | null>(null);

  const fetchFooterData = async () => {
    try {
      const response = await axios.get(`${base_Url}footer.json`);
      if (response.data.status === "success") {
        setFooterData(response.data.data);
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchFooterData();
  }, []);

  if (!footerData) {
    return <div>Loading...</div>;
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
        <div className="row text-md-center">
          <div className="col-lg-4 col-sm-12 mb-4 text-center text-md-start">
            <div className="d-flex align-items-center">
              <img src={footerimage} alt="logo" />
              <h2 className="footer-company-name fw-bolder ms-2">Nexcent</h2>
            </div>
            <p className="gap-4 mt-3 footer-section-text fs-normal">
              Copyright © 2025 Nexcent Ltd.
            </p>
            <p className="footer-section-text fs-normal">All rights reserved</p>

            <div className="mt-4">
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
                        size="xl"
                        className="mouse-cursor"
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
            <div className="row">
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
                    className="email-section rounded"
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
