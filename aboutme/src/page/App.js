//react components
import React, {useState, useEffect} from "react";
import Media from 'react-media';

//Project components
import BannerTop from '../components/Banner';
import Footer from '../components/Footer';
import Social from '../components/Social';
import Jobs from '../components/Jobs';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';
import Slide from "../components/JobsSlide";

//imgs
import me from '../assets/imgs/rian-tavares.png';
import infoglobo from '../assets/imgs/infoglobo.png';
import ibm from '../assets/imgs/IBM.png';
import bosch from '../assets/imgs/bosch.png';
import rodobravo from '../assets/imgs/rodobravo.png';
import marvel from '../assets/imgs/marvel-catalog.png';
import aboutmyself from '../assets/imgs/aboutme.png';

//Texts object
import l from '../components/LenguageSwitcher/lenguage';
import Menu from "../components/Menu";




function App() {

  const [selectedLenguage, setLenguage] = useState(0);

  useEffect(()=>{
    const localStorageVar = localStorage.getItem('lenguage_rt') ? localStorage.getItem('lenguage_rt') : 0;
    setLenguage(localStorageVar);
  },[])

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
                  <img src={me} alt={"Rian Tavares"} />
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
                  <img src={me} alt={"Rian Tavares"} />
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
                <Jobs
                  photo={infoglobo}
                  time={l[selectedLenguage].section3.job0.time}
                  details={l[selectedLenguage].section3.job0.details}
                  location={l[selectedLenguage].section3.job0.location}
                />
                <Jobs
                  photo={infoglobo}
                  time={l[selectedLenguage].section3.job1.time}
                  details={l[selectedLenguage].section3.job1.details}
                  location={l[selectedLenguage].section3.job1.location}
                />
                <Jobs
                  photo={ibm}
                  time={l[selectedLenguage].section3.job2.time}
                  details={l[selectedLenguage].section3.job2.details}
                  location={l[selectedLenguage].section3.job2.location}
                />
                <Jobs
                  photo={infoglobo}
                  time={l[selectedLenguage].section3.job3.time}
                  details={l[selectedLenguage].section3.job3.details}
                  location={l[selectedLenguage].section3.job3.location}
                />
                <Jobs
                  photo={bosch}
                  time={l[selectedLenguage].section3.job4.time}
                  details={l[selectedLenguage].section3.job4.details}
                  location={l[selectedLenguage].section3.job4.location}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section sec-schools sec-skills pattern-margin">
          <div id="education" className="sec-schools__container ">
            <div className="sec-schools__education">
              <h1 className="section__title">{l[selectedLenguage].section4.title}</h1>
              <ul>
                <li className="first-li"><span><span className="education-time">{l[selectedLenguage].section4.item1.time}</span>{l[selectedLenguage].section4.item1.place}</span></li>
                <li><span><span className="education-time">{l[selectedLenguage].section4.item2.time}</span>{l[selectedLenguage].section4.item2.place}</span></li>
                <li><span><span className="education-time">{l[selectedLenguage].section4.item3.time}</span>{l[selectedLenguage].section4.item3.place}</span></li>
                <li><span><span className="education-time">{l[selectedLenguage].section4.item4.time}</span>{l[selectedLenguage].section4.item4.place}</span></li>
              </ul>
            </div>

            <div id="skills" className="sec-skills__list">
              <h1 className="sec-skills__list__title">{l[selectedLenguage].section5.title}</h1>
              <Skills
                skill={l[selectedLenguage].section5.skill1.skill}
                level={l[selectedLenguage].section5.skill1.level}
                label={l[selectedLenguage].section5.skill1.label}
              />
              <Skills
                skill={l[selectedLenguage].section5.skill2.skill}
                level={l[selectedLenguage].section5.skill2.level}
                label={l[selectedLenguage].section5.skill2.label}
              />
              <Skills
                skill={l[selectedLenguage].section5.skill3.skill}
                level={l[selectedLenguage].section5.skill3.level}
                label={l[selectedLenguage].section5.skill3.label}
              />
              <Skills
                skill={l[selectedLenguage].section5.skill4.skill}
                level={l[selectedLenguage].section5.skill4.level}
                label={l[selectedLenguage].section5.skill4.label}
              />
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

            {/* <Portfolio
              pimg={rodobravo}
              ptitle={l[selectedLenguage].section6.portfolio1.title}
              ptext={l[selectedLenguage].section6.portfolio1.text}
              purl={l[selectedLenguage].section6.portfolio1.url}
              pbutton={l[selectedLenguage].section6.portfolio1.button}
              fotoOrder={l[selectedLenguage].section6.portfolio1.fotoOrder}
              textOrder={l[selectedLenguage].section6.portfolio1.textOrder}
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
            <Portfolio
              pimg={aboutmyself}
              ptitle={l[selectedLenguage].section6.portfolio3.title}
              ptext={l[selectedLenguage].section6.portfolio3.text}
              purl={l[selectedLenguage].section6.portfolio3.url}
              pbutton={l[selectedLenguage].section6.portfolio3.button}
              fotoOrder={l[selectedLenguage].section6.portfolio3.fotoOrder}
              textOrder={l[selectedLenguage].section6.portfolio3.textOrder}
            />
              */}
            <Slide />

          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;
