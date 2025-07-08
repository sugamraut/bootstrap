
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import { Status } from "../globals/types";
import { featchFarmeAsync } from "../store/frameSlice";

const Frame = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { data: farmeData, status } = useSelector(
    (state: RootState) => state.farme
  );
  useEffect(() => {
    if (status === Status.Loading) {
      dispatch(featchFarmeAsync());
    }
  }, [dispatch, status]);
  if (status === Status.Loading) {
    return <div>Loading navbar...</div>;
  }
  if (status === Status.Error || !farmeData) {
    return <div>Failed to load navbar.</div>;
  }

  return (
    <section className="container">
      <div className="text-center">
        <div className="text-center mt-5">
          <h6 className="section-text fw-semibold">{farmeData.title}</h6>
        </div>
        <button className="btn btn-success button-design mb-4">
          {farmeData.ctaText}
          <FontAwesomeIcon icon={faArrowRightLong} />
        </button>
      </div>
    </section>
  );
};
export default Frame;
