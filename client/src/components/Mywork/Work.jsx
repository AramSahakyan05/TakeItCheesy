import { useEffect, useState } from "react";
import { primeCompositeArray } from "./work";

import './Work.scss';

const Work = () => {
  const [firstVal, setFirstVal] = useState(0);
  const [secondVal, setSecondVal] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleFindButtonClick = () => {
    if (firstVal && secondVal) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <div className="work">
      <p>{`Given two natural numbers: a and b (a < b). Make an array which contains prime and composite numbers between a and b:`}</p>
      <br />
      <div className="work__numbers__answer">
        <div className="work__numbers">
          <div className="first__number">
            <label htmlFor="firstVal">Num: a</label>
            <input type="number" id="firstVal" onChange={(e) => { setFirstVal(+e.target.value); setClicked(false) }} />
          </div>
          <div className="second__number">
            <label htmlFor="secondVal">Num: b</label>
            <input type="number" id="secondVal" onChange={(e) => { setSecondVal(+e.target.value); setClicked(false)}} />
          </div>
        </div>
        <button className="find_button" onClick={handleFindButtonClick}>Find</button>
        <div className="work__answer">
          {clicked && primeCompositeArray(firstVal, secondVal).map(item => {
            return <span key={Math.random()} style={{color: (firstVal > secondVal) || (typeof(item) === 'string') ? "#be2004ea" : "", fontWeight: "bold"}}>{item}{typeof(item) === 'number' && ','}</span>;
          })}
        </div>
      </div>
    </div>
  );
}
export default Work;
