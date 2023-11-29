import { useEffect, useState } from "react";

import banner from "../../assets/banner/menu-banner-1.png";

import { CONFIG } from "../../config";

import PageBanner from "../UIContainer/page-banner/PageBanner";
import { Booking } from "../Home/home-section-booking/Booking";
import Container from "../UIContainer/container/Container";
import { BestChef } from "../Home/home-best-chef-slider/BestChef";

import "./Menu.scss";

import axios from "axios";


const Menu = () => {
  
  const [foodMenuList, setFoodMenuList] = useState([]);
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
        const resp = await axios.get('/menu');
        setFoodMenuList(resp.data.foodMenuData);
        // setDrinks(resp.data.food_menu_drinks);
        // setSalads(resp.data.food_menu_salads);
        // setPastas(resp.data.food_menu_pastas);
        // setBurgers(resp.data.food_menu_burgers);
        // setDesserts(resp.data.food_menu_desserts);
        // setPizzas(resp.data.food_menu_pizzas);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);
  console.log(foodMenuList);

  const [active, setActive] = useState(1);

  return (
    <>
      <PageBanner
        background={banner}
        title={"Food Menu"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Menu 1"}
      />
      <section className="foodMenu">
        <Container>
          <div className="foodMenu-nav">
            <div className="foodMenu-nav-buttons">
              {CONFIG.specialMenuConfig.map(({ id, title, type }) => {
                return (
                  <div
                    key={id}
                    onClick={() => {
                      if (active !== id) {
                        setActive(id);
                      }
                    }}
                    style={
                      active === id
                        ? {
                            backgroundColor: "#fd9d3e",
                            color: "white",
                          }
                        : {
                            backgroundColor: "transparent",
                            color: "black",
                          }
                    }
                  >
                    {title}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="foodMenu-list">
            {
            // (active === 1 ? foodMenuList
            // : active === 2 ? drinks
            // : active === 3 ? salads 
            // : active === 4 ? pastas 
            // : active === 5 ? burgers 
            // : active === 6 ? desserts : pizzas)
            foodMenuList.map(
              ({
                _id,
                name,
                image,
                first_ingredient,
                second_ingredient,
                third_ingredient,
                order_button
              }) => {
                return (
                  <div className="foodMenu-list-item" key={_id}>
                    <div className="foodMenu-list-item-img">
                      <img src={image} alt="Food Image" />
                    </div>
                    <div className="foodMenu-list-item-des">
                      <p>{name}</p>
                      <div>
                        <span>{first_ingredient}</span> / <span>{second_ingredient}</span>{" "}
                        / <span>{third_ingredient}</span>
                      </div>
                      <a href="">{order_button}</a>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </Container>
      </section>
      <BestChef />
      <Booking />
    </>
  );
};

export default Menu;
