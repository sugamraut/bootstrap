import { useEffect, useState } from "react";
import axios from "axios";

const Slider = () => {
  type SliderItem = {
  title: string;
  subtitle: string;
  imageUrl: string;
  ctaText: string;
  ctaUrl: string;
};
  const [headerData, setHeaderData] =  useState<SliderItem[]>([]);

  const fetchSliderData = async () => {
    try {
      const response = await axios.get(
        "https://landing-2vb.pages.dev/api/banner.json"
      );
      if (response.data.status === "success") {
        setHeaderData(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch slider data:", error);
    }
  };

  useEffect(() => {
    fetchSliderData();
  }, []);

  if (!headerData.length) return null;

  return (
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
              <div className="col-6">
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
                <a href={item.ctaUrl}>
                  <button className="button-design">
                    <span className="button-text">{item.ctaText}</span>
                  </button>
                </a>
              </div>
              <div className="col-6 text-end">
                <img
                  src={`https://landing-2vb.pages.dev${item.imageUrl}`}
                  // src={item.imageUrl}
                  className="img-fluid"
                  alt={`Slide image ${index + 1}`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
