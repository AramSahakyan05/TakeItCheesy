import { useState } from "react";

import { useLocation } from "react-router-dom";

import { AiOutlineUp } from "react-icons/ai";

import call from "../../../assets/home-booking/call.png";

import Container from "../../UIContainer/container/Container";

import "./Booking.scss";


export const Booking = ({scrolledBooking}) => {
  const location = useLocation();
  const [down, setDown] = useState(false);
  const persons = [
    { id: 1, title: "Person 5" },
    { id: 2, title: "Person 4" },
    { id: 3, title: "Person 3" },
  ];
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section className="booking">
      <Container>
        <div className="booking__container">
          <div 
          className={`booking__left__side ${scrolledBooking ? 'fadeInLeft' : ''}`}
          style={{opacity: location.pathname === '/about' ? '0' : '1'}}
          >
            <p>Fresh From Pizzon</p>
            <h1>BOOK ONLINE</h1>
            <span>
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris sed leo cursus
              aliquetcras suscipit. Sit amet, consectetur adipiscing elit
              quisque eget maximus velit, non eleifend libero curabitur
            </span>
            <div className="booking__left__side__contacts">
              <img src={call} alt="call" />
              <p>+ 91 123 456 789 0</p>
            </div>
          </div>
          <div 
          className={`booking__right__side ${scrolledBooking ? 'fadeInRight' : ''}`}
          style={{opacity: location.pathname === '/about' ? '0' : '1'}}
          >
            <h1>BOOK A TABLE</h1>
            <div className="booking__right__side__inputs">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <div
                className="booking__right__side__inputs__visible"
                style={{
                  border: down ? "1px solid orange" : "1px solid #999999",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setDown((prev) => !prev);
                }}
              >
                <p>{!selectedItem ? "How many persons?" : `${selectedItem}`}</p>
                <AiOutlineUp
                  style={{
                    animation: down
                      ? "rotate0 0.3s linear"
                      : "rotate180 0.3s linear",
                    transform: down ? "rotate(0deg)" : "rotate(180deg)",
                  }}
                />
              </div>
              <div
                className="booking__right__side__inputs__hidden"
                style={{
                  display: down ? "block" : "none",
                  animation: down
                    ? "show 0.5s ease-in-out"
                    : "hide 0.5s ease-in-out ",
                }}
              >
                {persons.map(({ id, title }) => {
                  return (
                    <div
                      className="booking__right__side__inputs__hidden__1"
                      key={id}
                      onClick={() => {
                        setSelectedItem(title);
                        setDown(() => {
                          setDown(!down);
                        });
                      }}
                    >
                      {title}
                    </div>
                  );
                })}
              </div>
              <input type="text" placeholder="Date" className="last__child" />
              <div className="button">
                <button>BOOK NOW</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
