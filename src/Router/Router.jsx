import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Page/Home/Home";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement : <Errorpage></Errorpage>,
      children : [
        {
            path : '/',
            element : <Home></Home>
        }
      ]
    },
  ]);

  export default router