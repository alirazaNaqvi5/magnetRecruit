
import Video from "../src/image/bgvid.mp4";
import Typewriter from "typewriter-effect";
import BGVid from "../src/image/gif-2.gif";
const Hero = () => {
    return ( 
        
        <div className=" container max-w-full" >  
            <div  style={{ backgroundImage: `url(${BGVid})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" } }
             className="mt-[-100px] h-screen w-full  mx-auto text-center items-center flex flex-col justify-center bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className=" text-4xl font-bold text-white">
                    <Typewriter
                    onInit={(typewriter)=> {
                    typewriter
                    .typeString("We are Food")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("We are Oprations")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(" We are Capitals Projects")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("We are FMCG")
                    .start();
                    }}
                    /> 
                </div>
                    <button className=" text-2xl  text-white bg-transparent font-bold border-[4px]   py-2  border-white-500 mx-auto mt-6 w-[400px] h-[100px] hover:border-[#fca311] ease-in duration-150
                        transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
                    ">I'M LOOKING FOR A JOB </button>
                 <button className=" text-2xl  text-white bg-transparent font-bold border-[4px]   py-2  border-white-500 mx-auto mt-6 w-[400px] h-[100px] hover:border-[#fca311] ease-in duration-150
                        transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300
                    ">I'M HIRING </button>
            </div>
            
        </div>
     );
}
 
export default Hero;
//        <video loop muted className="abolute w-full " src={Video}></video>