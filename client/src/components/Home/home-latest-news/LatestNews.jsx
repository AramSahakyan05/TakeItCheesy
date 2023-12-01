import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";

import topImg from "../../../assets/pattern/chef-top-bg.png";
import bottomImg from "../../../assets/pattern/chef-bottom-bg.png";

import Container from "../../UIContainer/container/Container";

import "./LatestNews.scss";
import { useEffect, useState } from "react";
import axios from "axios";


export const LatestNews = () => {
  const [latestNewsData, setLatestNewsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    (async function getData() {
      try {
        const resp = await axios.get('/home');
        setLatestNewsData(resp.data.latestNewsData)
      } catch (error) {
        throw new Error(error);
      }
    })()
  },[]);


  return (
    <section className="news">
      <Container>
        <div className="news__top__img top__bottom__imgs">
          <img src={topImg} alt="menu__top" />
        </div>
        <div className="news__title">
          <p>Recent Events</p>
          <h1>LATEST NEWS</h1>
        </div>
        <div className="news__info">
          {latestNewsData.map(
            ({ _id, image, date, by, comments, title, read_more_button }) => {
              return (
                <div
                  className="news__info__details"
                  key={_id}
                  onClick={() => {
                    navigate("/blog-details");
                  }}
                >
                  <div className="news__info__details__img">
                    <img src={require(`../../../assets/home-latestNews/${image}`)} />
                    <div className="news__info__details__img__date">
                      <span>
                        {date}
                      </span>
                    </div>
                  </div>
                  <div style={{marginTop: '20px'}}>
                    <div className="news__info__details__author">
                      <p>{by}</p>
                      <p>{comments.length + " Comments"}</p>
                    </div>
                    <a href="/blog__detail" className="news__info__details__title">
                      {title}
                    </a>
                    <Link to={"/blog-detail"} className="news__info__details__more">
                      {read_more_button}
                    </Link>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </Container>
    </section>
  );
};
