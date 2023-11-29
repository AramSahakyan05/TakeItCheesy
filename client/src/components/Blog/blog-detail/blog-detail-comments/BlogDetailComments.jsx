import { useEffect, useState } from "react";

import axios from 'axios';

import { FaReply } from "react-icons/fa";

import "./BlogDetailComments.scss";

const BlogDetailComments = () => {
  // const data = useSelector((state) => state.blogDetail.blogDetail);
  const [blogDetailReviews, setBlogDetailReview] = useState([]);

  useEffect(() => {
    (async function getData() {
      try {
        const resp = await axios.get('/blog-detail');
        setBlogDetailReview(resp.data);
      } catch (error) {
        throw new Error(error);
      }
    })();
  })
  return (
      <div className="blog__detail__comments">
        <div className="blog__detail__comments__see">
          <h3>Comments</h3>
          {blogDetailReviews.map(({ id, commenter_image, commenter_name, commenter_review, reply_button }) => {
            return (
              <div className="blog__detail__comments__see__item" key={id}>
                <div className="blog__detail__comments__see__item__img">
                  <img src={commenter_image} alt="" />
                </div>
                <div className="blog__detail__comments__see__item__text">
                  <div>
                    <h3>{commenter_name}</h3>
                    <p>{commenter_review}</p>
                  </div>
                    <a href="#">
                      <FaReply />
                      {reply_button}
                    </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="blog__detail__comments__leave">
          <h2>LEAVE YOUR COMMENTS</h2>
          <form className="blog__detail__comments__leave__form">
            <div className="blog__detail__comments__leave__form__input">
              <input type="text" placeholder="Name" />
            </div>
            <div className="blog__detail__comments__leave__form__input">
              <input type="email" placeholder="Email" />
            </div>
            <div className="blog__detail__comments__leave__form__input">
              <input type="subject" placeholder="Subject" />
            </div>
            <div className="blog__detail__comments__leave__form__area">
              <textarea placeholder="Write Your Comment"></textarea>
            </div>
            <input
              type="submit"
              value="Post Comment"
              className="blog__detail__comments__leave__form__submit"
            />
          </form>
        </div>
      </div>
  );
};
export default BlogDetailComments;
