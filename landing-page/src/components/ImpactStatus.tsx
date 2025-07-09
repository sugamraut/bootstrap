import { useEffect } from "react";
import type { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Status } from "../globals/types";
import { featchImpactAsync } from "../store/impactSlice";

const ImpactStauts = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: impactData, status } = useSelector(
    (state: RootState) => state.impact
  );
  useEffect(() => {
    if (status === Status.Loading) {
      dispatch(featchImpactAsync());
    }
  }, [dispatch, status]);

  if (status === Status.Loading) {
    return <div>Loading navbar...</div>;
  }
  if (status === Status.Error || !impactData) {
    return <div>Failed to load navbar.</div>;
  }

  return (
     <div className="bg-light"><div className="container">
      <div className="review-section row">
        <div className="col-sm-12 col-md-6">
          <h1 className="heading fw-semibold">{impactData.title}</h1>
          <p className="heading-text fw-normal">{impactData.description}</p>
        </div>

        <div className="col-md-6">
          <div className="row text-center">
            {impactData.stats.map((item, index) => (
              <div key={index} className="col-6 col-sm-6 col-md-6 mb-4">
                <div className="d-flex gap-2">
                  <img
                    src={`https://landing-2vb.pages.dev${item.logoUrl}`}
                    className="mb-1 img-fluid impact-image-design"
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
    </div></div>
    
  );
};

export default ImpactStauts;
