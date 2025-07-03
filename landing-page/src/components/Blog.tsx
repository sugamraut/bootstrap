import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState(null);

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
                <div className="image-wrapper">
                  <img
                    src={article.imageUrl}
                    alt={article.ctaUrl}
                    className="img-fluid"
                  />
                </div>
                <div className="content-box">
                  <div className="card-title">{article.title}</div>
                  <a href={article.ctaUrl} className="read-more">
                    {article.ctaText} →
                  </a>
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
