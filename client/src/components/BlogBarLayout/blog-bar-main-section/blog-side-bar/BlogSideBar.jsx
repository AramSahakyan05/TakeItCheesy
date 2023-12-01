import { useEffect, useState } from "react";

import { BiSearch } from "react-icons/bi";

import { CONFIG } from "../../../../config";

import axios from "axios";

import RecentPost from "./recent-post/RecentPost";

import "./BlogSideBar.scss";

const BlogSideBar = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  useEffect(() => {
    (async function getData() {
      try {
        const resp = await axios.get('/blog-leftside');
        setRecentPosts(resp.data.recentPosts);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);
  const categories = CONFIG.blog_side_bar_categories;
  const tags = CONFIG.blog_side_bar_tags;

  return (
    <div className="blog__side__bar">
      <div className="blog__side__bar__search">
        <input type="text" placeholder="Search..." />
        <BiSearch />
      </div>
      <div className="blog__side__bar__categories">
        <h1>Categories</h1>
        <ul>
          {categories.map((title, i) => (
            <li key={i}>{title}</li>
          ))}
        </ul>
      </div>
      <div className="blog__side__bar__recent__posts">
        <h1>Recent Posts</h1>
        <div className="blog__side__bar__recent__posts__container">
          {recentPosts.map(({ _id, date, image, title }) => {
            return <RecentPost id={_id} date={date} image={require(`../../../../assets/blog-bars-images/${image}`)} title={title} key={_id}/>;
          })}
        </div>
      </div>
      <div className="blog__side__bar__tags">
        <h1>Tags</h1>
        <div className="blog__side__bar__tags__container">
          {tags.map((tag, i) => (
            <a href="#" key={i}>
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSideBar;
