import React from "react";

import { useSelector } from "react-redux";

import checkoutBanner from "./../../assets/banner/checkout-banner.jpg";

import PageBanner from "../UIContainer/page-banner/PageBanner";
import Container from "../UIContainer/container/Container";

import "./Checkout.scss";


const Checkout = () => {
  const data = useSelector((state) => state.pizzaReview.pizza_in_basket);
  console.log(data);
  return (
    <div>
      <PageBanner
        background={checkoutBanner}
        title={"CHECKOUT"}
        firstDirectionPoint={"Home"}
        secondDirectionPoint={"Cart"}
        thirdDirectionPoint={"Checkout"}
      />
      <section id="checkout">
        <Container>
          <div className="checkout">
            <div className="checkout__billing__details">
              <h3 className="checkout_header">BILLING DETAILS</h3>
              <form>
                <label className="checkout_label">Full name*</label> <br />
                <input type="text" className="checkout_inputs" /> <br />
                <label className="checkout_label">Company name</label> <br />
                <input type="text" className="checkout_inputs" /> <br />
                <label className="checkout_label">Email</label> <br />
                <input type="Email" className="checkout_inputs" /> <br />
                <label className="checkout_label">Phone No*</label> <br />
                <input type="phone" className="checkout_inputs" /> <br />
                <label className="checkout_label">Country</label> <br />
                <input type="text" className="checkout_inputs" /> <br />
                <label className="checkout_label">Address</label> <br />
                <input type="address" className="checkout_inputs" />
                <br />
              </form>
              {/* Post information */}
              <form className="checkout__post__info">
                <div style={{ width: "50%" }}>
                  <label className="checkout_label">Pastcode / Zip*</label>
                  <input type="text" className="checkout_inputs" />
                </div>
                <div style={{ width: "50%" }}>
                  <label className="checkout_label">Town / City*</label>
                  <input type="text" className="checkout_inputs" />
                </div>
              </form>
              <form className="checkout__checkbox">
                <input
                  type="checkbox"
                  style={{ height: "16px", width: "16px" }}
                  id="signup"
                />
                <label htmlFor="signup">Create an Account?</label>
              </form>
              <div className="checkout__shopping__details">
                <h3
                  style={{
                    marginBottom: "20px",
                    fontSize: "22px",
                    color: "black",
                  }}
                >
                  SHIPPING DETAILS
                </h3>
                <form className="checkout__checkbox">
                  <input
                    type="checkbox"
                    style={{ height: "16px", width: "16px" }}
                    id="shipment"
                  />
                  <label htmlFor="shipment">Ship to a different address?</label>
                </form>
                <span style={{ fontSize: "17px", color: "black" }}>
                  Order Notes
                </span>
                <div className="checkout__notes ">
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                  </p>
                </div>
              </div>
            </div>
            <div className="checkout__your__order">
              <h3
                style={{
                  color: "black",
                  fontSize: "22px",
                }}
              >
                YOUR ORDER
              </h3>
              {data.map(({ id, img, name, price, qty }) => {
                return (
                  <div className="checkout__your__order__list" key={id}> 
                    <div className="checkout__your__order__list__image">
                      <img src={img} alt="" />
                    </div>
                    <div>
                      <h4
                        style={{ fontWeight: "600" }}
                        className="checkout_your_order_list_name"
                      >
                        {name}
                      </h4>
                      <p
                        style={{
                          color: "orange",
                          fontWeight: "600",
                          fontSize: "18px",
                          marginBottom: "7px",
                        }}
                      >
                        {price}
                      </p>
                      <span style={{ fontWeight: "500" }}>Qty: {qty}</span>
                    </div>
                  </div>
                );
              })}
              <table className="checkout__your__order__table">
                <tbody>
                  <tr>
                    <td style={{ color: "black", fontWeight: "600" }}>
                      Order Places :
                    </td>
                    <td style={{ color: "black" }}> 17 February 2020</td>
                  </tr>
                  <tr>
                    <td style={{ color: "black", fontWeight: "600" }}>
                      Total :
                    </td>
                    <td
                      style={{
                        color: "orange",
                        fontWeight: "900",
                        fontSize: "18px",
                      }}
                    >
                      $160.00
                    </td>
                  </tr>
                  <tr>
                    <td style={{ color: "black", fontWeight: "600" }}>
                      Payment :
                    </td>
                    <td style={{ color: "black" }}> USD</td>
                  </tr>
                  <tr>
                    <td style={{ color: "black", fontWeight: "600" }}>
                      Order No. :
                    </td>
                    <td style={{ color: "black" }}> #{Math.floor((Math.random() + 4) * 5)}</td>
                  </tr>
                </tbody>
              </table>
              <button className="checkout__your__order__placeButton">
                PLACE ORDER
              </button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Checkout;
