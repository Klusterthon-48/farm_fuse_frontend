import Navbar from "./components/Navbar";
import Hero from "./components/homepage_components/Hero";
import Features from "./components/homepage_components/Features";
import WhyChooseUs from "./components/homepage_components/WhyChooseUs";
import Prediction from "./components/homepage_components/Prediction";
import Update from "./components/homepage_components/Update";
import Footer from "./components/footer";

export default function Home() {
  const fullname = useSelector((state) => state.auth.name)
  const useremail = useSelector((state) => state.auth.email)
  const token = useSelector((state) => state.auth.token)


  console.log(`fullname is: ${fullname}, useremail is: ${useremail}, token is: ${token}`);
  return (
    <main className="bg-accent-1">
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
