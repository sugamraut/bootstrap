import { useEffect } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { Status } from "../globals/types";
import { fetchSliderAsync } from "../store/sliderSlice";

const Slider = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: headerData, status } = useSelector(
    (state: RootState) => state.slider
  );
  useEffect(() => {
    if (status === Status.Loading) {
      dispatch(fetchSliderAsync());
    }
  }, [dispatch, status]);
  if (status === Status.Loading) {
    return <div>Loading navbar...</div>;
  }
  if (status === Status.Error || !headerData) {
    return <div>Failed to load navbar.</div>;
  }

  return (
     <div className="bg-light">
        <div className="container slider-wrapper">
          <div id="carouselExampleIndicators" className="carousel slide">
      <div className="carousel-indicators">
        {headerData.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <div className="carousel-inner">
        {headerData.map((item, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="slider-area row align-items-center">
              <div className="col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <h1 className="slider-text">
                  {" "}
                  {(() => {
                    const words = item.title.trim().split(" ");
                    const lastWords = words.splice(-3).join(" ");
                    return (
                      <>
                        {words.join(" ")}{" "}
                        <span className="highlight">{lastWords}</span>
                      </>
                    );
                  })()}
                </h1>
                <p>{item.subtitle}</p>
                <Link to={item.ctaUrl}>
                  <button className="button-design">
                    <span className="button-text">{item.ctaText}</span>
                  </button>
                </Link>
              </div>
              <div className="col-6 text-end">
                <div className="slider-image-wrapper">
                  <img
                    src={`https://landing-2vb.pages.dev${item.imageUrl}`}
                    alt={`Slide image ${index + 1}`}
                    className="slider-image img-fluid"
                  />
                </div>
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

export default Slider;
