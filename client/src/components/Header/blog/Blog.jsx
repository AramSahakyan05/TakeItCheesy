import { Link } from "react-router-dom";

import { CONFIG } from "../../../config";

import { ROUTER } from "../../../router/router";

import './Blog.scss';

const Blog = () => {
  return (
    <div className="blog__dropdown row">
      <ul>
        {CONFIG.blogListConfig.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={ROUTER[extractLinkPath(title)]}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

function extractLinkPath(title) {
  let relPath = title.split(" ").join("-").toLowerCase();
  for (const key in ROUTER) {
    if(ROUTER[key].includes(relPath)){
      return key;
    }
  }
}

export default Blog;
