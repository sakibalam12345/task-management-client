import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <Errorpage></Errorpage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : '/login',
            element : <Login></Login>
        },
        {
            path : '/signup',
            element : <Signup></Signup>
        }
      ]
    },
  ]);

  export default router