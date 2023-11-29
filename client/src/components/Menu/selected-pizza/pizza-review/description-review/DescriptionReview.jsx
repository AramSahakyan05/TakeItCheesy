import { useState } from 'react';
import DescriptionReviewBody from './description-review-body/DescriptionReviewBody'
import "./DescriptionReview.scss";

const DescriptionReview = ({descriptionReviewData}) => {

  const [active, setActive] = useState(false);

  return (
    <section className='description-review'>
        <div className='description-review-header'>
          <p 
          onClick={() => {
            setActive(false)
          }}
          className={!active ? "active" : ""}
          >
            DESCRIPTION</p>
          <p 
          onClick={() => {
            setActive(true);
          }}
          className={active ? "active" : ""}
          >
            REVIEWS</p>
        </div>
        <DescriptionReviewBody active={active} descriptionReviewData={descriptionReviewData}/>
    </section>
  )
}

export default DescriptionReview
