import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import PharmacyPage from "./views/Pharmacy/Pharmacy";

const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/pharmacy", element: <PharmacyPage /> },
]);

export default routes;
