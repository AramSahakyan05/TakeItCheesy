import { useNavigate } from "react-router-dom";

import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa'

import { CONFIG } from "../../config";

import Container from "../UIContainer/container/Container";

import "./Footer.scss";


const Footer = ({hide}) => {
  const navigate = useNavigate();
  return (
  <footer className="footer"  style={{display: hide ? "none" : "block"}}>
    <Container>
      <div className="footer__top">
        <div
          className="logo"
          onClick={() => {
            navigate('/home');
          }}
        >
          <h1>TAKE IT <span>CHEESY</span></h1>
        </div>
        {
          CONFIG.footerConfig.footer_top.map(({id, title}) => {
            return (
              <h2 key={id}>
                {title}
              </h2>
            )
          })
        }
      </div>
    <div className="footer__body">
      <div className="first__footer__list">
        <ul >
          {
            CONFIG.footerConfig.first_footer_list.map(({id, title}) => {
              return (
                <li key={id}>{title}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="second__footer__list">
      <ul>
        {
          CONFIG.footerConfig.second_footer_list.first_column.map(({id, title}) => {
            return (
              <li key={id} >{title}</li>
            )
          })
        }
      </ul>
      <ul>
      {
          CONFIG.footerConfig.second_footer_list.second_column.map(({id, title}) => {
            return (
              <li key={id} className={`${ id === 4 ? "closed" : id === 3 ? "everyday" : "" }`}>{title}</li>
            )
          })
        }
      </ul>
      </div>
        <div className="third__footer__list">
        <ul>
        {
          CONFIG.footerConfig.third_footer_list.map(({id, title}) =>{
            return(
              <li key={id}>{title}</li>
            )
          })
        }
      </ul>
        </div>

    </div>
    <div className="copy__text">
      <div>
        <p>
        © TakeItCheesy All Rights Reserved. Designed by 
        <a href="#">Aramayis Sahakyan</a>
        </p>
      </div>
      <div className="footer__icons">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaInstagram/></a>
      </div>
    </div>
    </Container>
  </footer>);

};

export default Footer;
