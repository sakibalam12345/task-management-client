import { NavLink } from "react-router-dom";


const Navbar = () => {
    const navlinks = <>
    <li>      <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? 'underline' : ''
                    }
                  >
                   Home
                  </NavLink></li>
    <li>      <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? 'underline' : ''
                    }
                  >
                   Add Task
                  </NavLink></li>
    <li>      <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? 'underline' : ''
                    }
                  >
                   Task Management
                  </NavLink></li>
    <li>      <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? 'underline' : ''
                    }
                  >
                   Login
                  </NavLink></li>
       
    
    </>
    return (
        <div className="bg-[#FFFBF0]">
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
    <a className="btn">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;