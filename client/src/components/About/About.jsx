import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { BiPlay } from "react-icons/bi";

import VideoPlayer from "./VideoPlayer"; 
import aboutImg from "../../assets/about/about-1.jpg";
import storyImg from "../../assets/about/story.png";
import videoImg from "../../assets/about/about-video-img.jpg";
import about_banner_picture from '../../assets/about/about_banner.jpg';

import PageBanner from '../UIContainer/page-banner/PageBanner';
import { CustomerReviews } from "../Home/home-reviews-slider/CustomerReviews";
import { Booking } from "../Home/home-section-booking/Booking";

import "./About.scss";
import Container from "../UIContainer/container/Container";


const About = () => {
    const location = useLocation();
    const [showVideo, setShowVideo] = useState(false);
    const [scrolledIntro, setScrolledIntro] = useState(false);
    const [scrolledStory, setScrolledStory] = useState(false);
    const [scrollVideo, setScrollVideo] = useState(false);
    const [scrolledCustom, setScrolledCustom] = useState(false);
    const [scrolledTitle, setScrolledTitle] = useState(false);
    const [scrolledSlider, setScrolledSlider] = useState(false);
    const [scrolledBooking, setScrolledBooking] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 0) {
            if(scrolledIntro === false) {
                setScrolledIntro(true);
            } else {
                return
            }
        }

        if(window.scrollY > 500) {
            if(scrolledStory === false) {
                setScrolledStory(true);
            } else {
                return
            }
        }
        if(window.scrollY > 1100) {
            if(scrollVideo === false) {
                setScrollVideo(true);
            } else {
                return
            }
        }
        if(window.scrollY > 1700) {
            if(scrolledCustom === false) {
                setScrolledCustom(true);
            } else {
                return
            }
        }
        if(window.scrollY > 1800) {
            if(scrolledTitle === false) {
                setScrolledTitle(true);
            } else {
                return
            }
        }
        if(window.scrollY > 1900) {
            if(scrolledSlider === false) {
                setScrolledSlider(true);
            } else {
                return
            }
        }
        if(window.scrollY > 2250 && location.pathname === '/about') {
            if(scrolledBooking === false) {
                setScrolledBooking(true);
            } else {
                return
            }
        }
        console.log(scrolledIntro);
      }
      window.addEventListener("scroll", handleScroll);
      
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


  return (
    <section className="about__section">  
    <PageBanner 
        background={about_banner_picture}
        title='ABOUT US'
        firstDirectionPoint='Home'
        secondDirectionPoint='About Us'
      />
    <Container>
        <div 
        className="darken-page" 
        style={{display: showVideo?"block":"none"}}
        onClick={() => {
        setShowVideo(false)
        }}
        ></div>

          <div className="about">
            <div className='about__pizzon'>
                <div className='about__pizzon__img'>
                    <img src={aboutImg} alt="" />
                </div>
                <div className={`about__pizzon__text ${scrolledIntro ? 'fadeInRight' : ''}`}>
                    <span>Delicious Restaurant</span>
                    <h2>ABOUT PIZZON</h2>
                    <p>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.</p>
                </div>
            </div>
            <div className='story' >
                <span className={`${scrolledStory ? 'fadeUp' : ''}`}>Discover</span>
                <h2 className={`${scrolledStory ? 'fadeUp' : ''}`}>OUR STORY</h2>
                <div className={`${scrolledStory ? 'fadeUp' : ''}`}>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful</p>
                    <img src={storyImg} alt="" />
                </div>
            </div>
            <div className="experience">
                <div 
                className={`experience__image ${scrollVideo ? 'fadeInLeft' : ''}`}
                onClick={() => {
                    setShowVideo(true)
                }}
                >
                    <img src={videoImg} alt="" />
                    <div className="video__play">
                        <BiPlay className="vector_right"/>
                    </div>
                </div>
                <div className={`experience__text ${scrollVideo ? 'fadeInRight' : ''}`}>
                    <span>Modern Cuisine</span>
                    <h2>EXPERIENCE</h2>
                    <p>Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur Sit amet, consectetur adipiscing elit quisque eget maximus velit, non eleifend libero curabitur dapibus mauris sed leo cursus aliquetcras suscipit. Sit amet.</p>
                </div>
                {showVideo?(
                <div className="youtube__video__bg">
                    <VideoPlayer className="youtube-video"/>
                </div>
                ):""}
            </div>
          </div>
    </Container>
    <CustomerReviews scrolledCustom={scrolledCustom} scrolledTitle={scrolledTitle} scrolledSlider={scrolledSlider}/>
    <Booking scrolledBooking={scrolledBooking}/>
    </section>
  )
}

export default About