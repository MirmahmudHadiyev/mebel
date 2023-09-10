import { useCart } from 'react-use-cart'
import { Table } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import { FaHome, FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import IMAGES from 'assets/images'
import { useTranslation } from 'react-i18next'
import i18n from 'hooks/Reactİ18.ts/Translation'
import { ToastContainer, toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const cart = () => {
  interface User {
    key: number
    name: string
  }

  const { mode } = useSelector((state) => state.darkMode)
  const makeAppointment = () => {
    const localName =
      localStorage.getItem('User') || localStorage.getItem('Admin')

    if (localName == null) {
      toast.error('hesab yaradın', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    } else {
      toast.success('sifariş tamamlandı', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
      localStorage.removeItem('react-use-cart')
      setTimeout(() => {
        location.reload()
      }, 1000)
    }
  }

  const { t } = useTranslation()
  const { items, isEmpty, removeItem, cartTotal, updateItemQuantity } =
    useCart()

  if (isEmpty) {
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
        <div
          className="cartEmpty"
          style={{
            background: mode ? '#333' : 'white',
            color: mode ? 'white' : 'black',
          }}
        >
          <div className="cartEmpty_div_ul">
            <ul className="flex">
              <li>
                <NavLink to="/" style={{ color: '#000' }}>
                  {' '}
                  <FaHome />{' '}
                </NavLink>
              </li>
              <li>
                <NavLink to="/cart" style={{ color: '#000' }}>
                  {t('sebetCart')}
                </NavLink>
              </li>
            </ul>
          </div>

          <h1>{t('sebetCart')}</h1>
          <div
            className="cartEmpty_div1"
            style={{
              background: mode ? '#333' : 'white',
              color: mode ? 'white' : 'black',
            }}
          >
            <p>{t('emptyCart')}</p>
          </div>
          <div className="cartEmpty_div2">
            <button>
              {' '}
              <NavLink to="/" style={{ color: '#000' }}>
                {t('button1Cart')}
              </NavLink>{' '}
            </button>
          </div>
        </div>
      </>
    )
  }

  const columns: ColumnsType<User> = [
    {
      render: (item: { img: string | undefined }) => {
        return <img src={item.img} />
      },
    },

    {
      render: (item) => {
        return (
          <>
            <p>{i18n.t(item.title)}</p>
          </>
        )
      },
    },
    {
      render: (item) => {
        return (
          <>
            <div style={{ width: '100px' }}>
              <button
                style={{ padding: '5px' }}
                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
              >
                <FaMinus />
              </button>
              <span style={{ margin: '10px', width: '20px' }}>
                {item.quantity}
              </span>
              <button
                style={{ padding: '5px' }}
                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
              >
                <FaPlus />
              </button>
            </div>
          </>
        )
      },
    },
    {
      render: (item) => {
        return (
          <>
            <span>{item.price * item.quantity}AZN</span>
          </>
        )
      },
    },
    {
      render: (item) => {
        return (
          <>
            <button onClick={() => removeItem(item.id)}>
              {' '}
              <FaTrash
                style={{
                  color: 'red',
                  cursor: 'pointer',
                  backgroundColor: 'transparent',
                }}
              />{' '}
            </button>
          </>
        )
      },
    },
  ]

  return (
    <>
      <ToastContainer />
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
        style={{
          background: mode ? '#333' : 'white',
          color: mode ? 'white' : 'black',
        }}
      >
        <div className="container">
          <h1>{t('sebetCart')}</h1>
          <div className="row">
            <Table<User>
              columns={columns}
              dataSource={items}
              style={{
                background: mode ? '#333' : 'white',
                color: mode ? 'white' : 'black',
              }}
            />
          </div>
          <button
            onClick={() => makeAppointment()}
            style={{
              width: '200px',
              height: '50px',
              background: '#7bb80b',
              margin: '32px',
              borderRadius: '50px',
              cursor: 'pointer',
            }}
          >
            {t('buttonCart')}
          </button>

          <span>Yekun məbləğ: {cartTotal} AZN</span>
        </div>
      </section>
    </>
  )
}

export default cart
