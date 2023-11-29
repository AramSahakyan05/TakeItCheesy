import { useEffect, useRef, useState } from "react";

import axios from 'axios';

import Container from "../../../UIContainer/container/Container";
import PizzaReviewForm from "./pizza-order-form/PizzaOrderForm";
import WishList from "./wishlist/WishList";
import PizzaThumbnailsSlider from "./pizza-thumbnails-slider/PizzaThumbnailsSlider";
import DescriptionReview from "./description-review/DescriptionReview";
import RelatedProducts from "./related-products/RelatedProducts";
import PizzaReviewModal from "./pizza-review-modal/PizzaReviewModal";

import "./PizzaReview.scss";

  const PizzaReview = ({ id }) => {
//////
  const [currentObject, setCurrentObject] = useState({});
  const [thumbnailsData, setThumbnailsData] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [descriptionReviewData, setDescriptionReviewData] = useState([]);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [showPreview, setShowPreview] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const imageContainerRef = useRef(null);
//////
  const handleMouseMove = (e) => {
    const { top, left, width, height } = imageContainerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    setHoverPosition({ x, y });
    setShowPreview(true);
  };
///////
  const handleMouseLeave = () => {
    setShowPreview(false);
  };
///////
  const hoverDivStyle = {
    left: hoverPosition.x - 90,
    top: hoverPosition.y - 90,
    display: showPreview ? 'block' : 'none',
    transform: `translate(${hoverPosition.x * 300}px, ${hoverPosition.y * 300}px)`
  };

///////
  useEffect(() => {
    (async function getData() { 
      try {
        const resp = await axios.get(`/menu/${id}`);
        setCurrentObject(resp.data.selected_pizza);
        setThumbnailsData(resp.data.pizza_thumnails);
        setRelatedProducts(resp.data.related_products);
        setDescriptionReviewData(resp.data.pizza_reviews);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [id]);
//////
  const magnifiedDivStyle = {
    backgroundImage: `url(${currentObject.pizza_image})`,
    backgroundSize: '170% 130%',
    backgroundPosition: `${(hoverPosition.x * 100) - 30}% ${(hoverPosition.y * 100) - 30}%`,
    opacity: showPreview ? 1 : 0,
    display: showPreview ? "block" : "none",
  };
//////
  return (
    <section>
      <Container>
        <section className="pizza-order">
          <div className="pizza">
            <div 
            className="main-image-square" 
            onMouseLeave={handleMouseLeave} 
            onMouseMove={handleMouseMove} 
            ref={imageContainerRef}
            onClick={() => {
              setActiveModal(true);
            }}
            >
              <div className="hover-square" style={hoverDivStyle}></div>
              <div className="main-pizza" style={{backgroundImage: `url(${currentObject.pizza_image})`,transition: 'all 600ms ease 0s'}}></div>
            </div>
            <PizzaThumbnailsSlider currentObject={currentObject}  setCurrentObject={setCurrentObject} thumbnailsData={thumbnailsData}/>
          </div>
          <div className="pizza-order-list">
            <h1>{currentObject.pizza_name}</h1>
            <p>
              <span>{currentObject.pizza_price}</span>
              <span>{currentObject.currency}</span>
            </p>
            <p>{currentObject.pizza_description}</p>
            <PizzaReviewForm />
            <WishList />
          </div>
          <div className="preview-div" style={magnifiedDivStyle}></div>
        </section>
        <DescriptionReview descriptionReviewData={descriptionReviewData}/>
        <RelatedProducts relatedProducts={relatedProducts} setCurrentObject={setCurrentObject}/>
      </Container>
      <PizzaReviewModal thumbnailsData={thumbnailsData} activeModal={activeModal} setActiveModal={setActiveModal}/>
    </section>
  );
};

export default PizzaReview;
