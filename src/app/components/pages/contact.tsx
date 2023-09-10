import IMAGES from "assets/images";
import {  FaEnvelope, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { useSelector} from 'react-redux';

const contact = () => {
   
    const { mode } = useSelector((state) => state.darkMode)
    const { t } = useTranslation();
  return (
    <>
    <section className="yataq_sec1" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
      <div className="sec1_div">
      <img src={IMAGES.sliderOneImg} />
      </div>
    </section>
    <section className="contact_sec2" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
        <div  className="contact_sec2_div">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.9582524048187!2d-122.42377728432723!3d37.744123621694605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e42e1b683a9%3A0x225f82d9da5726a2!2s60+29th+St+%23343%2C+San+Francisco%2C+CA+94110%2C+USA!5e0!3m2!1sen!2sin!4v1501570738622"></iframe>
        </div>
    </section>

    <section className="contact_sec3" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>      
        <div className="contact_sec3_div justify_between flex center" >

            <div className="contact_sec3_div_left" >
             <form>

                <div className="contact_sec3_form_div_box justify_between flex center">
                    <div className="contact_sec3_form_div1">
                    <label>{t('adContact')}</label>
               <input type="text" placeholder=""/>
                    </div>

                    <div className="contact_sec3_form_div2">
                    <label>Email</label>
               <input type="email" placeholder=""/>
                    </div>                         
                </div>

                <div className="contact_sec3_form_div_box2">
                    <label>{t('movzuContact')}</label>
               <input type="text" placeholder=""/>
                    </div>

                    <div className="contact_sec3_form_div_box3" >
                    <label>{t('mesajContact')}</label>
                     <textarea name="sizin-mesajiniz" ></textarea>
                    </div>

                   
              
             </form>
             <div className="contact_sec3_form_div_box4" >
                    <button type="submit"> {t('buttonContact')}</button>
                    </div>
            </div>

            <div className="contact_sec3_div_right">
                  <div className="contact_sec3_div_right_div1">
                    <div className="contact_sec3_div_right_div1_icon"> 
                        <FaMapMarkerAlt className="Faicon1"/>
                        </div >
                        <div className="contact_sec3_div_right_div1_span1"> 
                            <span >{t('unvanContact')}:</span>
                            </div>
                        <div className="contact_sec3_div_right_div1_span2"> 
                            <span >{t('BasOfisunvanContact')}</span>
                            </div>
                        <div className="contact_sec3_div_right_div1_span3">
                            <span >{t('countryContact')} </span>
                            </div>
                     
                     
                      
                  </div>
                  <div className="contact_sec3_div_right_div2">
                  <div className="contact_sec3_div_right_div1_icon1"> 
                        <FaPhoneAlt className="Faicon2"/>
                        </div >
                        <div className="contact_sec3_div_right_div2_span1"> 
                            <span >{t('TelContact')}:</span>
                            </div>
                        <div className="contact_sec3_div_right_div2_span2"> 
                            <span >055 555 55 55</span>
                            </div>
                        
                  </div>
                  <div className="contact_sec3_div_right_div3">
                  <div className="contact_sec3_div_right_div1_icon"> 
                        <FaEnvelope className="Faicon3"/>
                        </div >
                        <div className="contact_sec3_div_right_div3_span1"> 
                            <span >Email:</span>
                            </div>
                        <div className="contact_sec3_div_right_div3_span2"> 
                            <span >demo@example.com</span>
                            </div>
                        <div className="contact_sec3_div_right_div3_span3">
                            <span >{t('workTimeContact')} </span>
                            </div>
                  </div>
            </div>

         </div>       
    </section>
    </>
  )
}

export default contact
