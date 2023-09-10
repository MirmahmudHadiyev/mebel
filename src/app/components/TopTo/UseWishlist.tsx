import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { useWishlist } from 'react-use-wishlist'

const UseWishlist = ({ product }) => {
  const { inWishlist, addWishlistItem, removeWishlistItem } = useWishlist()

  const toggleWish = (myPtroduct) => {
    if (inWishlist(myPtroduct.id)) {
      removeWishlistItem(myPtroduct.id)
    } else {
      addWishlistItem(myPtroduct)
    }
  }
  return (
    <>
      <button onClick={() => toggleWish(product)} className="pages_Btn1">
        {inWishlist(product.id) ? (
          <HeartFilled className="product_wish_btn2" />
        ) : (
          <HeartOutlined className="product_wish_btn1" />
        )}
      </button>
    </>
  )
}

export default UseWishlist
