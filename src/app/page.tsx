import AboutUs from "./components/AboutUs";
import StatsSection from "./components/Client";
import FoodCategory from "./components/FoodCategory";
import MenuSection from "./components/OurMenu";
import WhyChooseUs from "./components/WhyChoose";
import MeetOurChefs from "./components/ChefCards";
import Testimonials from "./components/Testimonial";
import RestaurantProcess from "./components/Resturent";
import BlogSection from "./components/Blog";
import { HeroSection } from "./components/Hero";





export default function Home() {
  return (
   <>
   
   <HeroSection />
   <AboutUs />
   <FoodCategory />
   <WhyChooseUs />
   <StatsSection />
   <MenuSection />
   <MeetOurChefs />
   <Testimonials />
   <RestaurantProcess />
   <BlogSection />
   
   </>
  );
}
