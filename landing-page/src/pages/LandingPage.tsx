import Nabar from "../components/Navbar";
import Slider from "../components/Slider";
import Client from "../components/Client";
import Features from "../components/Features";
import ContentCard from "../components/ContentCard";
import ImpactStauts from "../components/ImpactStatus";
import Blog from "../components/Blog";
import Frame from "../components/Frame";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <>
      <Nabar />

      <Slider />

      <Client />

      <div className="container text-center">
        <Features />
      </div>
      <div className="container">
        <ContentCard
          apiUrl={"https://landing-2vb.pages.dev/api/case-study.json"}
          type={"caseStudy"}
        />
      </div>
      <div className="bg-light">
        <ImpactStauts />
      </div>
      <div className="container">
        <ContentCard
          apiUrl={"https://landing-2vb.pages.dev/api/articlehighlight.json"}
          type={"article"}
        />
      </div>
      <div className="bg-light">
        <div className="container">
          <ContentCard
            apiUrl={"https://landing-2vb.pages.dev/api/customer.json"}
            type={"customer"}
          />
        </div>
      </div>
      <div className="container text-center">
        <Blog />
      </div>

      <div className="bg-light">
        <Frame />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
