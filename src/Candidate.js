import Upwave from "../src/image/page2wave.png"
import BG from "../src/image/wwrbg.jpg";
import Downwave from "../src/image/page2wavedown.png";
import Candidatewave from "../src/image/candidatewavedown.svg";
import Building from "../src/image/building.png";
import Chaire from "../src/image/chairs.JPG";
import Accordion from "./Accordion";
import Woman from "../src/image/woman.jpg";
import Managment from "../src/image/managment.png";
import Arrow from "../src/image/arrow.png";
import Search from "../src/image/search.png";
import Nots from "../src/image/nots.png";
import Location from '../src/image/location.png';
import Carsoul2 from "../src/image/carsoul2.JPG";
import Footer from "./Footer";
import CountUp from 'react-countup';
import Carosel2 from "./Carosel2";

const Candidate = () => {
    return ( 
        <div className="w-full">
            <div className="bg-fixed "  
             style={{ backgroundImage: `url(${BG})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" } }>
                <img className="bg-transparent  w-full" src={Upwave} alt="/"  />
                <h1 className="text-white text-8xl text-center font-bold">Candidate</h1>
                <img className="bg-transparent m-0 p-0 w-full" src={Downwave} alt="/" />
            </div>
           <img className="bg-transparent absolute" src={Candidatewave} alt="" />
           <div className="pt-28"></div>
            <div  className="grid lg:grid-cols-2 sm:grid-cols-1">
                <div className="p-20">
                    <h1 className="text-[#fca311] text-4xl  ">YOUR FUTURE STARTS HERE</h1> 
                    <p className="text-xl leading-loose sm:text-center py-8">At Magnet Recruit, we focus on allowing our Candidates to<br/>
                    exploit their potential to its fullest, by offering them the most<br/>
                    suitable opportunities. Your growth is what drives us everyday<br/> 
                    and our Consultants will always make sure to highlight the<br/> value you can add to our Clients.</p>
                  </div>  
                <div className="lg:grid sm:hidden">
                    <img src={Building} alt="" />
                </div>                 
            </div>
            <div className="lg:w-full bg-[#14213D]">
                <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:w-[1240px] m-auto">
                    <div className="py-14">
                        <img className="sm:mx-auto" src={Chaire} alt="" />
                    </div>
                    <div className="py-14">
                        <h1 className="text-[#fca311] tracking-widest sm:text-center p-4">OUR PLACEMENT SERVICES</h1>
                        <h1 className="text-[#fca311] tracking-wider sm:text-center text-3xl text-justify py-8 leading-loose">MAXIMISE YOUR OPPORTUNITIES WITH<br/> MAGNET RECRUIT</h1>
                        <div className="pt-14 sm:mx-10 sm:px-10  pb-10">
                            <Accordion/>
                         </div>
                    </div>
                    
                </div>
            </div>
            <div> < img className="absolute" src={Candidatewave} alt="" /> </div>
            <div className="lg:w-full bg-slate-50 " > 
                <div className="lg:flex  lg:m-auto lg:justify-between  gap-10">
                    <div className="  pt-60 px-14 lg:bg-none sm:bg-[url('../src/image/woman.jpg')] ">
                        <h1 className="text-[#fca311] text-2xl font-semibold">OUR RIGOROUS PROCESS IS PROVEN TO GET YOU THE TOP TALENT</h1>
                        <div className="py-6 ">
                            <h1 className="text-xl border-b-2 border-b-orange-400  py-1 text-gray-800">EXPERIENCE</h1>
                        </div>
                        <div className="py-6 ">
                            <h1 className="text-xl border-b-2 border-b-orange-400  py-1 text-gray-800">COLLABORATION</h1>
                        </div>
                        <div className="py-6 ">
                            <h1 className="text-xl border-b-2 border-b-orange-400  py-1 text-gray-800">NETWORKING</h1>
                        </div>
                    </div>
                    <div  className="sm:hidden lg:block">
                        <img src={Woman} alt="" />
                    </div>                   
                </div>
                </div>
             <div className="bg-[#14213D] ">
             <div className="py-12 lg:w-[1240px] grid lg:grid-cols-5 sm:grid-cols-1 sm:w-full m-auto">   
                <div className="sm:m-auto">
                    <img className="lg:w-[150px] lg:h-[150px]  " src={Managment} alt="/" />
                    <h1 className="text-[#fca311] w-[150px] h-[150px] sm:text-center text-6xl lg:pl-12 sm:m-auto font-bold "><CountUp  start={0} end={3} duration={2} /></h1>
                    <h1 className="text-2xl sm:m-auto sm:text-center text-white font-bold">Weekly Successes</h1>
                </div>
                <div className="sm:m-auto">
                     <img className="lg:w-[150px] lg:h-[150px]  " src={Location} alt="/" />
                     <h1 className="text-[#fca311] w-[150px] h-[150px] sm:text-center text-6xl lg:pl-12 sm:m-auto font-bold"><CountUp  start={0} end={8} duration={2}/></h1>
                     <h1 className="text-2xl sm:m-auto sm:text-center text-white font-bold">Global Clients</h1>
                </div>
                <div className="sm:m-auto">
                    <img className="lg:w-[150px] lg:h-[150px] " src={Nots} alt="/" />
                    <h1 className="text-[#fca311] w-[150px] h-[150px] sm:text-center text-6xl lg:pl-12 sm:m-auto font-bold"><CountUp  start={0} end={100} duration={2}/>%</h1>
                    <h1 className="text-2xl sm:m-auto sm:text-center text-white font-bold">Success (on retained)</h1>
                </div>
                <div className="sm:m-auto">
                    <img className="lg:w-[150px] lg:h-[150px] " src={Search} alt="/" />
                    <h1 className="text-[#fca311] w-[150px] h-[150px] sm:text-center text-6xl lg:pl-12 sm:m-auto font-bold"><CountUp  start={0} end={24} duration={2}/>H</h1>
                    <h1 className="text-2xl sm:m-auto sm:text-center text-white font-bold">Customer Service</h1>
                </div>
                <div className="sm:m-auto">
                    <img className="lg:w-[150px] lg:h-[150px]  " src={Arrow} alt="/" />  
                    <h1 className="text-[#fca311] w-[150px] h-[150px] sm:text-center text-6xl lg:pl-12 sm:m-auto font-bold"><CountUp  start={0} end={100} duration={2}/>%</h1>
                    <h1 className="text-2xl sm:m-auto sm:text-center text-white font-bold">Client Satisfaction</h1>
                </div>
            </div>
            </div>    
             <div >
                <img src={Candidatewave} alt="" />
                <Carosel2/>
             </div>
             <div className="bg-[#14213D] py-10">
                <h1 className=" text-center text-2xl text-slate-300 font-bold">SEND IN YOUR CV</h1>
                <div className="items-center grid justify-center py-12">
                <button className="items-center m-auto px-14 py-4 rounded-md   hover:bg-[#fca311] font-bold hover:text-white  bg-slate-200 ">Send CV</button>
                </div>
             </div>
             <Footer/>
        </div>
     );
}
 
export default Candidate;