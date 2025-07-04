import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

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
  clientIcons?:{
    clientIcons: string | undefined;
    icon:any;
    index:string;
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
    <div className="row mt-5">
      {type !== "customer" && (
        <>
          <div className="col-4">
            <img src={data.imageUrl} alt={data.title} className="img-fluid" />
          </div>
          <div className="col-lg-8 col-md-8 text-start pt-5 unlock">
            <h6 className="heading fw-bold ">{data.title}</h6>
            <p className="contents">{data.description}</p>
            <a href={data.ctaUrl} className="  mouse-cursor">
              <span className="button-text">{data.ctaText}</span>
            </a>
          </div>
        </>
      )}

      {type === "customer" && (
        <>
          <div className="col-lg-2 col-md-2">
            <img
              src={data.authorImageUrl}
              alt={data.authorName}
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-lg-10 col-md-10 text-start pt-3">
            <blockquote>{data.quote}</blockquote>
            <p>
              <strong>{data.authorName}</strong>
              <br />
              {data.authorPosition}
            </p>

            <div className="d-flex flex-wrap mt-3">
              {data.clientIcons?.map((icon, index) => (
                <img
                  key={index}
                  src={icon.clientIcons}
                  alt={`client-logo-${index}`}
                  className="me-3 mb-2"
                  style={{ width: 50 }}
                />
              ))}
              <a href={data.ctaUrl} className="mouse-cursor link-design">
                <h6>
                  {data.ctaText}
                  <FontAwesomeIcon icon={faArrowRightLong} />
                </h6>
              </a>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContentCard;
