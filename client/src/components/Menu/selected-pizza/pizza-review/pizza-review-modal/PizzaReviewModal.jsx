import {GrClose} from "react-icons/gr";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PizzaReviewModal = ({activeModal, setActiveModal, thumbnailsData}) => {
  return (
    <div className='pizza-preview-modal' style={{display: activeModal ? "block" : "none", opacity: activeModal ? "1" : "0"}}>
        <div 
        className='close-modal'
        onClick={() => {
            setActiveModal(false);
        }}
        >
            <GrClose />
        </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
        >
        {
            thumbnailsData.map(({image}) => {
                return (
                <SwiperSlide key={Math.random()} >
                    <img src={require(`../../../../../assets/header-images/menu-list-images/${image}`)}/> 
                </SwiperSlide> 
                )
            })
        }
        </Swiper>
    </div>
  )
}

export default PizzaReviewModal
