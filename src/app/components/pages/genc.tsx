import IMAGES from "assets/images";
import { useEffect, useState } from "react"
import { getProductsByCategoryId } from "store/product";
import { Card, Col, Row  } from 'antd';
import Meta from "antd/lib/card/Meta";
import { Rate } from 'antd';
import { useCart } from "react-use-cart";
import { FaShoppingCart,FaRegHeart } from "react-icons/fa";
import i18n from "hooks/Reactİ18.ts/Translation";
import { useTranslation } from 'react-i18next';
import {  ToastContainer,toast} from 'react-toastify';
import { useSelector} from 'react-redux';
import UseWishlist from "components/TopTo/UseWishlist";

const genc = () => {

  const { mode } = useSelector((state) => state.darkMode)
  const { t } = useTranslation();
  const { addItem} = useCart();
  const [localProduct, setLocalProduct] = useState([]);

  useEffect(() =>{

  const local_prduct= getLocalProductsByCatId(3);
  setLocalProduct(old_data => local_prduct)

  },[]);

  const getLocalProductsByCatId =(cat_id : number) =>{
    return getProductsByCategoryId(cat_id)
  }
 
  const notify = () => toast('😎Məhsul əlavə olundu', {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
    function sortProduct(e: ChangeEvent<HTMLSelectElement>){
      if(e.target.value === 'LowtoHeight'){
       setLocalProduct([...localProduct.sort((a, b) => {return a.price - b.price})]);
      }
     
      if(e.target.value === 'HeighttoLow'){
       setLocalProduct([...localProduct.sort((a, b) => {return b.price - a.price})]);
      }
     console.log('value')
         }

  return (
    <>
    <section className="yataq_sec1" style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
    <ToastContainer
    position="top-right"
    autoClose={1000}
    theme="light"/>
      <div className="sec1_div">
      <img src={IMAGES.sliderOneImg} />
      </div>
    </section>

    <section style={{background: mode ? '#333' : 'white', color:mode ? 'white' : 'black'}}>
    <div className="product_filter_div_box">
          <div className="product_filter_div">
            <h3>{t('qiymet')}</h3>
            <select name='sec' value='' onChange={(e) => sortProduct(e)} style={{
          background: mode ? '#333' : 'white',
          color: mode ? 'white' : 'black',
        }}>
             <option value=''>{t('qiymetAraligi')}</option>
             <option value='LowtoHeight'>Low to Height</option>
             <option value='HeighttoLow'>Height to Low</option>
            </select>
          </div>
        </div>
    <Row gutter={16}>
    {
          localProduct.map((product, item)=> {
            return (
              <Col span={8}>
                
              <Card
                 hoverable
                 
                 cover={<img  src={product.img} alt={product.title} />}
                      > <Rate style={{color:'#999'}}/>
                     
                       <Meta title={i18n.t(product.title)} description={product.price} />
                       <UseWishlist product={product} />
                       <button  onClick={() => {addItem(product);notify()}} className="pages_Btn2"> 
                            <FaShoppingCart className="shoppingCart"/>
                           </button>
                          </Card>
                          
                          </Col>
            )
          })
        }
        </Row>
    </section>
       
    </>
  )
}

export default genc
