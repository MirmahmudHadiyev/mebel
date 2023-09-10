
import Slider from "react-slick";
import IMAGES from "assets/images/index.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Arrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}
const Sections = () => {

   
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 554,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };
  return (
    <>
       <Slider {...settings}>
          <div>
            <img src={IMAGES.sectionFourImg4} />
          </div>
          <div>
            <img src={IMAGES.sectionFourImg5} />
          </div>
          <div>
            <img src={IMAGES.sectionFourImg6} />
          </div>
          <div>
            <img src={IMAGES.sectionFourImg1} />
          </div>
          <div>
            <img src={IMAGES.sectionFourImg2} />
          </div>
          <div>
            <img src={IMAGES.sectionFourImg3} />
          </div>
        </Slider>
    </>
  )
}
export default Sections

