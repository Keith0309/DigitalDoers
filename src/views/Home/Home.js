
import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./Home.css";
import pharma_banner from "../../assets/images/pharma_banner.webp"
import pharma_banner_2 from "../../assets/images/pharma_banner_2.webp"
import pharma_banner_3 from "../../assets/images/pharma_banner_3.jpg"
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Home = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const slides = [
    {url: pharma_banner, title: 'image1'},
    {url: pharma_banner_2, title: 'image2'},
    {url: pharma_banner_3, title: 'image3'},
  ]

  const containerStyles = {
    width: "750px",
    height: "450px",
    margin: "30px auto",
  }

  return (
    <DefaultLayout>
      {/* <div className="row">
        <div className="col-md-12">
          <h1>Home</h1>
        </div>
      </div> */}

      <div style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>

      {/* <table className="category-table">
        <tr className="d-flex">
            
            <Link className="category_link pharmacy" to="/pharmacy">
              <td className="category-item text-center align-middle">Pharmacy</td>
            </Link>

            <Link className="category_link medicine_health" to="/medicine&health">
              <td className="category-item text-center align-middle"> Medicine &<br></br>Health</td>
            </Link>

            <Link className="category_link vitamins_supplements" to="/vitamins&supplements">
              <td className="category-item text-center align-middle ">Vitamins &<br></br>Supplements</td>
            </Link>
           
            <Link className="category_link nutrition_fitness" to="/nutritions&fitness align">
              <td className="category-item text-center align-middle">Nutrition &<br></br>Fitness</td>
            </Link>
                    
            <Link className="category_link allcategories" to="/shopall">
              <td className="category-item text-center align-middle"> Shop<br></br>All</td>
            </Link>
              
        </tr>
      </table>  */}


      <Carousel responsive={responsive}>
            <Link className="category_link" to="/pharmacy">
            <div className="d-flex align-items-center justify-content-center category-item mx-auto pharmacy ">
                <h1>Pharmacy</h1>
            </div>
            </Link>

            <Link className="category_link" to="/medicine_health">
            <div className="d-flex align-items-center justify-content-center category-item mx-auto text-center medicine_health">
              <h1>Medicine &<br></br>Health</h1>
            </div>
            </Link>

            <Link className="category_link" to="/vitamins_supplements">
            <div className="d-flex align-items-center justify-content-center category-item mx-auto text-center vitamins_supplements">
              <h1>Vitamins & <br></br> Supplements</h1>
            </div>
            </Link>

            <Link className="category_link" to="/nutrition_fitness">
            <div className="d-flex align-items-center justify-content-center category-item mx-auto text-center nutrition_fitness">
              <h1>Nutrition &<br></br>Fitness</h1>
            </div>
            </Link>

            <Link className="category_link" to="/shopall">
            <div className="d-flex align-items-center justify-content-center category-item mx-auto text-center shopall">
              <h1>Shop<br></br>All</h1>
            </div>
            </Link>
      </Carousel>

      <Footer />
    </DefaultLayout>
  );
};

export default Home;
