import { useEffect, useState } from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { CONFIG } from "../../config";
import { ROUTER } from "../../router/router";

import Container from "../UIContainer/container/Container";
import Menu from "./menu/Menu";
import Blog from "./blog/Blog";
import Pages from "./pages/Pages";
import ShoppingCardDropdown from "./shopping-card-dropdown/ShoppingCardDropdown";

import './Header.scss';


const Header = () => {

  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
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
    <header className={scrolled ? "fixed" : ""}>
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
                  {/* {id === 7 ? <ShoppingCardDropdown /> : null} */}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
