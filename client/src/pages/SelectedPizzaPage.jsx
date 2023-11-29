import { useParams } from "react-router-dom";

import SelectedPizza from "../components/Menu/selected-pizza/SelectedPizza";
import Layout from "../layout/Layout";

const SelectedPizzaPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <SelectedPizza id={id} />
    </Layout>
  );
};

export default SelectedPizzaPage;
