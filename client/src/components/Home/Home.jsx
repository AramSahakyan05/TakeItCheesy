import SpecialMenu from "./special-menu/SpecialMenu"
import { Booking } from "./home-section-booking/Booking";
import { LatestNews } from "./home-latest-news/LatestNews";
import HomeOrderSection from "./home-order-section/HomeOrderSection";
import HomeSlider from "./home-slider/HomeSlider";
import SpecialProducts from "./speciality/special-products/SpecialProducts";
import { BestChef } from "./home-best-chef-slider/BestChef";
import {CustomerReviews} from '../Home/home-reviews-slider/CustomerReviews';
import PizzonIntro from '../Home/pizzon-intro/PizzonIntro';

import "./Home.scss";


const Home = () => {
  return (
    <div className="home">
      <HomeSlider />
      <HomeOrderSection />
      <SpecialProducts />
      <SpecialMenu />
      <Booking/>
      <BestChef/>
      <LatestNews />
      <CustomerReviews/>
      <PizzonIntro />
    </div>
  );
};

export default Home;
