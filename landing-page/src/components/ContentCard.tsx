import axios from "axios";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

type constentType = {
  imageUrl: string;
  title: string;
  description: string;
  ctaUrl: string;
  ctaText: string;
  authorImageUrl: string;
  authorName: string;
  quote: string;
  authorPosition: string;
  clientIcons?: {
    clientIcons: string | undefined;
    icon: any;
    index: string;
  }[];
};
interface IcardProps {
  apiUrl: string;
  type: string;
}

const ContentCard = ({ apiUrl, type }: IcardProps) => {
  const [data, setData] = useState<constentType | null>(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      if (response.data.status === "success") {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [apiUrl]);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="row mt-5 custom-css-for-row">
        {type !== "customer" && (
          <>
            <div className="col-md-4 col-xl-4 col-xxl-4 content-card-img-section">
              <img
                src={`https://landing-2vb.pages.dev${data.imageUrl}`}
                alt={data.title}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-8 col-md-8 text-start pt-5 unlock">
              <h6 className="heading fw-bold ">{data.title}</h6>
              <p className="contents">{data.description}</p>
              <Link to={data.ctaUrl} className="  mouse-cursor">
                <span className="button-text">{data.ctaText}</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
