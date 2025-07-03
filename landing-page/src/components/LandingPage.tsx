import Nabar from "./Navbar";
import Slider from "./Slider";
import Client from "./Client";
import Features from "./Features";
import CaseStudy from "./CaseStudy";
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
        <CaseStudy />
      </div>
      <div className="bg-light">
        <ImpactStauts />
      </div>
      <div className="container text-center">
        <Blog />
      </div>
      <div className="bg-light">
        <Frame />
      </div>
    </>
  );
}

export default LandingPage;
