import bannerBackground from "../../../assets/banner/banner-background.jpg";
import PageBanner from "../../UIContainer/page-banner/PageBanner";
import PizzaReview from "./pizza-review/PizzaReview";

const SelectedPizza = ({ pizzaName }) => {
  return (
    <div>
      <PageBanner
        background={bannerBackground}
        title={"Chicken Breast"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Order Online"}
        thirdDirectionPoint={"Chicken Bresast"}
      />
      <PizzaReview pizzaName={pizzaName} />
    </div>
  );
};

export default SelectedPizza;
