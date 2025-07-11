import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import {type AppDispatch, type RootState } from "../store/store";
import { Status } from "../globals/types";
import { featchcontentAsync } from "../store/contentSlice1";

// type constentType = {
//   imageUrl: string;
//   title: string;
//   description: string;
//   ctaUrl: string;
//   ctaText: string;
//   authorImageUrl: string;
//   authorName: string;
//   quote: string;
//   authorPosition: string;
//   clientIcons?: {
//     clientIcons: string | undefined;
//     icon: any;
//     index: string;
//   }[];
// };
interface IcardProps {
  type: string;
}

const ContentCard = ({  type }: IcardProps) => {
  const dispatch=useDispatch<AppDispatch>()
  const {data:Content,status}=useSelector(
    (state:RootState)=> state.customer
  );
  useEffect(()=>{
    if(status===Status.Loading){
      dispatch(featchcontentAsync());
    }
  },[dispatch,status]);
  if(status===Status.Loading){
return <div>Loading....</div>
  }
  if(status===Status.Error||!Content){
    return <div>Failed to load....</div>
  }

  console.log(Content)
  // const [data, setData] = useState<constentType | null>(null);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(apiUrl);
  //     if (response.data.status === "success") {
  //       setData(response.data.data);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, [apiUrl]);

  // if (!data) return <div>Loading...</div>;

  return (
    <div className="container">
      <div className="row mt-5 custom-css-for-row">
        {type !== "customer" && (
          <>
            <div className="col-md-4 col-xl-4 col-xxl-4 content-card-img-section">
              <img
                src={`https://landing-2vb.pages.dev${Content.imageUrl}`}
                alt={Content.title}
                className="img-fluid"
              />
            </div>
            <div className="col-lg-8 col-md-8 text-start pt-5 unlock">
              <h6 className="heading fw-bold ">{Content.title}</h6>
              <p className="contents">{Content.description}</p>
              <Link to={Content.ctaUrl} className="  mouse-cursor">
                <span className="button-text">{Content.ctaText}</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
