import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { ROUTER } from "./router";

import HomePage from "../pages/HomePage";
import SelectedPizzaPage from "../pages/SelectedPizzaPage";
import BlogLeftSidePage from "../pages/BlogLeftSidePage";
import BlogRightSidePage from "../pages/BlogRightSidePage";
import MenuPage from "../pages/MenuPage";
import BlogDetailPage from "../pages/BlogDetailPage";
import ReservationPage from "../pages/ReservationPage";
import AboutPage from "../pages/AboutPage";
import ErrorPage from "../pages/ErrorPage";
import CheckoutPage from "../pages/CheckoutPage";
import ShoppingCartPage from "../pages/ShoppingCartPage";
import SignUpPage from "../pages/SignUpPage";
import LoginPage from "../pages/LoginPage";
import { useEffect } from "react";

const AppRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if(location.pathname === "/") navigate('/signup')
  }, [])
  return (
    <Routes>
      <Route path={ROUTER.HOME_PAGE_ROUTE} element={<HomePage />} />
      <Route path={ROUTER.SINGLE_MENU_PAGE_ROUTE} element={<SelectedPizzaPage />} />
      <Route path={ROUTER.BLOG_LEFTSIDE_PAGE_ROUTE} element={<BlogLeftSidePage />} />
      <Route path={ROUTER.BLOG_RIGHTSIDE_PAGE_ROUTE} element={<BlogRightSidePage />} />
      <Route path={ROUTER.MENU_PAGE_ROUTE} element={<MenuPage />} />
      <Route path={ROUTER.BLOG_PAGE_ROUTE} element={<BlogDetailPage />} />
      <Route path={ROUTER.RESERVATION_PAGE_ROUTE} element={<ReservationPage />} />
      <Route path={ROUTER.ABOUT_PAGE_ROUTE} element={<AboutPage />} />
      <Route path={ROUTER.CHECKOUT_PAGE_ROUTE} element={<CheckoutPage />} />
      <Route path={ROUTER.SHOPPING_CART_ROUTE} element={<ShoppingCartPage />} />
      <Route path={ROUTER.SIGNUP_ROUTE} element={<SignUpPage />} />
      <Route path={ROUTER.LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={ROUTER.ERROR_PAGE_ROUTE} element={<ErrorPage/>} />
    </Routes>
  );
};

export default AppRoutes;
