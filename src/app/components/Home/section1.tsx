import IMAGES from "assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const section1= () =>  {
  
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
     
        <Slider {...settings} autoplay>
          <div>
          <img
              src={IMAGES.sliderOneImg}
            />
          </div>
          <div>
          <img
              src={IMAGES.sliderOneImg2}
            />
          </div>
         
        </Slider>
    
    );
  }
export default section1