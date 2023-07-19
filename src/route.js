import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import Pharmacy from "./views/Pharmacy/Pharmacy";
import Cart from "./views/Cart_Page/cart_page";
import Profile from "./views/Profile/Profile";
import EditProfile from "./views/EditProfile/EditProfile";
import Home2 from "./views/Home/Home2";



const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/pharmacy", element: <Pharmacy /> },
  { path: "/medicine_health", element: <Pharmacy /> },
  { path: "/vitamins_supplements", element: <Pharmacy /> },
  { path: "/nutrition_fitness", element: <Pharmacy /> },
  { path: "/shopall", element: <Pharmacy /> },
  { path: "/cart", element: <Cart /> },
  { path: "/profile", element: <Profile /> },
  { path: "/editprofile", element: <EditProfile /> },
  { path: "/home2", element: <Home2 /> },
]);

export default routes;
