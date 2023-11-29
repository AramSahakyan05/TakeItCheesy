import { useState, useEffect } from 'react';

import about_pizzon from '../../../assets/home/about/about-pizzon.png';

import Container from '../../UIContainer/container/Container';


import './PizzonIntro.scss';
import { useNavigate } from 'react-router-dom';

const AboutPizzon = () => {
  const navigate = useNavigate();
    
    const [scrolledIntro, setScrolledIntro] = useState(false);
    useEffect(() => {
      // Function to handle the scroll event
      const handleScroll = () => {
        if(window.scrollY > 5700) {
          if(scrolledIntro === true) {
              return
          } else {
            setScrolledIntro(true);
          }
      }
      };
  
      // Add the scroll event listener when the component mounts
      window.addEventListener("scroll", handleScroll);
  
      // Remove the scroll event listener when the component unmounts
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    });

  return (
    <section className='pizzon-intro'>
      <Container>
        <div className={`pizzon-intro-top ${scrolledIntro ? 'fadeInLeft' : ''}`}>
            <h2>Deilicous Restaurant</h2>
            <h1>ABOUT PIZZON</h1>
            <p>Sit amet consectetur adipisicing elit. Deserunt, ducimus architecto. Laboriosam ipsam nam fugiat, qui debitis perferendis ex illo? Nesciunt aspernatur velit mollitia iste. Pariatur esse dolore beatae sequi.
            Quos facilis voluptatum molestias explicabo, reiciendis amet itaque accusamus et quidem reprehenderit, expedita quibusdam ut iusto mollitia consectetur nostrum totam quis facere repellat veniam atque? Quisquam cupiditate nulla explicabo id?</p>
            <a href="" onClick={() => navigate('/about')}>VIEW MORE</a>
        </div>
        <div className={`pizzon-intro-image ${scrolledIntro ? 'fadeInRight' : ''}`}>
            <img src={about_pizzon} alt="" />
        </div>
      </Container>
    </section>
  )
}

export default AboutPizzon
