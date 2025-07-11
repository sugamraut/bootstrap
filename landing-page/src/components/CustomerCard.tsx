import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../store/store";

import { useEffect } from "react";
import { Status } from "../globals/types";
import { featchCustomerAsync } from "../store/contentSlice1";

function Customer() {
  const dispatch = useDispatch<AppDispatch>();
  const { customerdata: data, status } = useSelector(
    (state: RootState) => state.customer
  );
  useEffect(() => {
    if (status === Status.Loading) {
      dispatch(featchCustomerAsync());
    }
  }, [dispatch, status]);
  if (status === Status.Loading) {
    return <div>Loading...</div>;
  }
  if (status === Status.Error || !data) {
    return <div>Failed to load .</div>;
  }
  return (
    <div className="bg-light">
      <div className="container">
        <div className="row mt-5 custom-css-for-row">
          <div className="col-md-4 col-xl-4 col-xxl-4 customer-card ">
            <img
              src={`https://landing-2vb.pages.dev${data.authorImageUrl}`}
              alt={data.authorName}
              className="img-fluid"
            />
          </div>
          <div className="col-lg-8 col-md-8  text-start customer-card ">
            <blockquote>{data.quote}</blockquote>
            <p>
              <strong>{data.authorName}</strong>
              <br />
              {data.authorPosition}
            </p>

            <div className="d-flex flex-wrap mt-3 justify-content-between ">
              {data.clientIcons?.map((icon, index) => (
                <img
                  key={index}
                  src={`https://landing-2vb.pages.dev${icon}`}
                  alt={`client-logo-${index}`}
                  className="me-3 mb-2"
                  style={{ width: 50 }}
                />
              ))}
              <a href={data.ctaUrl} className="mouse-cursor link-design">
                <h6>
                  {data.ctaText} <FontAwesomeIcon icon={faArrowRightLong} />
                </h6>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
