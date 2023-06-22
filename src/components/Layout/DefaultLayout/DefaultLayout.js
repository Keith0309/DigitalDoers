import Header from "../../Header/Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <dvi className="container">{children}</dvi>
    </div>
  );
};

export default DefaultLayout;
