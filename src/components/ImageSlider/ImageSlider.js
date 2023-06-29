import './ImageSlider.css'
import Carousel from 'react-bootstrap/Carousel'
import pharma_banner from "../../assets/images/banner-1.png"
import pharma_banner2 from "../../assets/images/banner-2.png"
import pharma_banner3 from "../../assets/images/banner-3.png"

const ImageSlider = () => {

    return (
        <Carousel>
          <Carousel.Item>
            <div>
            <img
              className="first-banner announce-promo d-block w-100"
              src={pharma_banner}
              alt="first-banner"
            ></img>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="second-banner announce-promo d-block w-100"
              src={pharma_banner2}
              alt="second banner"
            ></img>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="third-banner announce-promo d-block w-100"
              src={pharma_banner3}
              alt="third-banner"
            ></img>
          </Carousel.Item>
        </Carousel>
      );

};

export default ImageSlider;