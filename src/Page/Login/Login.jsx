import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { toast } from "react-toastify";

import { FaGoogle } from 'react-icons/fa';


const Login = () => {
  const {user,login,googlelogin} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handlegoogle = ()=>{
    googlelogin()
    .then(res=>{
      console.log(res.user)
      navigate('/')
    })
  }

  const from = location.state?.from?.pathname || '/'
  const handlelogin = e =>{
   
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password)
    login(email,password)
    .then(res=>{
      console.log(res?.user)
      toast('Login Successfull')
      navigate(from, {replace : true})
    })
    .catch()
  }
    return (
        <div className="">
            <div className="hero min-h-screen bg-violet-600">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
      <form onSubmit={handlelogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email"  name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <h3>Dont Have An Account? Please <Link to='/signup' className="text-red-500">SignUP</Link> </h3>
      
      <h3 className="text-center block"> Login With <button onClick={handlegoogle}><FaGoogle className="inline-block ml-2"></FaGoogle></button></h3>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;