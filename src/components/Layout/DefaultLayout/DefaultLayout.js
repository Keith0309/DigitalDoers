import Header from "../../Header/Header";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default DefaultLayout;
