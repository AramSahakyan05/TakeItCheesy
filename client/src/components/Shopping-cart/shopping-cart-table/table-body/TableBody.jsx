import { useDispatch, useSelector } from "react-redux";
import { deletePizzaFromCart } from "../../../../redux/slices/pizzaReviewSlice";
import SelectBox from "./select-box/SelectBox";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ROUTER } from "../../../../router/router";

const TableBody = () => {
  const dispatch = useDispatch();
  const tableData = useSelector((state) => state.pizzaReview.pizza_in_basket);

  return (
    <tbody>
      {tableData.map(({ id, img, name, price, qty, total }) => {
        return (
          <tr key={id}>
            <td>
              <Link to={`${ROUTER.MENU_PAGE_ROUTE}/${id}`}>
                <img src={img} alt="pizza" />
              </Link>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
              <SelectBox qty={qty} id={id} />
            </td>
            <td>{total ? total : price}</td>
            <td>
              <FaTrashAlt
                onClick={() => {
                  dispatch(deletePizzaFromCart({ id }));
                }}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
