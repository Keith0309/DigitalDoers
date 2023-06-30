import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import Pharmacy from "./views/Pharmacy/Pharmacy";
import Cart from "./views/Cart_Page/cart_page";
import Profile from "./views/Profile/Profile";



const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/pharmacy", element: <Pharmacy /> },
  { path: "/cart", element: <Cart /> },
  { path: "/profile", element: <Profile /> },
]);

export default routes;
