import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import IMAGES from 'assets/images'
import TopTo from 'components/TopTo'
import { useSelector } from 'react-redux'

const Section = () => {
  const { t } = useTranslation()
  const { mode } = useSelector((state) => state.darkMode)
  return (
    <footer
      className="fool_w flex_wrap"
      style={{
        background: mode ? '#111' : '#ece8e8',
        color: mode ? 'white' : 'black',
      }}
    >
      <div className="center">
        <div className="footer_top">
          <div className="center">
            <div className="flex  full_w">
              <div className="footer_top_mebel">
                <img src={IMAGES.headerLogo} className="mebel" />
              </div>
            </div>
          </div>

          <div className="center">
            <div className="flex  full_w">
              <div className="footer_contact">
                <span
                  className="span1"
                  style={{
                    textDecoration: 'none',
                    color: mode ? '#EEF0F1' : '#222',
                  }}
                >
                  {t('unvanF')}
                </span>
                <span
                  className="span2"
                  style={{
                    textDecoration: 'none',
                    color: mode ? '#EEF0F1' : '#222',
                  }}
                >
                  (+00) 123-456-789
                </span>
                <span className="span3">
                  {' '}
                  <NavLink
                    to="/link"
                    style={{
                      textDecoration: 'none',
                      color: mode ? '#EEF0F1' : '#222',
                    }}
                  >
                    demo@example.com
                  </NavLink>{' '}
                </span>
              </div>
            </div>
          </div>
          <div className="center full_w">
            <div className="flex align_center footer_bottom_div1">
              <ul className="flex">
                <li>
                  {' '}
                  <NavLink
                    to="/kredit şərtləri"
                    style={{
                      textDecoration: 'none',
                      color: mode ? '#EEF0F1' : '#222',
                    }}
                  >
                    {t('kreditF')}
                  </NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink
                    to="/haqqimizda"
                    style={{
                      textDecoration: 'none',
                      color: mode ? '#EEF0F1' : '#222',
                    }}
                  >
                    {t('aboutF')}
                  </NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink
                    to="/magazalarimiz"
                    style={{
                      textDecoration: 'none',
                      color: mode ? '#EEF0F1' : '#222',
                    }}
                  >
                    {t('securyF')}
                  </NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink
                    to="/contact"
                    style={{
                      textDecoration: 'none',
                      color: mode ? '#EEF0F1' : '#222',
                    }}
                  >
                    {t('contacktF')}
                  </NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink
                    to="/məxfilik"
                    style={{
                      textDecoration: 'none',
                      color: mode ? '#EEF0F1' : '#222',
                    }}
                  >
                    {t('storesF')}
                  </NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink
                    to="/müştəri-xidməti"
                    style={{
                      textDecoration: 'none',
                      color: mode ? '#EEF0F1' : '#222',
                    }}
                  >
                    {t('musteriF')}
                  </NavLink>{' '}
                </li>
                <li>
                  {' '}
                  <NavLink
                    to="/yataq"
                    style={{
                      textDecoration: 'none',
                      color: mode ? '#EEF0F1' : '#222',
                    }}
                  >
                    {t('newF')}
                  </NavLink>{' '}
                </li>
              </ul>
            </div>
          </div>

          <div className="center full_w">
            <div className="flex align_center footer_bottom_div2">
              <ul className="flex">
                <li>
                  {' '}
                  <FaFacebook className="footer_icon" />{' '}
                </li>
                <li>
                  {' '}
                  <FaTwitter className="footer_icon" />{' '}
                </li>
                <li>
                  {' '}
                  <FaYoutube className="footer_icon" />{' '}
                </li>
                <NavLink to="http://localhost:8082/yataq">
                  <li>
                    {' '}
                    <FaGoogle className="footer_icon" />{' '}
                  </li>
                </NavLink>

                <li>
                  {' '}
                  <FaInstagram className="footer_icon" />{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <TopTo />
    </footer>
  )
}

export default Section
