import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Portfolio from "../Portfolio";

//Texts object
import l from '../LenguageSwitcher/lenguage';

import marvel from '../../assets/imgs/marvel-catalog.png';
import aboutmyself from '../../assets/imgs/aboutme.png';


const JobsSlider = () => {
    const [selectedLenguage, setLenguage] = useState(0);

    useEffect(()=>{
      const localStorageVar = localStorage.getItem('lenguage_rt') ? localStorage.getItem('lenguage_rt') : 0;
      setLenguage(localStorageVar);
    },[])

    return (
      <div>
        <Slider 
          dots={true}
          infinite={true}
          autoplay={true}
          autoplaySpeed={3000}
          speed={500}
          slidesToShow={1}
          slidesToScroll={1}
          arrows={false}

          className="slide"
        >
          <Portfolio
              pimg={aboutmyself}
              ptitle={l[selectedLenguage].section6.portfolio3.title}
              ptext={l[selectedLenguage].section6.portfolio3.text}
              purl={l[selectedLenguage].section6.portfolio3.url}
              pbutton={l[selectedLenguage].section6.portfolio3.button}
              fotoOrder={l[selectedLenguage].section6.portfolio3.fotoOrder}
              textOrder={l[selectedLenguage].section6.portfolio3.textOrder}
            />
            <Portfolio
              pimg={marvel}
              ptitle={l[selectedLenguage].section6.portfolio2.title}
              ptext={l[selectedLenguage].section6.portfolio2.text}
              purl={l[selectedLenguage].section6.portfolio2.url}
              pbutton={l[selectedLenguage].section6.portfolio2.button}
              fotoOrder={l[selectedLenguage].section6.portfolio2.fotoOrder}
              textOrder={l[selectedLenguage].section6.portfolio2.textOrder}
            />
        </Slider>
      </div>
    );
}

export default JobsSlider;