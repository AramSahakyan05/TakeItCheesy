import background from "../../assets/blog-bars-images/blog-1.jpg";

import PageBanner from "../UIContainer/page-banner/PageBanner";
import BlogBarMainSection from "./blog-bar-main-section/BlogBarMainSection";

import "./BlogBarLayout.scss";


const BlogBarLayout = ({ side }) => {
  return (
    <div className="blog__bar__layout">
      <PageBanner
        background={background}
        title={"BLOG"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Blog Left Side Bar"}
      />
      <BlogBarMainSection side={side} />
    </div>
  );
};

export default BlogBarLayout;
