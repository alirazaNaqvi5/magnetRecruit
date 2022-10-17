import Upwave from "../src/image/page2wave.png"
import BG from "../src/image/wwrbg.jpg";
import Downwave from "../src/image/page2wavedown.png";
import House from "../src/image/house.png";
import Headfon from "../src/image/headfon.png";
import Openmail from "../src/image/openmail.png";
import Footer from "./Footer";
const ContactUs = () => {
    return ( 
        <div className="w-full">
              <div className="bg-fixed "  
             style={{ backgroundImage: `url(${BG})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" } }>
                <img className="bg-transparent  w-full" src={Upwave} alt="/"  />
                <h1 className="text-white text-8xl text-center font-bold">Contact Us</h1>
                <img className="bg-transparent m-0 p-0 w-full" src={Downwave} alt="/" />
            </div>
            <div className="bg-[#14213D] py-6 ">
                <h1 className="text-4xl text-center text-white font-bold">We are here to assist you</h1>
               <p className="text-white text-center py-6"> Feel free to contact us or just drop a line here. Our support staff will<br/> reach you very soon.</p>
                <div className="lg:w-[1240px] sm:w-full sm:mx-10 m-auto">
                    <div className="lg:flex  sm:grid py-8 ">
                        <div className="lg:basis-1/2 sm:w-full py-6">
                            <h1 className="text-2xl py-8  text-[#fca311] font-bold" >CONTACT US</h1>
                            <div className=" lg:flex gap-8 py-2 sm:w-full">
                                <img className="w-[60px] h-[60px] mt-2" src={House} alt="" />
                                <h1 className="sm:hidden lg:block  text-white tracking-widest">3.1 UNIVERSAL SQUARE,<br/>
                                 DEVONSHIRE ST NORTH,<br/> MANCHESTER M12 6JH</h1>
                                 <h1 className="sm:py-10 sm:block lg:hidden sm:text-center  text-white tracking-widest">3.1 UNIVERSAL SQUARE,
                                 DEVONSHIRE ST NORTH,MANCHESTER M12 6JH</h1>
                            </div>
                            <div className=" lg:flex gap-8 py-2">
                                <img className="w-[60px] h-[60px] mt-2" src={Headfon} alt="" />
                                <h1 className=" text-white tracking-widest py-4">0161 974 6110</h1>
                            </div>
                            <div className=" lg:flex gap-8 py-2">
                                <img className="w-[70px] h-[80px] mt-2" src={Openmail} alt="" />
                                <h1 className=" text-white tracking-widest py-6">INFO@MAGNETRECRUIT.COM</h1>
                            </div>
                        </div>
                        <div className="basis-1/2">
                            <h1 className="text-2xl py-8  text-[#fca311] font-bold" >SEND IN YOUR QUERY</h1>
                            <div className=" sm:mx-14">
                                <p className="text-white pt-4">Email <span className="text-red-700">*</span></p>
                                <input type="text" className="lg:w-[600px] sm:w-full  h-2 py-4"  placeholder=""/>
                                <p className="text-white pt-4">Phone <span className="text-red-700">*</span></p>
                                <input type="text" className="lg:w-[600px] sm:w-full  h-2 py-4"  placeholder=""/>
                                <p className="text-white pt-4">First Name <span className="text-red-700">*</span></p>
                                <input type="text" className=" lg:w-[400px] sm:w-full h-2 py-4"  placeholder=""/>
                                <p className="text-white pt-4">Last Name <span className="text-red-700">*</span></p>
                                <input type="text" className="lg:w-[400px] sm:w-full h-2 py-4"  placeholder=""/>
                                <p className="text-white pt-4">Message <span className="text-red-700">*</span></p>
                                <textarea name="" id="" cols="40" rows="5" className=""></textarea>
                                <div className="sm:object-center sm:mx-auto">
                                <button className=" py-2 px-4 rounded-sm   mt-8 hover:bg-slate-500 font-bold hover:text-white  bg-slate-200 ">Submit Now</button>
                            </div>
                            </div>
             
                        </div>  
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default ContactUs;