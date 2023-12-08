import DescriptionReviewForm from "../description-review-form/DescriptionReviewForm";

const DescriptionReviewBody = ({active, descriptionReviewData}) => {
  return (
    <div className='description-review-body'>
      <div className="description" style={{display: !active ? "block" : "none"}}>
        <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
        </p>
        <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
        </p>
      </div>
      <div className="review" style={{display: active ? "block" : "none"}}>
        <h3>
          {
            String(descriptionReviewData.length).padStart(1, 0)
          }
          <span>COMMENTS</span>
        </h3>
        {
          descriptionReviewData.map(({_id, image, name, review, reply_button, date}) => {
            return (
              <div key={_id} className='commenter'>
                <img src={require(`../../../../../../assets/reviews/${image}`)} alt="" />
                <div>
                  <span>{name}</span>
                  <span>{date}</span>
                  <p className='description'>{review}</p>
                </div>
                <a href="#" className='reply'>{reply_button}</a>
              </div>
            )
          })
        }
      <DescriptionReviewForm />
      </div>
    </div>
  )
}

export default DescriptionReviewBody
