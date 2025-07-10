import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { Status } from "../globals/types";
import { featchFeatureAsync } from "../store/featureSlice";

function Features() {
  const dispatch = useDispatch<AppDispatch>();
  const { data: featureData, status } = useSelector(
    (state: RootState) => state.feature
  );
  useEffect(() => {
    if (status === Status.Loading) {
      dispatch(featchFeatureAsync());
    }
  }, [dispatch, status]);
  if (status === Status.Loading) {
    return <div>Loading...</div>;
  }
  if (status === Status.Error || !featureData) {
    return <div>Failed to load....</div>;
  }

  return (
    <div className="container text-center">
      <div className="mt-5">
        <h6 className="heading fw-semibold">{featureData.title}</h6>
      </div>
      <p className="heading-text">{featureData.subtitle}</p>

      <div className="row gap-3 mt-5 feature-card custom-css-for-row">
        {featureData.features.map((feature, index) => (
          <div className="col d-flex justify-content-center" key={index}>
            <div className="cards text-center position-relative">
              <div className=" row text-center custom-css-for-row">
                <div className=" feature-image position-absolute top-20 start-50 translate-middle">
                  <img
                    src={`https://landing-2vb.pages.dev${feature.iconUrl}`}
                    alt={feature.title}
                    className="img-fluid image-postion-of-feature-section "
                  />
                </div>
                 <h6 className="heading fw-bold mt-5">{feature.title}</h6>
              <p className="heading-text fw-normal">{feature.description}</p>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
   
  );
}

export default Features;
