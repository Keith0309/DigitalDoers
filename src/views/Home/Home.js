
import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import "./Home.css";
import pharma_banner from "../../assets/images/pharma_banner.webp"
import pharma_banner_2 from "../../assets/images/pharma_banner_2.webp"
import pharma_banner_3 from "../../assets/images/pharma_banner_3.jpg"
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const Home = () => {

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

      <table className="category-table">
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
          
            <Link className="category_link sexual_health" to="/sexualhealth">
              <td className="category-item text-center align-middle">Sexual<br></br>Health</td>
            </Link>
                    
            <Link className="category_link allcategories" to="/allcategories">
              <td className="category-item text-center align-middle"> View All<br></br>Categories</td>
            </Link>
              
              
        </tr>
      </table> 
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
