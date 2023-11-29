import { useState } from 'react';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



const PizzaThumbnailsSlider = ({currentObject, setCurrentObject, thumbnailsData}) => {
    const {id} = useParams();
    const [active, setActive] = useState(+id);
    const handleImageClick = (id) => {
        setActive(id);
    }

  return (
    <div className="image-slider">
     <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
     >
        {
            thumbnailsData.map(({id, pizza_image, pizza_name, pizza_price, pizza_description}) => {
               return (
                <SwiperSlide 
                key={id} >
                    <img 
                    src={pizza_image} 
                    onClick={() => {
                        setActive(id)
                        setCurrentObject({
                            ...currentObject,
                            id,
                            pizza_image,
                            pizza_name,
                            pizza_price,
                            pizza_description
                        });
                    }}
                    style={{opacity: active === id ? "1" : "0.5"}}
                    /> 
                </SwiperSlide> 
               )
            })
        }
     </Swiper>
    </div>
  );
};

export default PizzaThumbnailsSlider;
