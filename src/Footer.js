import Logo from "../src/image/logo.png";
import Map from "../src/image/map1.png";
import Call from "../src/image/call1.png";
import Mail from "../src/image/mail2.png";
import Facebook from "../src/image/facebook.png";
import Twitter from "../src/image/twitter.png";
import Linkedin from "../src/image/linkedin.png";
import Mapimage from "../src/image/map.JPG";



const Footer = () => {
    return ( 
        <div className="bg-[#14213D] py-5 ">
            <div className="w-[1350px] ">
                <img className=" w-[500px] h-[90px] sm:mx-28" src={Logo} alt="/" />
            </div>
            <div className="lg:flex px-8 lg:gap-14 py-8   lg:m-auto sm:grid sm:items-center">
                <div>
                    <div className=" lg:grid sm:grid  p-4">
                        <h1 className="text-white text-3xl sm:text-center ">Get in Touch</h1>
                    </div>
                    <div  className="flex sm:h-full sm:px-4 lg:w-[80%] ">
                        <img className="w-14 h-14 fill-white mt-2" src={Map} alt="" />
                        <h1 className="text-white sm:w-full text-xl ml-6 p-2">3.1 Universal Square, Devonshire St North, Manchester M12 6JH</h1>
                    </div>
                    <div className="flex sm:h-full sm:px-4 lg:w-[80%] ">
                        <img className="w-16 h-16 fill-white " src={Call} alt="" />
                        <a href=""><h1 className="text-white text-xl ml-6 p-2">01619746110</h1></a>
                    </div>
                    <div className="flex sm:h-full sm:px-4 lg:w-[80%] ">
                        <img className="w-14 h-14 fill-white" src={Mail} alt="/" />
                        <a href=""><h1 className="text-white text-xl ml-6 p-2">info@magnetrecruit.com</h1></a>
                    </div>
                    <div className="flex sm:grid">
                    <h1 className="text-xl font-bold text-white sm:text-center">Interact with Us on Social Media</h1>
                    </div>
                    <div className="flex lg:justify-between lg:w-[50%] lg: sm:justify-center sm:gap-20 lg:gap-5 sm:m-auto sm:py-10">
                        <a href=""> <img className="lg:w-10 lg:h-10 bg-white rounded-md hover:bg-[#fca311]" src={Facebook} alt="/" /></a>
                        <a href=""> <img className="w-10 h-10 bg-white rounded-md hover:bg-[#fca311]" src={Twitter} alt="/" /></a>
                        <a href=""> <img  className="w-10 h-10 bg-white rounded-md hover:bg-[#fca311]" src={Linkedin} alt="/" /></a>
                    </div>
                </div>
                {/*.................. only visible in small screen.................. */}
                <div className="  sm:w-full sm:m-auto sm:block lg:hidden ">
                    <div className="  sm:m-auto">
                        <img className="w-full h-full sm:m-auto " src={Mapimage} alt="/" />
                    </div>
                </div>
                {/* small screen map end */}
                <div className="flex-1 ">
                <div>
                    <h1 className="text-white text-3xl sm:text-center sm:py-4 ">Quick Links</h1>
                </div>
                <div className="lg:flex lg:w-[200px] mt-4">
                    <ul className=" text-xl text-bold text-white py-2 lg:text-justify sm:text-center sm:m-auto">
                       <a href=""> <li className="px-1 text-[#fca311]">Magnet Recruit</li ></a>
                       <a href=""><li className="p-2 text-white  hover:text-[#fca311]">Who We Are</li ></a>
                       <a href=""><li className="p-2 text-white  hover:text-[#fca311]">Clients</li ></a>
                       <a href=""><li className="p-2 text-white  hover:text-[#fca311]">Candidates</li ></a>
                       <a href=""><li className="p-2 text-white  hover:text-[#fca311]">Search Jobs</li ></a>
                       <a href=""><li className="p-2 text-white  hover:text-[#fca311]">Contact Us</li ></a>
                    </ul>
                </div>
                </div>
                <div className=" w-[50%] sm:w-full sm:hidden lg:block ">
                    <div className=" mt-10">
                        <img className="w-[500px] h-[300px] ml-5" src={Mapimage} alt="/" />
                    </div>
                </div>
            </div>
            <div className=" lg:py-6 sm:py-1 px-8 w-[700px] m-auto lg:flex  sm:grid  items-center  ">
             <ul className="lg:flex sm:grid sm:text-center  lg:gap-24 text-white">
                 <a href=""><li className="p-4  ">Privacy Policy</li></a>
                 <a href=""><li className="p-4  ">Cooki Policy</li> </a>
                 <a href=""><li className="p-4   ">Retention Policy</li></a>

             </ul>    
             
         </div>
         <h1 className="text-white text-center text-xl">Copyright © 2022 Magnet Recruit Limited. All Rights Reserved.</h1>
        </div>
     );
}
 
export default Footer;