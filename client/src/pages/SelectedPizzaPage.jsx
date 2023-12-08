import { useParams } from "react-router-dom";

import SelectedPizza from "../components/Menu/selected-pizza/SelectedPizza";
import Layout from "../layout/Layout";

const SelectedPizzaPage = () => {
  const {pizzaName} = useParams();


  return (
    <Layout>
      <SelectedPizza pizzaName={pizzaName} />
    </Layout>
  );
};

export default SelectedPizzaPage;
