import { useEffect, useState } from "react";

// import {useCookies} from 'react-cookie';

import { Link, useNavigate } from "react-router-dom";

import { CONFIG } from "../../config";
import { ROUTER } from "../../router/router";

import axios from "axios";

import Container from "../UIContainer/container/Container";
import Menu from "./menu/Menu";
import Blog from "./blog/Blog";
import Pages from "./pages/Pages";

import './Header.scss';
// import ErrorPage from "../../pages/ErrorPage";

const Header = ({hide}) => {

  const [scrolled, setScrolled] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [cookies, setCookies, removeCookies] = useCookies(['connect.sid']);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      };
      // const isAuthenticated = async () => {
      //   try {
      //     const resp = await axios.get('/login');
      //     setIsLoggedIn(resp.data.loggedIn)
      //   } catch (error) {
      //     return <ErrorPage />
      //   }
      // }

    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const routes = [
    ROUTER.HOME_PAGE_ROUTE,
    ROUTER.MENU_PAGE_ROUTE,
    ROUTER.BLOG_LEFTSIDE_PAGE_ROUTE,
    ROUTER.RESERVATION_PAGE_ROUTE,
  ];

  return (
    <header className={scrolled ? "fixed" : ""} style={{display: hide ? "none" : "block"}}>
      <Container>
        <div className="row">
          <div
            className="logo"
            onClick={() => {
              navigate(routes[0]);
            }}
          >
            <h1>TAKE IT <span>CHEESY</span></h1>
          </div>
          <ul>
            {CONFIG.headerConfig.map(({ id, title, icon }, i) => {
              return (
                <li
                  key={i+1}
                  className={
                    id === 2
                      ? "menu__item"
                      : id === 3
                      ? "blog__item"
                      : id === 5
                      ? "page__item"
                      : id === 7
                      ? "shopping__cart__item"
                      : null
                  }
                  onClick={() => {
                    Logout(id)
                  }}
                  // style={{display: (i === 8) ? "block" : "none"}}
                >
                  {icon}
                  {icon}
                  {i < routes.length ? (
                    <Link to={routes[i]}>{title}</Link>
                  ) : (
                    title
                  )}
                  {id === 2 ? <Menu path={routes[1]} /> : null}
                  {id === 3 ? <Blog /> : null}
                  {id === 5 ? <Pages /> : null}
                </li>
              );
            })}
            {/* <li onClick={() => {
              (async function getData() {
                try {
                  const resp = await axios.get('/logout');
                  navigate(resp.data.route);
                  console.log(resp);
                } catch (error) {
                  throw new Error(error);
                }
              })()
            }}>Log Out</li> */}
          </ul>
        </div>
      </Container>
    </header>
  );
async function Logout(id) {
    if(id === 9) {
      try {
        const resp = await axios.get('/logout');
        navigate(resp.data.route);
      } catch (error) {
        throw new Error(error);
      }
    }
  }
};



export default Header;
