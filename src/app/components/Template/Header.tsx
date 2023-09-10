import IMAGES from 'assets/images'
import TopTo from 'components/TopTo'
import { NavLink, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useCart } from 'react-use-cart'
import { FaMoon, FaRegHeart, FaSearch, FaSun } from 'react-icons/fa'
import HeaderMenuant from './HeaderMenuant'
import { Select } from 'antd'
import { useTranslation } from 'react-i18next'
import {
  CloseOutlined,
  ShoppingOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons'
import Search from 'components/pages/search'
import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../../hooks/Feature.ts/darkModeSlice'
import AuthBtn from 'components/AuthBtn'
import { useWishlist } from 'react-use-wishlist'

const Section1 = () => {
  const { t, i18n } = useTranslation()
  const { items } = useCart()
  const { totalUniqueItems } = useCart()

  useEffect(() => {
    window.addEventListener('scroll', isSticky)
    return () => {
      window.removeEventListener('scroll', isSticky)
    }
  })

  const isSticky = () => {
    const header = document.querySelector('.header_bottom_div')
    const scrollTop = window.scrollY
    scrollTop >= 136
      ? header.classList.add('is-sticky')
      : header.classList.remove('is-sticky')
  }

  const handleChangeLng = (lng) => {
    i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  useEffect(() => {
    let icon4 = document.querySelector('.icon4')
    let icon5 = document.querySelector('.icon5')

    icon4?.addEventListener('click', function () {
      let mobile_search_div = document.querySelector('.mobile_search_div')

      if (mobile_search_div) {
        mobile_search_div.classList.add('search_show')
        icon4?.classList.add('icon4_show')
        icon5?.classList.add('icon5_show')
        icon5?.classList.remove('icon5')
      }
    })

    icon5?.addEventListener('click', function () {
      let mobile_search_div = document.querySelector('.mobile_search_div')

      if (mobile_search_div) {
        mobile_search_div.classList.remove('search_show')
        icon4?.classList.remove('icon4_show')
        icon5?.classList.remove('icon5_show')
        icon5?.classList.add('icon5')
      }
    })
  })

  useEffect(() => {
    let mobilebutton = document.querySelector('.mobile_menu_button')
    let closebtn = document.querySelector('.close_mobile_btn')
    let nav = document.querySelectorAll('.nav_a')

    mobilebutton?.addEventListener('click', function () {
      let mobilebox = document.querySelector('.mobile_menu_box')

      if (mobilebox) {
        mobilebox.classList.add('show')
        mobilebox?.classList.add('active')
      }
    })

    closebtn?.addEventListener('click', function () {
      let mobilebox = document.querySelector('.mobile_menu_box')

      if (mobilebox) {
        mobilebox.classList.remove('active')
        mobilebox.classList.remove('show')
      }
    })

    for (let i = 0; i < nav.length; i++) {
      nav[i].addEventListener('click', function () {
        let mobilebox = document.querySelector('.mobile_menu_box')
        mobilebox?.classList.remove('active')
      })
    }
  })

  const { mode } = useSelector((state) => state.darkMode)
  const dishpach = useDispatch()

  const { totalWishlistItems } = useWishlist()

  return (
    <>
      <header
        style={{
          background: mode ? '#333' : 'white',
          color: mode ? 'white' : 'black',
        }}
      >
        <nav>
          <div className="header full_w">
            <div className="center">
              <div className="full_w flex header_top">
                <div className="header__top__menus_left">
                  <Route
                    render={({ history }) => <Search history={history} />}
                  />
                </div>

                <div className="mebel_box">
                  <div className="mebel">
                    <button type="button" className="mobile_menu_button">
                      <UnorderedListOutlined className="mobile_menu_button_icon" />{' '}
                    </button>
                    <img src={IMAGES.headerLogo} className="mebel" />
                  </div>
                </div>

                <div className="icon">
                  <div className="icons">
                    <ul className="icons_ul flex">
                      <li className="header_li_one">
                        <AuthBtn />
                      </li>
                      <li className="icon4_li">
                        <FaSearch className="icon4" />
                        <CloseOutlined className="icon5" />
                      </li>
                      <li>
                        <NavLink
                          to="/wishlist"
                          style={{ color: '#222' }}
                          className="headerNav"
                        >
                          <FaRegHeart
                            className="icon1"
                            style={{ color: mode ? 'black' : 'black' }}
                          />
                          <span
                            className="headerNavWish_span"
                            style={{ color: mode ? '#999999' : 'black' }}
                          >
                            {totalWishlistItems}
                          </span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to="/cart"
                          style={{ color: '#222', width: '34px' }}
                          className="headerNav"
                        >
                          <ShoppingOutlined
                            className="icon3"
                            style={{ color: mode ? 'black' : 'black' }}
                          />
                          <span
                            className="headerNavWish_span"
                            style={{ color: mode ? '#999999' : 'black' }}
                          >
                            {totalUniqueItems}
                          </span>
                        </NavLink>
                      </li>
                      <li>
                        <button
                          className="header_dark_button"
                          onClick={() => dishpach(toggleDarkMode())}
                        >
                          {mode ? (
                            <FaSun className="header_sun" />
                          ) : (
                            <FaMoon className="header_monn" />
                          )}
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TopTo />
        </nav>
      </header>
      <div
        className="center full_w "
        style={{
          padding: '5px 0',
          borderBottom: '1px solid #E1E3E3',
          background: mode ? '#333' : 'white',
          color: mode ? 'black' : 'white',
        }}
      >
        <div
          className="flex align_center header_bottom_div"
          style={{
            background: mode ? '#333' : 'white',
            color: mode ? 'white' : 'black',
          }}
        >
          <ul className="flex header_li">
            <li className="header_li_menu1">
              <NavLink to="/" style={{ color: mode ? '#C6E0E3' : 'black' }}>
                <img src={IMAGES.headerLiImg8} />
                {t('Homepage')}
              </NavLink>
            </li>
            <li className="header_li_menu2">
              <NavLink
                to="/haqqimizda"
                style={{ color: mode ? '#C6E0E3' : 'black' }}
              >
                <img src={IMAGES.headerLiImg9} />
                {t('aboutAs')}
              </NavLink>
            </li>
            <li className="header_li_menu3">
              <HeaderMenuant />
            </li>
            <li className="header_li_menu4">
              <NavLink
                to="/contact"
                style={{ color: mode ? '#C6E0E3' : 'black' }}
              >
                <img src={IMAGES.headerLiImg10} />
                {t('contactUs')}
              </NavLink>
            </li>
            <li className="header_li_menu5">
              <Select
                style={{
                  background: mode ? '#333' : 'white',
                  color: mode ? '#C6E0E3' : 'black',
                }}
                value={t('changeTheLanguage')}
                onChange={() =>
                  handleChangeLng(i18n.language === 'AZ' ? 'EN' : 'AZ')
                }
              >
                <Select.Option
                  style={{
                    background: mode ? '#333' : 'white',
                    color: mode ? '#C6E0E3' : 'black',
                  }}
                >
                  {' '}
                  {i18n.language === 'AZ' ? 'EN' : 'AZ'}
                </Select.Option>
              </Select>
            </li>
          </ul>
        </div>
      </div>

      <div className="mobile_menu_box">
        <div
          className="mobile_menu"
          style={{
            background: mode ? '#333' : 'white',
            color: mode ? '#C6E0E3' : 'black',
          }}
        >
          <button type="button" className="close_mobile_btn">
            {' '}
            <CloseOutlined />{' '}
          </button>
          <ul className="mobile_ul">
            <li>
              <NavLink
                to="/"
                style={{ color: mode ? '#C6E0E3' : 'black' }}
                className="nav_a"
              >
                {t('Homepage')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/haqqimizda"
                style={{ color: mode ? '#C6E0E3' : 'black' }}
                className="nav_a"
              >
                {t('aboutAs')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/yataq"
                style={{ color: mode ? '#C6E0E3' : 'black' }}
                className="nav_a"
              >
                {t('bed')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/qonaq"
                style={{ color: mode ? '#C6E0E3' : 'black' }}
                className="nav_a"
              >
                {t('guest')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/genc"
                style={{ color: mode ? '#C6E0E3' : 'black' }}
                className="nav_a"
              >
                {t('young')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/masa"
                style={{ color: mode ? '#C6E0E3' : 'black' }}
                className="nav_a"
              >
                {t('table')}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={{ color: mode ? '#C6E0E3' : 'black' }}
                className="nav_a"
              >
                {t('contactUs')}
              </NavLink>
            </li>
            <li>
              <div className="mobile_btn">
                <button
                  className="mobile_btn_az nav_a"
                  onClick={() =>
                    handleChangeLng(i18n.language === 'EN' ? 'AZ' : '')
                  }
                >
                  az
                </button>
                <button
                  className="mobile_btn_en nav_a"
                  onClick={() =>
                    handleChangeLng(i18n.language === 'AZ' ? 'EN' : '')
                  }
                >
                  en
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="mobile_search_div"
        style={{
          background: mode ? '#333' : 'white',
          color: mode ? '#C6E0E3' : 'black',
        }}
      >
        <Route render={({ history }) => <Search history={history} />} />
      </div>
    </>
  )
}

export default Section1
