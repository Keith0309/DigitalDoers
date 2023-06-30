import Header from "../../Header/Header";

const DefaultLayout = ({ children }) => {
  return (
    <div >
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default DefaultLayout;
