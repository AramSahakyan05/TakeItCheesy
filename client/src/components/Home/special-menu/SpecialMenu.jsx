import { useEffect, useState } from "react";

import { CONFIG } from "../../../config";

import top from '../../../assets/pattern/menu-top-bg.png';
import bottom from '../../../assets/pattern/menu-bottom-bg.png';

import Container from "../../UIContainer/container/Container";

import axios from "axios";

import "./SpecialMenu.scss";

const SpecialMenu = () => {
  const [active, setActive] = useState(1);
  const [specialMenuList, setSpecialMenuList] = useState([]);
  // const [drinks, setDrinks] = useState([]);
  // const [salads, setSalads] = useState([]);
  // const [pastas, setPastas] = useState([]);
  // const [burgers, setBurgers] = useState([]);
  // const [desserts, setDesserts] = useState([]);
  // const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Fetch data from your API
    (async function getMenuList() {
      try {
        const resp = await axios.get('/home');
        console.log(resp.data);
        setSpecialMenuList(resp.data.specialMenuData);
        // setDrinks(resp.data.drinks);
        // setSalads(resp.data.salads);
        // setPastas(resp.data.pastas);
        // setBurgers(resp.data.burgers);
        // setDesserts(resp.data.desserts);
        // setPizzas(resp.data.pizzas);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);

  return (
    <section className="special-menu">
      <div className="menu-top-picture">
       <img src={top}/>
      </div>
      <Container>
        <div className="special-menu-title">
          <p>Fresh From Pizzon</p>
          <h2>OUR SPECIAL MENU</h2>
          <ul className="special-menu-title-nav">
            {CONFIG.specialMenuConfig.map(({ id, title }) => {
              return (
                <li
                  key={id}
                  onClick={() => {
                    if (id !== active) {
                      setActive(id);
                    }
                  }}
                >
                  <a
                    style={{
                      backgroundColor: active === id ? "orange" : "transparent",
                    }}
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="special-menu-items">
          {
          // (active === 1 ? specialMenuList
          //   : active === 2 ? drinks
          //   : active === 3 ? salads 
          //   : active === 4 ? pastas 
          //   : active === 5 ? burgers 
          //   : active === 6 ? desserts 
          //   : pizzas)
            specialMenuList.map(({ _id, image, name, price, description, currency}) => {
              const {$numberDecimal} = price;
            return (
              <div className="special-menu-items-item" key={_id}>
                <div className="special-menu-items-item-img">
                  <a href="">
                    <img src={image} alt="Food Image" />
                  </a>
                </div>
                <a>{name}</a>
                <p>{description}</p>
                <p>{$numberDecimal} <span>{currency}</span> </p>
              </div>
            );
          })}
          {specialMenuList.length === 0 && <h2>There is Nothing</h2>}
        </div>
      </Container>
      <div className="menu-bottom-picture">
        <img src={bottom}/>
      </div>
    </section>
  );
};

export default SpecialMenu;
