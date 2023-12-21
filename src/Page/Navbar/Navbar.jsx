import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { toast } from "react-toastify";


const Navbar = () => {
  const {user,logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const handlelogout =()=>{
    logout()
    .then(res=>{
      console.log(res.user)
      toast('Logout successfully')
      navigate('/')

    })
    .catch()
  }
    const navlinks = <>
    <li>      <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? 'underline text-white' : ''
                    }
                  >
                   Home
                  </NavLink></li>
    <li>      <NavLink
                    to='/ouruser'
                    className={({ isActive }) =>
                      isActive ? 'underline text-white' : ''
                    }
                  >
                   For Whom?
                  </NavLink></li>
 
    <li>      <NavLink
                    to='/login'
                    className={({ isActive }) =>
                      isActive ? 'underline text-white' : ''
                    }
                  >
                   Login
                  </NavLink></li>
       
    
    </>
    return (
        <div className="bg-violet-800">
           <div className="navbar  max-w-7xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <img className="w-[40px] h-[40px]" src="https://i.ibb.co/YhHVTtd/Task-Logo-fullcol-Copy-561x480.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    {user?.email ? <button onClick={handlelogout} className="btn bg-violet-300 border-0">Logout</button> :  <Link to='/login'>
    <a className="btn bg-violet-300 border-0">Login</a>
    </Link>}
   
    
  </div>
</div>
        </div>
    );
};

export default Navbar;