import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./Home.css";
import pharma_banner from "../../assets/images/pharma_banner.webp"
import pharma_banner_2 from "../../assets/images/pharma_banner_2.webp"
import pharma_banner_3 from "../../assets/images/pharma_banner_3.jpg"
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Footer2 from "../../components/Footer2/Footer2";
import Best_Products from "./best_seller";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import product1 from "../../assets/images/sample_products/bondi_sands_suncreen.webp"
// import product2 from "../../assets/images/sample_products/carex_hand_soap.webp"
// import product3 from "../../assets/images/sample_products/tide_pods_laundry.jpg"
// import product4 from "../../assets/images/sample_products/purell_hand_sanitizer.jpg"

const Home = () => { 
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const slides = [
    {url: pharma_banner, title: 'image1'},
    {url: pharma_banner_2, title: 'image2'},
    {url: pharma_banner_3, title: 'image3'},
  ]

  const containerStyles = {
    width: "1270px",
    height: "450px",
    margin: "30px auto",
  };

  return ( 
    <DefaultLayout>

      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>

      <div className="container">
        <Carousel responsive={responsive}>
          <Link className="category_link" to="/pharmacy">
            <div className="d-flex align-items-center justify-content-center category-item mx-auto pharmacy ">
              <h1>Pharmacy</h1>
            </div>
          </Link>
          <Link className="category_link" to="/medicine_health">
            <div className="d-flex align-items-center justify-content-center category-item mx-auto text-center medicine_health">
              <h1>
                Medicine &<br></br>Health
              </h1>
            </div>
          </Link>
          <Link className="category_link" to="/vitamins_supplements">
            <div className="d-flex align-items-center justify-content-center category-item mx-auto text-center vitamins_supplements">
              <h1>
                Vitamins & <br></br> Supplements
              </h1>
            </div>
          </Link>
          <Link className="category_link" to="/nutrition_fitness">
            <div className="d-flex align-items-center justify-content-center category-item mx-auto text-center nutrition_fitness">
              <h1>
                Nutrition &<br></br>Fitness
              </h1>
            </div>
          </Link>
          <Link className="category_link" to="/shopall">
            <div className="d-flex align-items-center justify-content-center category-item mx-auto text-center shopall">
              <h1>
                Shop<br></br>All
              </h1>
            </div>
          </Link>
        </Carousel>
      

      <div className="text-center">

        <div className="best-sellers">
        <h1 className="best-sellers-text">Best Sellers</h1>
        </div>

      {/* Best Sellers */}
        {/* <div className="d-flex justify-content-around ">
          <Card style={{ width: '18rem' }}>
            <Card.Img  variant="top" src={product1} style={{ height: "200px", width: "200px", margin: "auto"}} />
            <Card.Body>
              <Link className="product_link">
            <Card.Title>SPF 30 Fragrance Free Sunscreen Lotion</Card.Title>
            </Link>
            <Card.Text>
            Maecenas a purus urna. Quisque fringilla vestibulum enim nec commodo.
            Aliquam ac orci eu orci fermentum porttitor ultrices sit amet mi.
            Fusce felis purus, luctus ut interdum et, ultrices nec urna. 
            </Card.Text>
             <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img  variant="top" src={product2} style={{ height: "200px", width: "200px", margin: "auto"}} />
            <Card.Body>
            <Link className="product_link">
            <Card.Title>Carex Original Antibacterial Hand Wash 250ml and 500ml - Carex</Card.Title>
            </Link>
            <Card.Text>
            Maecenas a purus urna. Quisque fringilla vestibulum enim nec commodo.
            Aliquam ac orci eu orci fermentum porttitor ultrices sit amet mi.
            Fusce felis purus, luctus ut interdum et, ultrices nec urna. 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img  variant="top" src={product3} style={{ height: "200px", width: "200px", margin: "auto"}} />
            <Card.Body>
            <Link className="product_link">
            <Card.Title>Tide Pods Laundry Detergent Soap Pods, High Efficiency (HE), Original Scent, 81 Count</Card.Title>
            </Link>
            <Card.Text>
            Maecenas a purus urna. Quisque fringilla vestibulum enim nec commodo.
            Aliquam ac orci eu orci fermentum porttitor ultrices sit amet mi.
            Fusce felis purus, luctus ut interdum et, ultrices nec urna. 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img  variant="top" src={product4} style={{ height: "200px", width: "200px", margin: "auto"}} />
            <Card.Body>
            <Link className="product_link">
            <Card.Title>Purell Advanced Hand Sanitiser - 100ml</Card.Title>
            </Link>
            <Card.Text>
            Maecenas a purus urna. Quisque fringilla vestibulum enim nec commodo.
            Aliquam ac orci eu orci fermentum porttitor ultrices sit amet mi.
            Fusce felis purus, luctus ut interdum et, ultrices nec urna. 
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div> */}

        <Best_Products />
      </div>
      </div>

      <Footer />
      <Footer2 />
    </DefaultLayout>
  );
};

export default Home;