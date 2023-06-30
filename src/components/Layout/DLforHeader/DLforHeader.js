import Headerforprofile from "../../Headerforprofile/Headerforprofile";

const DLforHeader = ({ children }) => {
  return (
    <div >
      <Headerforprofile />
      <div>{children}</div>
    </div>
  );
};

export default DLforHeader;
