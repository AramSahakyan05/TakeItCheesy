
const DescriptionReviewForm = () => {
  return (
    <div className='description-review-form'>
    <h3>Leave A Comment</h3>
    <form className='main-form'>
        <input className="form-control" type="text" placeholder="Name" required/>
        <input className="form-control" type="text" placeholder="Subject" required/>
        <input className="form-control" type="email" placeholder="Email" required/>
        <textarea className="form-control" placeholder="Message" rows="8"></textarea>
        <button className="post-comm">POST COMMENT</button>
    </form>
    </div>
  )
}

export default DescriptionReviewForm
