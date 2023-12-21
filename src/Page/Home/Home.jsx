import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Targetaudience from "../TargetAudience/Targetaudience";


const Home = () => {
    return (
        <div>
           <Navbar></Navbar>
           <Banner></Banner>
           <Targetaudience></Targetaudience>
           <Footer></Footer>
        </div>
    );
};

export default Home;