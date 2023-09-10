import IMAGES from 'assets/images'
import { useCart } from 'react-use-cart'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { FaHome } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import i18n from 'hooks/Reactİ18.ts/Translation'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useWishlist } from 'react-use-wishlist'
import UseWishlist from 'components/TopTo/UseWishlist'

const WishList = ({product}) => {
  interface User {
    key: number
    name: string
  }

  const { mode } = useSelector((state) => state.darkMode)
  const { items } = useWishlist()
  const { addItem } = useCart()
  const { t } = useTranslation()

  const notify = () =>
    toast('Mehsul carta elave olundu', {
      autoClose: 1000,
      type: 'success',
    })

  const columns: ColumnsType<User> = [
    {
      render: (items: { img: string | undefined }) => {
        return <img src={items.img} />
      },
    },

    {
      render: (items: { img: string | undefined }) => {
        return <p>{i18n.t(items.title)}</p>
      },
    },
    {
      render: (item1: { img: string | undefined }) => {
        return <p>{i18n.t(item1.title1)}</p>
      },
    },
    {
      dataIndex: 'price',
    },
    {
      render: (item) => {
        return (
          <>
            <button
              onClick={() => {
                addItem(item)
                notify()
              }}
              className="pages_Btn2"
              style={{
                background: '#7bb80b',
                color: '#fff',
                width: '81px',
                height: '33px',
                cursor: 'pointer',
              }}
            >
              {t('sebetWis')}
            </button>
          </>
        )
      },
    },
    {
      render: (items) => {
        return (
          <>
            <UseWishlist product={items} />
          </>
        )
      },
    },
  ]

  return (
    <>
      <section
        className="yataq_sec1"
        style={{
          background: mode ? '#333' : 'white',
          color: mode ? 'white' : 'black',
        }}
      >
        <div className="sec1_div">
          <img src={IMAGES.sliderOneImg} />
        </div>
      </section>
      <section
        className="wishlist_section"
        style={{
          background: mode ? '#333' : 'white',
          color: mode ? 'white' : 'black',
        }}
      >
        <div className="container_wishlist">
          <div className="row2_wishlist">
            <ul className="flex">
              <li>
                <NavLink to="/" style={{ color: '#000' }}>
                  {' '}
                  <FaHome />{' '}
                </NavLink>
              </li>
              <li>
                <NavLink to="/hesabim" style={{ color: '#000' }}>
                  {t('hesabWis')}
                </NavLink>
              </li>
              <li>
                <NavLink to="/wishList" style={{ color: '#000' }}>
                  {t('arzuWis')}
                </NavLink>
              </li>
            </ul>
            <h3>{t('arzuWis')}</h3>
          </div>

          <div
            className="row_wishlist"
            style={{
              background: mode ? '#333' : 'white',
              color: mode ? 'white' : 'black',
            }}
          >
            <>
              <Table<User>
                columns={columns}
                dataSource={items}
                style={{
                  background: mode ? '#333' : 'white',
                  color: mode ? 'white' : 'black',
                }}
              />
            </>
          </div>
        </div>
      </section>
    </>
  )
}

export default WishList
