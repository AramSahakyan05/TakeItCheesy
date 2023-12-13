import { useNavigate } from "react-router-dom";

import { CONFIG } from "../../../config";

import './Pages.scss';

const Pages = () => {
  const navigate = useNavigate();
  return (
    <div className="pages__dropdown row">
      <ul>
        {CONFIG.pagesListConfig.map(({ id, title }) => {
          return (
            <li
              key={id}
              onClick={() => {
                if (id === 1) navigate("/about");
                if(id === 2) navigate('/mywork')
              }}
            >
              {title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Pages;
