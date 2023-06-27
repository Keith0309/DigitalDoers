
import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import pharma_banner from "../../assets/images/pharma_banner.webp"
import pharma_banner_2 from "../../assets/images/pharma_banner_2.webp"
import pharma_banner_3 from "../../assets/images/pharma_banner_3.jpg"
import Footer from "../../components/Footer/Footer";

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
      
      <Footer />
    </DefaultLayout>
  );
};

export default Home;
