import axios from "axios";
import { useEffect, useState } from "react";

const Frame = () => {
  const [farmeData, SetFarmeData] = useState(null);
  const featchFameData = async () => {
    try {
      const response = await axios.get(
        "https://landing-2vb.pages.dev/api/cta.json"
      );
      if (response.data.status === "success") {
        SetFarmeData(response.data.data);
      }
    } catch (error) {
      console.log("error somethiong went wrong !!!");
    }
  };
  useEffect(() => {
    featchFameData();
  }, []);
  if (!farmeData) {
    return <div>Loading....</div>;
  }

  return (
    <section className="container">
      <div className="text-center">
        <div className="text-center mt-5">
          <h6 className="section-text fw-semibold">{farmeData.title}</h6>
        </div>
        <button className="btn btn-success button-design mb-4">
          {farmeData.ctaText}
        </button>
      </div>
    </section>
  );
};
export default Frame;
