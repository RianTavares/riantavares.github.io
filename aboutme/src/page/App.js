//react components
import React, { useState, useEffect } from "react";
import Media from 'react-media';
import { LazyLoadImage } from 'react-lazy-load-image-component';

//Project components
import BannerTop from '../components/Banner';
import Footer from '../components/Footer';
import Social from '../components/Social';
import Jobs from '../components/Jobs';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';

//Texts object
import l from '../components/LenguageSwitcher/lenguage';
import Menu from "../components/Menu";

import 'react-lazy-load-image-component/src/effects/blur.css';




function App() {

  const [selectedLenguage, setLenguage] = useState(0);

  useEffect(() => {
    const localStorageVar = localStorage.getItem('lenguage_rt') ? localStorage.getItem('lenguage_rt') : 0;
    setLenguage(localStorageVar);
  }, [])

  return (
    <div className="App">
      <section className="App__header">
        <Menu />
        <BannerTop />
      </section>
      <section className="page-content">

        <Media query="(min-width: 975px)">
          {matches =>
            matches ? (
              <section id="aboutme" className="section pattern-margin first">
                <div className="section__desk">
                  <div className="section__desk__img">
                    <LazyLoadImage effect="blur" src="https://raw.githubusercontent.com/RianTavares/riantavares.github.io/master/aboutme/src/assets/imgs/rian-tavares.png" alt={"Rian Tavares"} />
                  </div>
                  <div className="section__desk__container">
                    <h1 className="whoami">{l[selectedLenguage].section1.title}</h1>
                    <p className="section__desk__container__text">{l[selectedLenguage].section1.paragraph1}</p>
                    <p className="section__desk__container__text">{l[selectedLenguage].section1.paragraph2}</p>
                    <p className="section__desk__container__text phrase">{l[selectedLenguage].section1.phrase}</p>
                    <p className="section__desk__container__text">{l[selectedLenguage].section1.followme}</p>
                    <Social />
                  </div>
                </div>
              </section>
            ) : (
                <section id="aboutme" className="section pattern-margin first">
                  <h1 className="section__title whoami">{l[selectedLenguage].section1.title}</h1>
                  <div className="section__desk">
                    <div className="section__desk__img">
                      <LazyLoadImage effect="blur" src="https://raw.githubusercontent.com/RianTavares/riantavares.github.io/master/aboutme/src/assets/imgs/rian-tavares.png" alt={"Rian Tavares"} />
                    </div>
                    <div className="section__desk__container">
                      <p className="section__desk__container__text">{l[selectedLenguage].section1.paragraph1}</p>
                      <p className="section__desk__container__text">{l[selectedLenguage].section1.paragraph2}</p>
                      <p className="section__desk__container__text phrase">{l[selectedLenguage].section1.phrase}</p>
                      <p className="section__desk__container__text">{l[selectedLenguage].section1.followme}</p>
                      <Social />
                    </div>
                  </div>
                </section>
              )
          }
        </Media>

        {/* <section id="posts" className="section sec-posts"> 
        <div className="sec-posts__bg">
            <h1 className="section__title title-posts">{l[selectedLenguage].section2.title}</h1>
            <p className="pattern-margin">{l[selectedLenguage].section2.description}</p>
            <Posts 
              img={postImg1} 
              about={"RM Mini 3"} 
              ptitle={l[selectedLenguage].section2.pub1.pubTitle}
              ptext={l[selectedLenguage].section2.pub1.pubText}
              pbutton={l[selectedLenguage].section2.button}
              purl={l[selectedLenguage].section2.pub1.url}
            />
            <Posts 
              img={postImg2} 
              about={"Trip to Corsica"} 
              ptitle={l[selectedLenguage].section2.pub2.pubTitle}
              ptext={l[selectedLenguage].section2.pub2.pubText}
              pbutton={l[selectedLenguage].section2.button}
              purl={l[selectedLenguage].section2.pub2.url}
            />
            <Posts 
              img={postImg3} 
              about={"Lâmpada Espiã Yoose"} 
              ptitle={l[selectedLenguage].section2.pub3.pubTitle}
              ptext={l[selectedLenguage].section2.pub3.pubText}
              pbutton={l[selectedLenguage].section2.button}
              purl={l[selectedLenguage].section2.pub3.url}
            />
          </div>
        </section> */}
        <section id="jobs" className="section sec-jobs">
          <div className="sec-jobs__content">
            <div className="sec-jobs__content__bg">
              <h1 className="section__title title-green">{l[selectedLenguage].section3.title}</h1>
              <div className="sec-jobs__content__bg__itens pattern-margin">

                {l[selectedLenguage].section3.jobs.map(job => {
                  const { time, details, location, img } = job;

                  return (
                    <Jobs
                      photo={img}
                      time={time}
                      details={details}
                      location={location}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </section>
        <section className="section sec-schools sec-skills pattern-margin">
          <div id="education" className="sec-schools__container ">
            <div className="sec-schools__education">
              <h1 className="section__title">{l[selectedLenguage].section4.title}</h1>
              <ul>
                {l[selectedLenguage].section4.establishments.map((school, index) => {
                  const { time, place } = school;
                  if (index === 0) {
                    return (
                      <li className="first-li"><span><span className="education-time">{time}</span>{place}</span></li>

                    )
                  }
                  return (
                    <li><span><span className="education-time">{time}</span>{place}</span></li>
                  )
                })}
              </ul>
            </div>

            <div id="skills" className="sec-skills__list">
              <h1 className="sec-skills__list__title">{l[selectedLenguage].section5.title}</h1>
              {l[selectedLenguage].section5.skills.map(skillElem => {
                const { skill, level, label } = skillElem;

                return (
                  <Skills
                    skill={skill}
                    level={level}
                    label={label}
                  />
                )
              })}
            </div>
          </div>

        </section>
        <Resume
          title={l[selectedLenguage].resume.title}
          subtitle={l[selectedLenguage].resume.subtitle}
        />
        <section id="portfolio" className="section sec-portfolio">
          <div className="sec-portfolio__container">
            <h1 className="sec-portfolio__container__title">{l[selectedLenguage].section6.title}</h1>

            {l[selectedLenguage].section6.projects.map(project => {
              const { title, text, url, button, fotoOrder, textOrder, img, isPrivate } = project;

              return (
                <Portfolio
                  pimg={img}
                  ptitle={title}
                  ptext={text}
                  purl={url}
                  pbutton={button}
                  fotoOrder={fotoOrder}
                  textOrder={textOrder}
                  private={isPrivate}
                />
              )
            })}

          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;
