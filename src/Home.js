import Aboutcompany from "./Aboutcompany";
import Client from "./Client";
import Footer from "./Footer";
import Hero from "./Hero";
import Herotwo from "./Herotwo";
import Navbar from "./Navbar";
import Testimonials from "./Testimonials";
const Home = () => {
    return (  
        <div>     
    <Hero/>
     <Herotwo/>
     <Aboutcompany/>
     <Testimonials/>
     <Client/>
    <Footer/>
        </div>
    );
}
 
export default Home;