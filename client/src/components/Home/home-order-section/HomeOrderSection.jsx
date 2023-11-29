import { CONFIG } from "../../../config";

import top from "../../../assets/Images/home-slider-images/order-top.png";
import bottom from '../../../assets/pattern/order-bottom.png';

import Container from "../../UIContainer/container/Container";
import OrderItem from "./order-item/OrderItem";

import "./HomeOrderSection.scss";


const HomeOrderSection = () => {
  const { home_order_info } = CONFIG;
  return (
    <section className="home-order-section">
      <div className="home-order-section-top-img top-bottom-imgs">
        <img src={top} alt="img" className="home-order-section-top" />
      </div>
      <Container>
        <div className="home-order-section-items">
          {home_order_info.map(({ id, title, content, img }) => {
            return (
              <OrderItem key={id} title={title} content={content} img={img} />
            );
          })}
        </div>
      </Container>
      <div className="home-order-section-bottom-img top-bottom-imgs">
        <img src={bottom} alt="img" className="home-order-section-bottom" />
      </div>
    </section>
  )
}

export default HomeOrderSection;
