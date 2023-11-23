import Navbar from "./components/Navbar";
import Hero from "./components/homepage_components/Hero";
import Features from "./components/homepage_components/Features";
import WhyChooseUs from "./components/homepage_components/WhyChooseUs";
import Prediction from "./components/homepage_components/Prediction";
import Update from "./components/homepage_components/Update";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="bg-accent-1 overflow-hidden w-screen">
      <Navbar />
      <Hero />
      <Features />
      <WhyChooseUs />
      <Prediction />
      <Update />
      <Footer />
    </main>
  );
}
