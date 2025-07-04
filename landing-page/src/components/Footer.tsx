import axios from "axios"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [footerData, setFooterData] = useState(null)

  const fetchFooterData = async () => {
    try {
      const response = await axios.get("https://landing-2vb.pages.dev/api/footer.json")
      if (response.data.status === "success") {
        setFooterData(response.data.data)
      }
    } catch (error) {
      console.log("Something went wrong", error)
    }
  }

  useEffect(() => {
    fetchFooterData()
  }, [])

  if (!footerData) {
    return <div>Loading...</div>
  }

  const { socialLinks, footerNavigation } = footerData

  return (
    <footer className="footer">
      <div className="container">
        <div className="row text-md-center">
          <div className="col-lg-4 col-sm-12 mb-4 text-center text-md-start">
            <div className="d-flex align-items-center">
              <img src="./image/footerimage.png" alt="logo" />
              <h2 className="footer-company-name fw-bolder ms-2">Nexcent</h2>
            </div>
            <p className="gap-4 mt-3 footer-section-text fs-normal">
              Copyright © 2025 Nexcent Ltd.
            </p>
            <p className="footer-section-text fs-normal">All rights reserved</p>
            <div className="mt-4">
              {socialLinks.map((link, index) => (
                <a href={link.url} target="_blank" rel="noopener noreferrer" key={index}>
                  <img
                    src={`./image/${link.platform.toLowerCase()}.png`}
                    alt={link.platform}
                    className="pe-3 mouse-cursor img-fluid"
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="col-md-12 col-lg-8 col-sm-12">
            <div className="row">
              <div className="col-md-4 col-sm-12 mb-4 text-center text-md-start">
                <h4 className="footer-heading fw-semibold mouse-cursor">Company</h4>
                {footerNavigation.company.map((item, index) => (
                  <p key={index} className="footer-heading-subtext mouse-cursor">
                    <a href={item.href} className="text-decoration-none text-reset">
                      {item.label}
                    </a>
                  </p>
                ))}
              </div>

              <div className="col-md-4 col-sm-12 mb-4 text-center text-md-start">
                <h4 className="footer-heading fw-semibold mouse-cursor">Support</h4>
                {footerNavigation.support.map((item, index) => (
                  <p key={index} className="footer-heading-subtext mouse-cursor">
                    <a href={item.href} className="text-decoration-none text-reset">
                      {item.label}
                    </a>
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
                    <FontAwesomeIcon icon={faPaperPlane} className="sendButton position-absolute" />
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
