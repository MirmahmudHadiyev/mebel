import { BrowserRouter, Route } from 'react-router-dom'
import Home from 'components/Home'
import yataq from 'components/pages/yataq'
import qonaq from 'components/pages/qonaq'
import genc from 'components/pages/genc'
import masa from 'components/pages/masa'
import Footer from 'components/Template/Footer'
import Header from 'components/Template/Header'
import wishList from 'components/pages/wishList'
import LoginLogout from 'components/pages/LoginLogout'
import hesabim from 'components/pages/hesabim'
import cart from 'components/pages/cart'
import { CartProvider } from 'react-use-cart'
import haqqimizda from 'components/pages/haqqimizda'
import contact from 'components/pages/contact'
import single_product from 'components/posts/single_product'
import Registr from 'components/pages/Registr'
import { WishlistProvider } from 'react-use-wishlist'
import MusteriXidmetleri from 'components/pages/MusteriXidmetleri'
import kredit from 'components/pages/kredit'
import magazalarimiz from 'components/pages/magazalarimiz'
import mexfilik from 'components/pages/mexfilik'

const AppRouter = () => {
  return (
    <>
      <WishlistProvider>
        <CartProvider>
          <BrowserRouter>
            <Header />

            <Route path="/" component={Home} exact={true} />
            <Route path="/yataq" component={yataq} exact={true} />
            <Route path="/qonaq" component={qonaq} exact={true} />
            <Route path="/masa" component={masa} exact={true} />
            <Route path="/genc" component={genc} exact={true} />
            <Route path="/wishList" component={wishList} exact={true} />
            <Route path="/login" component={LoginLogout} exact={true} />
            <Route path="/register" component={Registr} exact={true} />
            <Route path="/cart" component={cart} exact={true} />
            <Route path="/haqqimizda" component={haqqimizda} exact={true} />
            <Route path="/contact" component={contact} exact={true} />
            <Route path="/hesabim" component={hesabim} exact={true} />
            <Route path="/search/:id" component={single_product} />
            <Route path="/müştəri-xidməti" component={MusteriXidmetleri} />
            <Route path="/kredit şərtləri" component={kredit} />
            <Route path="/magazalarimiz" component={magazalarimiz} />
            <Route path="/məxfilik" component={mexfilik} />

            <Footer />
          </BrowserRouter>
        </CartProvider>
      </WishlistProvider>
    </>
  )
}

export default AppRouter
