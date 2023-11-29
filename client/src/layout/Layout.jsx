import { useLocation } from "react-router-dom";

import main_background from '../assets/home-bestChef/chef.png';

import FadeUp from "../components/FadeUp/FadeUp";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import "./Layout.scss";


const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <>
      <Header />
      <main>
        {children}
        <FadeUp />
      </main>
      <Footer />
    </>
  );
};

export default Layout;

// style={{backgroundImage: location.pathname === '/login' || '/signup' ? `url(${main_background})` : 'none'}}