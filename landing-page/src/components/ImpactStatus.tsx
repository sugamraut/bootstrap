import axios from "axios";
import { useEffect, useState } from "react";

const ImpactStauts = () => {
  const [impactData, setImpactStatus] = useState(null);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        "https://landing-2vb.pages.dev/api/impact-stats.json"
      );
      if (response.data.status === "success") {
        setImpactStatus(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching feature data:", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (!impactData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="review-section row">
        <div className="col-6 text-center col-sm-12 col-md-6">
          <h1 className="heading fw-semibold">{impactData.title}</h1>
          <p className="heading-text fw-normal">{impactData.description}</p>
        </div>

        <div className="col-md-6">
          <div className="row text-center">
            {impactData.stats.map((item, index) => (
              <div key={index} className="col-6 col-sm-6 col-md-6 mb-4">
                <div className="d-flex gap-2">
                  <img
                    src={item.logoUrl}
                    className="mb-1 img-fluid"
                    alt={item.label}
                  />
                  <div>
                    {item.value.toLocaleString()}
                    <p>{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStauts;
