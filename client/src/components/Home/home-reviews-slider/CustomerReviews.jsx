import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay, Pagination } from "swiper/modules";

import customer_top_picture from '../../../assets/pattern/small-pattern-top.png';
import customer_bottom_picture from '../../../assets/pattern/small-pattern-bottom.png'

import Container from "../../UIContainer/container/Container";
import { ReviewsSlide } from "./ReviewsSlide";

import "./CustomerReviews.scss";
import "swiper/css";


export const CustomerReviews = ({scrolledCustom, scrolledTitle, scrolledSlider}) => {
  const location = useLocation();
  const [customerReviewData, setCustomerReviewData] = useState([]);

  useEffect(() => {
    (async function getData() {
      try {
        const resp = await axios.get('/home');
        setCustomerReviewData(resp.data.customerReviewsData);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);
  return (
    <section className="customerReviews">
      <div className="customerReviews-top-picture">
        <img src={customer_top_picture} />
      </div>
      <Container>
        <div className="customerReviews-title">
          <p 
          className={`${scrolledCustom ? 'fadeUp' : ''}`}
          style={{opacity: location.pathname === '/about' ? '0' : '1'}}
          >What Say Our Clients</p>
          <h1 
          className={`${scrolledTitle ? 'fadeUp' : ''}`}
          style={{opacity: location.pathname === '/about' ? '0' : '1'}}
          >CUSTOMER REVIEWS</h1>
        </div>
          <div 
          className={`customerReviews-slider ${scrolledSlider ? 'fadeUp' : ''}`}
          style={{opacity: location.pathname === '/about' ? '0' : '1'}}
          >
            <Swiper
              modules={[Navigation, A11y, Autoplay, Pagination]}
              space={50}
              slidesPerView={1}
              grabCursor
              pagination={{ clickable: true }}
              allowTouchMove={true}
              loop={true}
              autoplay={{
                delay: 3000,
              }}
            >
            {customerReviewData.map(({ _id, image, name, speciality, text}) => {
              return (
                <SwiperSlide key={_id}>
                  <ReviewsSlide
                    id={_id}
                    img={require(`../../../assets/reviews/${image}`)}
                    name={name}
                    speciality={speciality}
                    text={text}
                  ></ReviewsSlide>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </Container>
      <div className="customerReviews-bottom-picture">
        <img src={customer_bottom_picture} />
      </div>
    </section>
  );
};
