import { useDispatch } from "react-redux";
import { countTotalOfEachPizza } from "../../../../../redux/slices/pizzaReviewSlice";

const SelectBox = ({ qty, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="quanity-box">
      <select
        name="quanity-box-selector"
        defaultValue={qty}
        onChange={(e) => {
          console.log(e.target.value, "of", id);
          dispatch(
            countTotalOfEachPizza({
              id,
              qty: e.target.value,
            })
          );
        }}
      >
        {[...Array(4)].map((item, i) => {
          return (
            <option value={i + 1} key={i}>
              {i + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectBox;
