import IMAGES from "assets/images";
import { FaHome } from "react-icons/fa";
import { NavLink, useHistory } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const hesabim = () => {
  const { t } = useTranslation();
  const { mode } = useSelector((state) => state.darkMode)
  const logout=()=>{
    localStorage.removeItem("User") 
    localStorage.removeItem("Admin") 
    history.push('/')
    window.location.reload()
  }
 const history = useHistory()

 
  const items = JSON.parse(localStorage.getItem('User')) || JSON.parse(localStorage.getItem('Admin'));
 

  return (
     <>
     <section className="yataq_sec1" style={{background: mode ? '#333' : 'white',
      color: mode ? '#C6E0E3' : 'black'}}>
      <div className="sec1_div">
      <img src={IMAGES.sliderOneImg} />
      </div>
    </section>
    <section style={{background: mode ? '#333' : 'white',
      color: mode ? '#C6E0E3' : 'black'}}>
    <div className='heasbim_box'>
      <div className="heasbim_box_div1">

      <ul className="flex">
      <li><NavLink to='/' style={{color:'#000'}}> <FaHome/> </NavLink></li>
      <li><NavLink to='/hesabim' style={{color:'#000'}}>{t('hesabWis')}</NavLink></li>
      </ul>
        </div>
       <div className='hesab_box'>
        <ul>
          <li><h2>Hesabım</h2></li>
          <li>Hesab məlumatları</li>
          <li><button onClick={logout} className="logout">Hesabdan çıxış</button></li>
        </ul>
        
        <span>Salam {items.admin}: {items.userName}</span>
        
    </div>
  
    </div>
    </section>
    </>
  )
}

export default hesabim


