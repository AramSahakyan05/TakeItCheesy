import { useState, useEffect } from "react";

import {FaAngleUp} from "react-icons/fa6";

import './FadeUp.scss';

const FadeUp = () => {
  const [scrolled, setScrolled] = useState(false);

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
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    scrollToTop();
  }
  const fadeUpDivStyle = {
    visibility: scrolled ? 'visible' : 'hidden',
    opacity: scrolled ? '1' : '0'
  };

  return (
    <div className='fade__up' style={fadeUpDivStyle} onClick={handleButtonClick}>
        <a href='#top'>
          <FaAngleUp />
        </a >
    </div>
  )
}

export default FadeUp
