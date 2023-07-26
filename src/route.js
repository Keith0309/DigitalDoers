import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import Pharmacy from "./views/Pharmacy/Pharmacy";
import Cart from "./views/Cart_Page/cart_page";
import Profile from "./views/Profile/Profile";
import EditProfile from "./views/EditProfile/EditProfile";
import ProductDescriptionPage from "./views/Item_Description/Item_Description";
import AdminPanel from "./views/AdminPanel/AdminPanel";
import ProductTable from "./views/ProductTable/ProductTable";


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
  { path: "/:category/:product_name", element: <ProductDescriptionPage/> },

  { path: "/admin", element: <AdminPanel/> },
  { path: "/ProductTable", element: <ProductTable/> },
]);

export default routes;
