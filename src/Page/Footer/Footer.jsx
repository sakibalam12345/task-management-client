import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-32 bg-violet-700 text-white">
            <footer className="footer p-10  text-neutral-content max-w-7xl mx-auto">
  <aside>
  <img className="w-[40px] h-[40px]" src="https://i.ibb.co/YhHVTtd/Task-Logo-fullcol-Copy-561x480.png" alt="" />
  <p className='text-lg font-medium'>Task Management</p>
    
  </aside> 
  <nav className="navbar-end">
    <header className="footer-title">Social</header> 
    <div className="grid grid-flow-col gap-4">
      <a href="https://www.facebook.com"><FaFacebookF className='text-2xl'></FaFacebookF></a>
      <a href="https://twitter.com/i/flow/login"><FaXTwitter className='text-2xl'></FaXTwitter></a>
   
    </div>
  </nav>

</footer>
< p className="text-center bg-violet-700 text-white pb-6">Copyright © 2023 - All right reserved</p>
        </div>
    );
};

export default Footer;