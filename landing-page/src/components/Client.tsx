import axios from "axios";
import { useEffect, useState } from "react";

const Client = () => {
  const [sectionData, setSectionData] = useState(null);

  const fetchClient = async () => {
    try {
      const response = await axios.get(
        "https://landing-2vb.pages.dev/api/clients.json"
      );
      if (response.data.status === "success") {
        setSectionData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching feature data:", error);
    }
  };

  useEffect(() => {
    fetchClient();
  }, []);
  if (!sectionData) return <div>Loading...</div>;

  return (
    <>
      <div className="text-center">
        <h6 className="heading">{sectionData.title}</h6>
        <p className="heading-text">{sectionData.description}</p>
      </div>
      <div className="image-container row mt-3">
        <div className="d-flex justify-content-between">
          {sectionData.clientLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`client-logo-${index}`}
              className="m-2"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Client;
