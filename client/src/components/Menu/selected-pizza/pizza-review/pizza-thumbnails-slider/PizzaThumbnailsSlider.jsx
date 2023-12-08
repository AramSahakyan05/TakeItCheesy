import { useEffect} from 'react';

import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";



const PizzaThumbnailsSlider = ({currentObject, setCurrentObject, thumbnailsData, active, setActive}) => {
    
    const {pizzaName} = useParams();
    
    useEffect(() => {
        setActive(pizzaName)
    }, [pizzaName])

  return (
    <div className="image-slider">
     <Swiper
        modules={[Navigation]}
        slidesPerView={1}
        navigation
     >
        {
            thumbnailsData.map(({_id, name, image, price, description}) => {
               return (
                <SwiperSlide 
                key={_id} >
                    <img 
                    src={require(`../../../../../assets/header-images/menu-list-images/${image}`)} 
                    onClick={() => {
                        setActive(name)
                        setCurrentObject({
                            ...currentObject,
                            _id,
                            image,
                            name,
                            price,
                            description
                        });
                    }}
                    style={{opacity: active === name ? "1" : "0.5"}}
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
