
import Testwave from "../src/image/testwave.svg";

import Carosel from "./Carosel";
import Carosel2 from "./Carosel2";

const Testimonials = () => {
    return ( 
        <div className="w-full  bg-[#E5E5E5]">
            <div className="w-full">
                <img src={Testwave} alt="" />
            </div>
            <div className="bg-[#14213D] pb-6">
                <h1 className="text-6xl text-white font-bold text-center pb-6">Testimonials</h1>
                <div className="lg:w-[900px] sm:w-[640px] m-auto  h-[500px] ">
                    <Carosel/>
                </div>
            </div>
            <div className="lg:w-full  ">
                <Carosel2/>
            </div>
        </div>
     );
}
 
export default Testimonials;