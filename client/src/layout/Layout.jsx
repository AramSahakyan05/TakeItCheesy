import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import FadeUp from "../components/FadeUp/FadeUp";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

import "./Layout.scss";


const Layout = ({ children }) => {
  const location = useLocation();
  console.log(location);
  const [hide, setHide] = useState(false);
  useEffect(() => {
    if(location.pathname === '/adds' || location.pathname === '/signup' || location.pathname === '/login') {
      setHide(true);
    }
  }, [location.pathname]);
  
  return (
    <>
      <Header hide={hide}/>
      <main>
        {children}
        <FadeUp />
      </main>
      <Footer hide={hide}/>
    </>
  );
};

export default Layout;
