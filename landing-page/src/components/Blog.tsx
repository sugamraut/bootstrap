import axios from "axios";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import {baseUrl} from "../config"
const Blog = () => {
  type Blog = {
    title:string;
    description:string;
    articles:{
      ctaText: string;
      title: string;
      ctaUrl: string | undefined;
      imageUrl: string | undefined;
      article:string;
      index:number;
    }[];



  };
  const [blogs, setBlogs] = useState<Blog | null>(null);

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(
        "https://landing-2vb.pages.dev/api/blog.json"
      );
      console.log(response.data.message);
      if (response.data.status === "success") {
        setBlogs(response.data.data);
      }
    } catch (error) {
      console.log("fetching data error from blog", error);
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  if (!blogs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mt-5 text-center">
        <h6 className="heading fw-semibold">{blogs.title}</h6>
        <p className="fs-normal heading-text">{blogs.description}</p>

        <div className="row text-center">
          {blogs.articles.map((article, index) => (
            <div className="col-4" key={index}>
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
};

export default Blog;
