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

  const PizzaReview = ({ pizzaName }) => {

  const [currentObject, setCurrentObject] = useState({});
  const [thumbnailsData, setThumbnailsData] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [descriptionReviewData, setDescriptionReviewData] = useState([]);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [showPreview, setShowPreview] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [active, setActive] = useState(pizzaName);
  const imageContainerRef = useRef(null);

  useEffect(() => {
    (async function getData() { 
      try {
        const resp = await axios.get(`/menu/${pizzaName}`);
        setCurrentObject(resp.data.selected_pizza);
        setThumbnailsData(resp.data.pizza_thumnails);
        setRelatedProducts(resp.data.related_products);
        setDescriptionReviewData(resp.data.pizza_review_data);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, [pizzaName]);
  
  const {image, description, price, last_price, currency} = currentObject;

  // const handleMouseMove = (e) => {
  //   const { top, left } = imageContainerRef.current.getBoundingClientRect();
  //   const x = e.clientX - left;
  //   const y = e.clientY - top;
  //   setHoverPosition({ x, y });
  //   setShowPreview(true);
  // };

  // const handleMouseLeave = () => {
  //   setShowPreview(false);
  // };

  ///////

  const handleMouseEnter = (e) => {
    setShowPreview(true);
    updatePosition(e);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  const handleMouseMove = (e) => {
    if (showPreview) {
      updatePosition(e);
    }
  };

  const updatePosition = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPosition({ x, y });
  };

  const magnifiedDivStyle = {
    display: showPreview ? "block" : "none",
    opacity: showPreview ? 1 : 0,
  };
//////
  return (
    <section>
      <Container>
        <section className="pizza-order">
          <div className="pizza">
            <div 
            className="main-image-square" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={imageContainerRef}
            onClick={() => {
              setActiveModal(true);
            }}
            >
              <div className="main-pizza">
                {image && <img src={require(`../../../../assets/header-images/menu-list-images/${image}`)} alt="Pizza Image" />}
              </div>
            </div>
            <PizzaThumbnailsSlider 
              currentObject={currentObject} 
              setCurrentObject={setCurrentObject} 
              thumbnailsData={thumbnailsData} 
              active={active} 
              setActive={setActive}
            />
          </div>
          <div className="pizza-order-list">
            <h1>{currentObject.name}</h1>
            {
              price && last_price && currency && 
               <p>
                <span>{last_price.$numberDecimal} {currency}</span>
                <span>{price.$numberDecimal}</span>
                <span>{currency}</span>
              </p>
            }
            <p>{description}</p>
            <PizzaReviewForm />
            <WishList />
          </div>
          <div className="preview-div" style={magnifiedDivStyle}>
            {
              image &&
                 <img 
                 src={require(`../../../../assets/header-images/menu-list-images/${image}`)}
                 style={{position: 'absolute', left: hoverPosition.x- 100, top: hoverPosition.y, scale: '1.4'}}
            />}
          </div>
        </section>
        <DescriptionReview descriptionReviewData={descriptionReviewData}/>
        <RelatedProducts relatedProducts={relatedProducts} setCurrentObject={setCurrentObject} setActive={setActive}/>
      </Container>
      <PizzaReviewModal thumbnailsData={thumbnailsData} activeModal={activeModal} setActiveModal={setActiveModal}/>
    </section>
  );
};

export default PizzaReview;
