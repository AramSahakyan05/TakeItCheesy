import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Container from "../../../UIContainer/container/Container";

import axios from 'axios';

import "./../../Home.scss";
import "./SpecialProducts.scss";

const SpecialProducts = () => {
  const [ourSpectalityData, setOurSpecialityData] = useState([]);
  useEffect(() => {
    (async function getData() {
      try {
        const resp = await axios.get('/home');
        setOurSpecialityData(resp.data.specialityData);
      } catch (error) {
        throw new Error(error);
      }
    })();
  }, []);
  const navigate = useNavigate();
  return (
    <section className="special__products">
      <Container>
        <div className="products">
          <h4 className="products-header">Fresh From Pizzon</h4>
          <h2
            style={{
              fontSize: "60px",
              fontFamily: "PT Sans Narrow, sans-serif",
              letterSpacing: "2px",
            }}
          >
            OUR SPECIALITY
          </h2>
          <div className="products-items">
            {ourSpectalityData.map(({ _id, image, type }) => {
              return (
                <div className="pruducts-items-item" key={_id}>
                  {/* <img src={image} alt="Special Products" /> */}
                  <h4 style={{ marginTop: "30px" }}>{type}</h4>
                </div>
              );
            })}
          </div>
          <button className="products-button" onClick={() => navigate("/")}>
            VIEW MORE
          </button>
        </div>
      </Container>
    </section>
  );
};

export default SpecialProducts;
