import './ImageSlider.css'
import Carousel from 'react-bootstrap/Carousel'
import pharma_banner from "../../assets/images/pharma_banner.webp"
import pharma_banner2 from "../../assets/images/pharma_banner_2.webp"
import pharma_banner3 from "../../assets/images/pharma_banner_3.jpg"

const ImageSlider = () => {

    return (
        <Carousel>
          <Carousel.Item>
            <img
              className="announce-promo d-block w-100"
              src={pharma_banner}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="announce-promo d-block w-100"
              src={pharma_banner2}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="announce-promo d-block w-100"
              src={pharma_banner3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      );

};

export default ImageSlider;