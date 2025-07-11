import Nabar from "../components/Navbar";
import Slider from "../components/Slider";
import Client from "../components/Client";
import Features from "../components/Features";
import ContentCard from "../components/ContentCard";
import ImpactStauts from "../components/ImpactStatus";
import Blog from "../components/Blog";
import Frame from "../components/Frame";
import Footer from "../components/Footer";
import Customer from "../components/CustomerCard";

function LandingPage() {
  return (
    <>
      <Nabar />

      <Slider />

      <Client />

      <Features />

      <ContentCard type="case-study" />

      <ImpactStauts />

      <ContentCard type="article" />

      <Customer />

      <Blog />

      <Frame />
      
      <Footer />
    </>
  );
}

export default LandingPage;
