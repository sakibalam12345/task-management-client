import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import router from './Router/Router.jsx'
import {
 
  RouterProvider,
} from "react-router-dom";
import Authprovider from './Authprovider/Authprovider.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Privateroute from './Page/Privateroute/Privateroute.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Privateroute>
    <Authprovider>
    <RouterProvider router={router} />
    <ToastContainer  position="top-center" />
    
    </Authprovider>
    </Privateroute>
    
    
  </React.StrictMode>,
)
