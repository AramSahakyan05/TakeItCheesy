import { useSelector } from "react-redux";

const Taxes = () => {
  const tableData = useSelector((state) => state.pizzaReview.pizza_in_basket);

  return (
    <div className="shopping-cart-cont-taxes">
      <div className="shopping-cart-cont-taxes-selects">
        <select className="country" defaultValue={"1"}>
          <option value="1">Select Country</option>
          <option value="2">India</option>
          <option value="3">China</option>
          <option value="4">Pakistan</option>
        </select>
        <div className="select-province-city">
          <select className="province" defaultValue={"1"}>
            <option value="1">Select State/Province</option>
            <option value="2">---</option>
          </select>
          <select className="city" defaultValue={"1"}>
            <option value="1">Select City</option>
            <option value="2">---</option>
          </select>
        </div>
      </div>
      <div className="shopping-cart-cont-taxes-cart">
        <ul>
          <li className="ul-title">Cart Total</li>
          <li>
            <div className="li-element">
              <span>Item(s) Subtotal</span>
              <span className="price">{`$${getTotal(tableData)}.00`}</span>
            </div>
          </li>
          <li>
            <div className="li-element">
              <span>Shipping</span>
              <span className="price">$0.00</span>
            </div>
          </li>
          <li>
            <div className="li-element">
              <span>Amount Payable</span>
              <span className="price">{`$${getTotal(tableData)}.00`}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function getTotal(array) {
  if (array.lenght !== 0) {
    const total = array.reduce((aggr, current) => {
      if (!current.total) {
        return +current?.price?.slice(1) + aggr;
      }
      return +current?.total?.slice(1) + aggr;
    }, 0);
    return Math.floor(total);
  }
  return 0;
}

export default Taxes