import { useContext } from "react";
import { Link, useNavigate,   } from "react-router-dom";
import { AuthContext } from "../../Authprovider/Authprovider";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";



const Signup = () => {

  const {user,createnewuser,updateuserprofile,googlelogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const handlegoogle = ()=>{
    googlelogin()
    .then(res=>{
      console.log(res.user)
      navigate('/')
    })
  }
  const handlesignup = e =>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name,photo,email,password)
    createnewuser(email,password)
    .then(res=>{
    console.log(res.user)
    updateuserprofile(name,photo)
    .then(result=>{
      // console.log(result)
      form.reset();
      toast('SignUp successfully')
     
      navigate('/')

    })
    .catch()

    })
    .catch()
  }

    return (
        <div>
            <div className="">
            <div className="hero min-h-screen bg-violet-600">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
     
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-10">
      <form onSubmit={handlesignup} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">PhotoUrl</span>
          </label>
          <input type="text" name="photo" placeholder="photourl" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">SignUP</button>
        </div>
      </form>
      <h3>Already Have An Account? Please <Link to='/login' className="text-red-500">Login</Link> </h3>
      <h3 className="text-center block"> Login With <button onClick={handlegoogle}><FaGoogle className="inline-block ml-2"></FaGoogle></button></h3>
    </div>
  </div>
</div>
        </div>
       
        </div>
    );
};

export default Signup;