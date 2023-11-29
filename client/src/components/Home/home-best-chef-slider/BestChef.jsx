import React, { useEffect, useState } from "react";

import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper/modules";

import { BestChefSlide } from "./BestChefSlide";
import Container from "../../UIContainer/container/Container";

import top from '../../../assets/pattern/chef-top-bg.png';
import bottom from '../../../assets/pattern/chef-bottom-bg.png';

import "./BestChef.scss";
import "swiper/css";


export const BestChef = () => {
  const [bestChefsData, setBestChefsData] = useState([]);

  useEffect(() => {
    (async function getData() {
      try {
        const resp = await axios.get('/home');
        setBestChefsData(resp.data.bestChefData)
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);

  return (
    <section className="bestChef">
      <div className="bestChef__top__picture">
        <img src={top} alt="" />
      </div>
      <Container>
        <div className="bestChef__title">
          <p>Meet our experts</p>
          <span>OUR BEST CHEF</span>
        </div>
        <div className="bestChef__slider">
          <Swiper
            modules={[Navigation, A11y, Autoplay]}
            space={50}
            slidesPerView={4}
            navigation
            grabCursor
            loop={true}
            autoplay={{
              delay: 3000,
            }}
          >
            {bestChefsData.map(({ _id, image, name, speciality }, i) => {
              return (
                <SwiperSlide key={_id}>
                  <BestChefSlide
                    id={i+1}
                    // img={chef_image}
                    name={name}
                    speciality={speciality}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
      <div className="bestChef__bottom__picture">
        <img src={bottom} />
      </div>
    </section>
  );
};
