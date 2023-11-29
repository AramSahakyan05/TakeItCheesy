import { Link } from "react-router-dom";

const Blog = ({ img, author, title, comments, desc }) => {
  const link = "/blog-detail";
  
  return (
    <div className="blog">
      <div className="blog__img">
        <Link to={link}>
          <img src={img} alt="blog" />
        </Link>
      </div>
      <div className="blog__content">
        <div className="blog__content__head">
          <span>by {author}</span>
          <span>{comments.length} Comments</span>
        </div>
        <div className="blog__content__body">
          <Link to={link}>
            <h1>{title}</h1>
          </Link>
          <p>{desc}</p>
        </div>
      </div>
      <Link to={link}>Read More</Link>
    </div>
  );
};

export default Blog;
