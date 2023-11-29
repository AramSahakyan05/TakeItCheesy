import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import { CONFIG } from "../../../config";

import Container from "../../UIContainer/container/Container";

import './Menu.scss';

const Menu = ({ path }) => {
  const [headerMenuList, setHeaderMenuList] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    (async function getData() {
      try {
        const resp = await axios.get('/home');
        setHeaderMenuList(resp.data.pizzaData);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);
  console.log(headerMenuList);

  const navigate = useNavigate();
  return (
    <div className="menu__dropdown">
      <Container>
        <div className="pizzas">
          {
            headerMenuList.map(({ _id, image, name, price, currency }, i) => {
              const {$numberDecimal} = price
              return (
                <div
                  key={_id}
                  onClick={() => {
                    navigate(`/menu/${i + 1}`);
                  }}
                >
                  <div className="pizza__image">
                    <img src={`/public/${image}`} alt="Pizza Image" />
                  </div>
                  <div className="about__pizza">
                    <p>{name}</p>
                    <p className="pizza__price">
                      {$numberDecimal}  
                      <span> {currency}</span> 
                    </p>
                  </div>
                </div>
              );
            })
          }
         {!headerMenuList && <h1>Loading...</h1>}
        </div>
        <div className="menu__list">
          <ul>
            {CONFIG.menuConfig.menuListConfig.map(({ id, title }) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    if (id < 3) navigate(path);
                  }}
                >
                  {title}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Menu;