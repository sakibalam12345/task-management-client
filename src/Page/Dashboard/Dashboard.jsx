import { NavLink, Outlet } from "react-router-dom";




const Dashboard = () => {
    return (
        <div >
            <h3 className="font-extrabold text-center text-4xl h-[90px] bg-violet-400 pt-6 ">Task Management</h3>
            <div className="flex">
                <div> <div className="min-h-screen bg-violet-200 w-[250px] p-4 ">
                <div className="flex flex-col justify-center items-center gap-3">
                <li>      <NavLink
                    to='/'
                    className={({ isActive }) =>
                      isActive ? ' border-b-2 border-black text-red-5' : ''
                    }
                  >
                   HOME
                  </NavLink></li>
                <li>      <NavLink
                    to='/dashboard/addtask'
                    className={({ isActive }) =>
                      isActive ? 'border-b-2 border-black text-red-500' : ''
                    }
                  >
                   ADD TASK
                  </NavLink></li>
                <li>      <NavLink
                    to='/dashboard/mytask'
                    className={({ isActive }) =>
                      isActive ? ' border-b-2 border-black text-red-5' : ''
                    }
                  >
                   MY TASK
                  </NavLink></li>  
                </div>
            </div></div>
                <div className="flex-1">
                <Outlet></Outlet>
                </div>
            </div>
            
        </div>
    );
};

export default Dashboard;