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

      <Features />

      <ContentCard
        apiUrl={"https://landing-2vb.pages.dev/api/case-study.json"}
        type={"caseStudy"}
      />

      <ImpactStauts />

      <ContentCard
        apiUrl={"https://landing-2vb.pages.dev/api/articlehighlight.json"}
        type={"article"}
      />

      <div className="bg-light">
       
          <ContentCard
            apiUrl={"https://landing-2vb.pages.dev/api/customer.json"}
            type={"customer"}
          />
        
      </div>

      <Blog />

      <div className="bg-light">
        <Frame />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
