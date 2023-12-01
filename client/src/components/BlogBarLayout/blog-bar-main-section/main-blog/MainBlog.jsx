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
          setBlogSidesPosts(resp.data.blogSidePostsData);
        } catch (error) {
          throw new Error(error);
        }
      })();
  },[])

  return (
    <div className="main__blog">
      {blogSidesPosts.map(({ _id, image, author, comments, title, description}) => (
        <Blog
          key={_id}
          img={require(`../../../../assets/blog-bars-images/${image}`)}
          desc={description}
          title={title}
          author={author}
          comments={comments}
        />
      ))}
      {/* <Pagination pages={blogSidesPosts}/> */}
    </div>
  );
};

export default MainBlog;
