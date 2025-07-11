import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { type AppDispatch, type RootState } from "../store/store";
import { Status } from "../globals/types";
import { featchcontentAsync, featcharticleHighlightAsync } from "../store/contentSlice1";

interface IcardProps {
  type: "case-study" | "article";
}

const ContentCard = ({ type }: IcardProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { casedata, articledata, status } = useSelector(
    (state: RootState) => state.customer
  );
  
  const content = type === "case-study" ? casedata : articledata;

  useEffect(() => {
    if (status === Status.Loading) {
      if (type === "case-study") {
        dispatch(featchcontentAsync());
      } else if (type === "article") {
        dispatch(featcharticleHighlightAsync());
      }
    }
  }, [dispatch, status, type]);

  if (status === Status.Loading || !content) {
    return <div>Loading....</div>;
  }

  if (status === Status.Error) {
    return <div>Failed to load....</div>;
  }

  return (
    <div className="container">
      <div className="row mt-5 custom-css-for-row">
        <div className="col-md-4 col-xl-4 col-xxl-4 content-card-img-section">
          <img
            src={`https://landing-2vb.pages.dev${content.imageUrl}`}
            alt={content.title}
            className="img-fluid"
          />
        </div>
        <div className="col-lg-8 col-md-8 text-start pt-5 unlock">
          <h6 className="heading fw-bold ">{content.title}</h6>
          <p className="contents">{content.description}</p>
          <Link to={content.ctaUrl} className="mouse-cursor">
            <span className="button-text">{content.ctaText}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
