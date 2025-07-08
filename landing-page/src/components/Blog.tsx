
import { useEffect,  } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import type { RootState, AppDispatch } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { Status } from "../globals/types";
import { featchBlogAsync } from "../store/blogSlice";


const Blog = () => {

   const dispatch = useDispatch<AppDispatch>();
     const { data:blog, status } = useSelector(
    (state: RootState) => state.blogs
  );
  useEffect(() => {
      if (status === Status.Loading) {
        dispatch(featchBlogAsync());
      }
    }, [dispatch, status]);
  if (status===Status.Loading){
     return <div>Loading navbar...</div>;
  }
  if (status === Status.Error || !blog) {
    return <div>Failed to load navbar.</div>;
  }

  return (
    <div>
      <div className="mt-5 text-center">
        <h6 className="heading fw-semibold">{blog.title}</h6>
        <p className="fs-normal heading-text">{blog.description}</p>

        <div className="row text-center">
          {blog.articles.map((article, index) => (
            <div className="col-md-4 col-xl-4 col-xxl-4" key={index}>
              <div className="card card-custom">
                <div className="image-wrapper blog-image-wrapper">
                  <img
                  src={`https://landing-2vb.pages.dev${article.imageUrl}`}
                    // src={article.imageUrl}
                    alt={article.ctaUrl}
                    className="img-fluid blog-image"
                  />
                </div>
                <div className="content-box">
                  <div className="card-title">{article.title}</div>

                  <Link to="article.ctaUrl" className="read-more">
                    {article.ctaText}
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
