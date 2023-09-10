import IMAGES from "assets/images"
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { useTranslation } from 'react-i18next';
import {useSelector} from 'react-redux';
import { Carousel } from 'antd';


 const haqqimizda =()=>  {
 
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        }

        const settings1 = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 2
        }
       
        const { t} = useTranslation();
        const {mode} = useSelector((state)=> state.darkMode);
  return (
    <>
    <section className="yataq_sec1" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
      <div className="sec1_div">
      <img src={IMAGES.sliderOneImg} />
      </div>
    </section>
      <section className="haqqimizda_section2" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
        <div className="haqqimizda_container">
            <div className="haqqimizda_row">
                <div className="haqqimizda_row_left_col">
                   <div className="haqqimizda_row_left_col_div">
                   <Slider {...settings}>
          <div>
            <img src={IMAGES.sectionFourImg2}/>
          </div>
          <div>
          <img src={IMAGES.sectionFourImg3}/>
          </div>
          <div>
          <img src={IMAGES.sectionFourImg1}/>
          </div>
          
        </Slider >
                   </div>
                </div>

                <div className="haqqimizda_row_right_col" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
                    <h1>{t('haqqimizdaHaq')}</h1>
                   <div className="haqqimizda_row_right_col_div">
                     <span>
                        {t('loremHaq')}
                     </span>
                     <div>
                     <ul style={{ color:mode ? 'white' : 'black'}}>
                        <li style={{ color:mode ? 'white' : 'black'}}>{t('li1Haq')}</li>
                        <li style={{ color:mode ? 'white' : 'black'}}>{t('li2Haq')}</li>
                        <li style={{ color:mode ? 'white' : 'black'}}>{t('li3Haq')}</li>
                        <li style={{ color:mode ? 'white' : 'black'}}>{t('li4Haq')}</li>
                     </ul>
                     <NavLink to='/contact'>
                     <button>{t('buttonHaq')}</button>
                     </NavLink>
                     </div>
                   </div>
                </div>

            </div>
        </div>

        <div className="haqqimizda_res" >
        <ul>
                        <li>{t('li1Haq')}</li>
                        <li>{t('li2Haq')}</li>
                        <li>{t('li3Haq')}</li>
                        <li>{t('li4Haq')}</li>
                     </ul>
                     <NavLink to='/contact'>
                     <button>{t('buttonHaq')}</button>
                     </NavLink>
        </div>
      </section>
      <section className="haqq_sec3" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
      
        <div className="full_w haqqimizda_480" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
          <div className="center" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
            <div className="full_w flex justify_between haqqimizda_section2_img">
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

        <Carousel {...settings1} className='haqq_section3_img_slide' >
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
    </>
  )
  
}

export default haqqimizda
