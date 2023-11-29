import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { CONFIG } from "../../../config";

import Slide from "./slide/Slide";

import "./HomeSlider.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const HomeSlider = () => {
  const homeSliderData = CONFIG.home_slider_data;
  return (
    <section className="home-slider">
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        grabCursor
        autoplay={{
          delay: 5000,
        }}
      >
        {homeSliderData.map(({ id, title, main_image, desc, icons }) => {
          return (
            <SwiperSlide key={id}>
              <Slide
                id={id}
                title={title}
                main_image={main_image}
                desc={desc}
                icons={icons}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default HomeSlider;
