import { Carousel } from 'antd';
import TopTo from "components/TopTo";
import IMAGES from "assets/images/index.js";
import { useTranslation } from 'react-i18next';
import Section4 from './section4'
import { NavLink } from "react-router-dom";
import Section1 from "./section1";
import {useSelector} from 'react-redux';

const  index =() => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    responsive: [
     
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
    ]
  };

      const { t} = useTranslation();
      const {mode} = useSelector((state)=> state.darkMode);
      
  return (
    <main style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
      <section className="home_section1" >
      <Section1/>
      </section>

      {/* section2 */}

      <section style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
        <div className="center" style={{background: mode ? '#333' : 'white', color: mode ? 'white' : 'black'}}>
          <div className="flex  full_w">
            <div className="main_section2_h1" >
              <h1 > {t('shopByColHome')} </h1>
            </div>
          </div>
        </div>

        <div className="full_w" >
          <div className="center">
            <div className="full_w flex justify_between main_section2_img">

              <div >
                <img src={IMAGES.headerLiImg1} />
                <span style={{color: mode ? '#888' : 'black'}}>{t('yataqHome')}</span>
              </div>
              
              <div>
                <img src={IMAGES.headerLiImg2} />
                <span style={{color: mode ? '#888' : 'black'}}>{t('qonaqHome')}</span>
              </div>

              <div>
                <img src={IMAGES.headerLiImg4} />
                <span style={{color: mode ? '#888' : 'black'}}>{t('young')}</span>
              </div>

              <div>
                <img src={IMAGES.headerLiImg6} />
                <span style={{color: mode ? '#888' : 'black'}}>{t('table')}</span>
              </div>
              
            </div>
          </div>
        </div>

         {/*responsive 480 */}

         <Carousel {...settings} className='main_section2_img_slide'>
         <div >
                <img src={IMAGES.headerLiImg1} />
                <span>{t('yataqHome')}</span>
              </div>

          <div>
                <img src={IMAGES.headerLiImg2} />
                <span>{t('qonaqHome')}</span>
              </div>

          <div>
                <img src={IMAGES.headerLiImg4} />
                <span>{t('young')}</span>
              </div>

          <div>
                <img src={IMAGES.headerLiImg6} />
                <span>{t('table')}</span>
              </div>
    </Carousel>

      </section>

      {/*section3 */}

      <section className="section_3" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
        <div className="section3_div_box">
          <img src={IMAGES.sectionthreeImg1} />
          <div className="section3_div1">
          <span >
          {t('rockingSec3Hom')}
          </span>
          </div>
          <div className="section3_div2">
            <NavLink to='/masa' style={{color:'#000'}}>{t('WievSec3Hom')}</NavLink>
          </div>
        </div>

        <div className="section3_div_box">
          <img src={IMAGES.sectionthreeImg2} />
          <div className="section3_div1">
          <span>
           {t('youngSec3Hom')}
          </span>
          </div>
          <div className="section3_div2">
            <NavLink to='/genc' style={{color:'#000'}} >{t('WievSec3Hom')}</NavLink>
          </div>
        </div>

        <div className="section3_div_box">
          <img src={IMAGES.sectionthreeImg3} />
          <div className="section3_div1">
          <span>
          {t('tableSec3Hom')}
          </span>
          </div>
          <div className="section3_div2">
            <NavLink to='/qonaq' style={{color:'#000'}}>{t('WievSec3Hom')}</NavLink>
          </div>
        </div>
      </section>

      {/*SECTION 4 */}

      <section className="section-4" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
      <div className="flex  full_w main_section4_span">
          <span> {t('blogSec4Hom')}</span>
        </div>
           
       <Section4/>
      </section>

      {/*SECTION5 */}
      <section >
      
        <div className="full_w  main_section5_img_none" >
          <div className="center">
            <div className="full_w flex justify_between main_section5_img" >
              <div>
                <img src={IMAGES.sectionFiveImg1} />
              </div>
              <div>
                <img src={IMAGES.sectionFiveImg2} />
              </div>
              <div>
                <img src={IMAGES.sectionFiveImg3} />
              </div>
              <div>
                <img src={IMAGES.sectionFiveImg4} />
              </div>
              <div>
                <img src={IMAGES.sectionFiveImg5} />
              </div>
            </div>
          </div>
        </div>

        <Carousel {...settings} className='main_section5_img_slide'>
        <div>
                <img src={IMAGES.sectionFiveImg1} />
              </div>
              <div>
                <img src={IMAGES.sectionFiveImg2} />
              </div>
              <div>
                <img src={IMAGES.sectionFiveImg3} />
              </div>
              <div>
                <img src={IMAGES.sectionFiveImg4} />
              </div>
              <div>
                <img src={IMAGES.sectionFiveImg5} />
              </div>
    </Carousel>
      </section>

      <TopTo />
    </main>
  );
};

export default index





