import DefaultLayout from "../../components/Layout/DefaultLayout/DefaultLayout";
import "./SignIn.css";
import { Link } from "react-router-dom";
import Login from './Login';
import {useState} from 'React';


const SignIn = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState('');

  const handleLogin = (fetchedFirstName) => {
    setIsAuthenticated(true);
    setFirstName(fetchedFirstName);
  };


  return (
    <DefaultLayout>
      {/* Home > Sign in */}
      <div className="container p-0">
        <div className="d-flex directory-div mt-2 py-1 ">
          <p className="directory-text d-flex ms-4 mt-2 fw-bold">
            <Link className="directory_link " to="/">
              Home
            </Link>
            <i className="bi bi-chevron-right"></i> Sign in
            <Login onLogin={handleLogin}/>
          </p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignIn;
