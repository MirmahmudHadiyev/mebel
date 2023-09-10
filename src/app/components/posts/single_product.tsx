import { useParams } from 'react-router-dom'
import { products } from 'store/product'
import { FaShoppingCart, FaRegHeart, FaPhone } from 'react-icons/fa'
import i18n from 'hooks/Reactİ18.ts/Translation'
import { useTranslation } from 'react-i18next'
import { useCart } from 'react-use-cart'
import IMAGES from 'assets/images'
import { useSelector } from 'react-redux'
import UseWishlist from 'components/TopTo/UseWishlist'

const single_product = () => {
  const { mode } = useSelector((state) => state.darkMode)
  const { addItem } = useCart()
  const { id } = useParams()
  const product = products.find((p) => p.id === +id)
  const { t } = useTranslation()
  return (
    <section
      className="single_pro_sec1"
      style={{
        background: mode ? '#333' : 'white',
        color: mode ? 'white' : 'black',
      }}
    >
      <div
        className="single_img"
        style={{
          background: mode ? '#333' : 'white',
          color: mode ? 'white' : 'black',
        }}
      >
        <div>
          <img src={product.img} alt={product.title} />
        </div>
      </div>

      <div className="single_pro_img_data">
        <div className="single_pro_title">
          <span>{i18n.t(product.title)}</span>
          <UseWishlist product={product} />
        </div>

        <div className="single_pro_price">
          <div className="single_pro_span">
            <span>{product.price}</span>
          </div>
          <div className="single_pro_cart">
            <button>
              {' '}
              <FaPhone className="phone" /> Sizə zəng edək?
            </button>

            <button onClick={() => addItem(product)} className="pages_Btn2">
              <FaShoppingCart className="single_Cart" />
              Səbətə at
            </button>
          </div>
        </div>

        <div className="single_pro_slider">
          <div className="pay">
            <div className="pay1">
              <img src={IMAGES.singleImg1} />
              <span>Kartla ödəniş</span>
            </div>

            <div className="pay2">
              <img src={IMAGES.singleImg2} />
              <span>Nağd ödəniş</span>
            </div>

            <div className="whatsapp">
              <img src={IMAGES.singleImg3} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default single_product
