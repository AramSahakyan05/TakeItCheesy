import { useEffect, useState } from "react";

import Blog from "./blog/Blog";

import Pagination from "./blog/pagination/Pagination";

import axios from "axios";

import "./MainBlog.scss";

const MainBlog = () => {
  const [blogSidesPosts, setBlogSidesPosts] = useState([]);

  useEffect(() => {
      (async function getMenuList() {
        try {
          const resp = await axios.get('/blog-leftside');
          setBlogSidesPosts(resp.data.blog_sidebar);
        } catch (error) {
          throw new Error(error);
        }
      })();
  },[])

  return (
    <div className="main__blog">
      {blogSidesPosts.map(({ id, image, author, comments, title, comment_description}) => (
        <Blog
          key={id}
          img={image}
          desc={comment_description}
          title={title}
          author={author}
          comments={comments}
        />
      ))}
      <Pagination pages={blogSidesPosts}/>
    </div>
  );
};

export default MainBlog;
