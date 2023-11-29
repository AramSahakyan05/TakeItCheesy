import React from "react";

export const ReviewsSlide = ({ id, text, name, speciality, img }) => {
  return (
    <div className="customerReviews-slider-item">
      <div className="customerReviews-slider-item-img">
        <img src={img} alt="" />
        <p>{name}</p>
      </div>
      <div className="customerReviews-slider-item-review">
    <span>{text}</span>
    <div className="customerReviews-slider-item-review-author">
    <p>{name}</p> <p>{speciality}</p>
    </div>
      </div>
    </div>
  )
};
