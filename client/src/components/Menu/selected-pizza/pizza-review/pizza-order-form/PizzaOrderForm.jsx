import { useState } from "react";
import { CONFIG } from "../../../../../config"
import {PiHandbagSimpleFill} from "react-icons/pi";

const PizzaOrderForm = () => {
  const [activeCrust, setActiveCrust] = useState(null);
  const [activeCrustSize, setActiveCrustSize] = useState(null);
  const [isInputFocused, setInputFocused] = useState(false);
  const [value, setValue] = useState(1);

  const changeActiveCrust = (id) => {
    setActiveCrust(id);
  }

  const changeActiveCrustSize = (id) => {
    setActiveCrustSize(id);
  }
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleInputBlur = () => {
    setInputFocused(false);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  }

  return (
    <div className="crusts">
      <h4>CHOOSE YOUR CRUSTS</h4>
        {
          CONFIG.singlePizzaOrderList.crusts.map(({id, crust}) => {
            return (
                  <a
                    key={id} 
                    style={{backgroundColor: activeCrust === id ? "var(--template-yellow)" : "transparent", color: activeCrust === id ? "var(--white)" : ""}}
                    onClick={() => changeActiveCrust(id)}
                  >{crust}</a>
            )
          })
        }
        <h4>SIZE OF CRUSTS</h4>
        {
          CONFIG.singlePizzaOrderList.crusts_size.map(({id, crust}) => {
            return (
                  <a
                    key={id} 
                    style={{backgroundColor: activeCrustSize === id ? "var(--template-yellow)" : "transparent", color: activeCrustSize === id ? "var(--white)" : ""}}
                    onClick={() => changeActiveCrustSize(id)}
                  >{crust}</a>
            )
          })
        }
        <div className="quantity-product">
          <h2>Qty:</h2>
          <input 
          type="number" 
          value={value}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={(e) => {
            handleInputChange(e);
          }}
          style={{
            border: isInputFocused ? '1px solid #000' : '1px solid #dcdcdc',
          }}
          />
          <button> 
            <PiHandbagSimpleFill /> <span>ADD TO CART</span>
          </button>
        </div>
    </div>
  )
}

export default PizzaOrderForm
