import Nabar from "./Navbar";
import Slider from "./Slider";
import Client from "./Client";
import Features from "./Features";
import ContentCard from "./ContentCard";
import ImpactStauts from "./ImpactStatus";
import Blog from "./Blog";
import Frame from "./Frame";

function LandingPage() {
  return (
    <>
      <div className="bg-light py-2">
        <Nabar />
      </div>
      <div className="bg-light">
        <div className="container">
          <Slider />
        </div>
      </div>
      <div className="container mt-5">
        <Client />
      </div>
      <div className="container text-center">
        <Features />
      </div>
      <div className="container">
        <ContentCard apiUrl={"https://landing-2vb.pages.dev/api/case-study.json"} type={"caseStudy"} />
      </div>
      <div className="bg-light">
        <ImpactStauts />
      </div>
      <div className="container">
        <ContentCard apiUrl={"https://landing-2vb.pages.dev/api/articlehighlight.json"} type={"article"}/>
      </div>
      <div className="container text-center">
        <Blog />
      </div>
      <div className="bg-light">
        <div className="container">
          <ContentCard apiUrl={"https://landing-2vb.pages.dev/api/customer.json"} type={"customer"}/>

        </div>

      </div>
      <div className="bg-light">
        <Frame />
      </div>
    </>
  );
}

export default LandingPage;
