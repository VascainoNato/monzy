import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutUs from "../../components/AboutUs";
import HomePage from "../../components/HomePage";
import Features from "../../components/Features";

export default function Home() {
  return (
    <>
      <div className="fade-slide-up">
        <Header/>
        <HomePage/>
        <AboutUs/>
        <Features/>
        <Footer/>
      </div>
    </>
  );
}
