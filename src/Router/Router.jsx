import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Errorpage from "../Errorpage/Errorpage";
import Home from "../Page/Home/Home";
import Login from "../Page/Login/Login";
import Signup from "../Page/Signup/Signup";

import Ouruser from "../Page/OurUser/Ouruser";
import Dashboard from "../Page/Dashboard/Dashboard";
import Addtask from "../Page/Addtask/Addtask";
import Privateroute from "../Page/Privateroute/Privateroute";



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
        },
        {
          path : '/ouruser',
          element : <Ouruser></Ouruser>
        }
      ]
    },
    
    {
      path : '/dashboard',
      element :<Privateroute><Dashboard></Dashboard></Privateroute> ,
      children : [
        {
          path : '/dashboard/addtask',
          element : <Addtask></Addtask>
        },
      
      ]
    },
    
  ]);

  export default router