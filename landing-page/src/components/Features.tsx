import axios from "axios";
import { useEffect, useState } from "react";
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
    return <div>Loading navbar...</div>;
  }
  if (status === Status.Error || !featureData) {
    return <div>Failed to load navbar.</div>;
  }

  return (
    <>
      <div className="mt-5">
        <h6 className="heading fw-semibold">{featureData.title}</h6>
      </div>
      <p className="heading-text">{featureData.subtitle}</p>

      <div className="row gap-3 mt-5">
        {featureData.features.map((feature, index) => (
          <div className="col" key={index}>
            <div className="cards text-center">
              <div>
                <img
                  src={`https://landing-2vb.pages.dev${feature.iconUrl}`}
                  alt={feature.title}
                  className="img-fluid"
                />
              </div>
              <h6 className="heading fw-bold">{feature.title}</h6>
              <p className="heading-text fw-normal">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
