import Container from "../../UIContainer/container/Container";
import BlogSideBar from "./blog-side-bar/BlogSideBar";
import MainBlog from "./main-blog/MainBlog";

const BlogBarMainSection = ({side}) => {
  return (
    <Container>
      <div
        className="blog__bar__main__section"
        style={{ flexDirection: side === "right" ? "row" : "row-reverse" }}
      >
        <MainBlog />
        <BlogSideBar />
      </div>
    </Container>
  );
};

export default BlogBarMainSection;
