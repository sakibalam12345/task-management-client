import { Link } from 'react-router-dom';
import './banner.css'

const Banner = () => {
    return (
        <div className='bg'>
        <h3 className='font-extrabold lg:text-5xl md:text-3xl lg:pt-48 md:pt-64 lg:pl-20 pt-16 ml-6'>Swiftly organize <br /> and conquer your <br /> daily tasks</h3>
        <Link to='/dashboard'>
        <button className='lg:mt-6 lg:ml-40 ml-6 btn bg-violet-500 border-0'>Let's Explore</button>
        </Link>
        
        </div>
    );
};

export default Banner;