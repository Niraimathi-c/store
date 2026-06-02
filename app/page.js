import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import TrendingProducts from "@/components/TrendingProducts";
import Offers from "@/components/Offers";
import Brands from "@/components/Brands";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <TrendingProducts />
      <Offers />
      <Brands />
      <About />
      <WhyChooseUs />
      <Contact />
      <Newsletter />
      <Footer />
    </>
  );
}