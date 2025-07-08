import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store/store";
import { Status } from "../globals/types";
import { fetchClientAsync } from "../store/clientSlice";

const Client = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: sectionData, status } = useSelector(
    (state: RootState) => state.client
  );
  useEffect(() => {
    if (status === Status.Loading) {
      dispatch(fetchClientAsync());
    }
  }, [dispatch, status]);

  if (status === Status.Loading) {
    return <div> Loading client......</div>;
  }
  if (status === Status.Error || !sectionData) {
    return <div>failed to navbar ......</div>;
  }

  return (
    <>
      <div className="text-center">
        <h6 className="heading">{sectionData.title}</h6>
        <p className="heading-text">{sectionData.description}</p>
      </div>
      <div className="image-container row mt-3">
        <div className="d-flex justify-content-between">
          {sectionData.clientLogos.map((logo, index) => {
            return (
              <img
                key={index}
                src={`https://landing-2vb.pages.dev${logo}`}
                alt={`client-logo-${index}`}
                className="m-2"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Client;
