
import Managment from "../src/image/managment.png";
import Arrow from "../src/image/arrow.png";
import Search from "../src/image/search.png";
import Nots from "../src/image/nots.png";

const Aboutcompany = () => {
    return ( 
        <div className=" bg-[#E5E5E5] lg:w-[100%] sm:w-[100%]">        
            <div className="w-[1340px] mx-auto sm:w-full">
                <div className=" lg:flex  lg:grid-cols-2 p-2 sm:grid-cols-1">
                    <div className=" p-2 m-2 text-center">
                        <img className="w-[150px] h-[150px] text-[#FCA311] m-auto" src={Managment} alt="/" />
                        <h1 className="text-[#FCA311] text-5xl  "> 7days</h1>
                        <p className="text-xl p-2">Average time for a job offer</p>
                    </div>
                    <div className="p-2 m-2 text-center">
                    <img className="w-[150px] h-[150px] text-[#FCA311] m-auto" src={Arrow} alt="/" />
                        <h1 className="text-[#FCA311] text-5xl  "> 7days</h1>
                        <p className="text-xl p-2">Payments Processing time</p>
                    </div>
                    <div className=" mt-20 pl-10 lg:block sm:hidden ">
                        <h1 className="text-4xl text-[#FCA311] font-bold">We work to help you burst at the<br/>
                         seams, to unleash the potential of<br/>
                          your work force</h1>
                    </div>
                </div>
                <div className="  lg:flex  lg:grid-cols-2 p-2 sm:grid-cols-1">
                    <div className="p-2 m-2 text-center">
                        <img className="w-[150px] h-[150px] text-[#FCA311] m-auto" src={Search} alt="/" />
                        <h1 className="text-[#FCA311] text-5xl  "> 38</h1>
                        <p className="text-xl p-2">Payments Processing time</p>
                    </div>
                    <div className="p-2 ml-[4.5rem] text-center">
                    <img className="w-[150px] h-[150px] text-[#FCA311] m-auto" src={Nots} alt="/" />
                        <h1 className="text-[#FCA311] text-5xl  "> 98%</h1>
                        <p className="text-xl p-2">Success rater</p>
                    </div>
                    <div className=" mt-20 pl-10 lg:hidden sm:block ">
                        <h1 className="text-4xl text-[#FCA311] font-bold">We work to help you burst at the<br/>
                         seams, to unleash the potential of<br/>
                          your work force</h1>
                    </div>
                    <div className="mt-0 pl-20  ">
                        <h1 className=" text-2xl justify-self-auto">
                        Our key objective is to build long-term, trusting and genuine<br/> relationships with
                        our Clients and Candidates and understand their<br/> goals, values, objectives and aims.
                        It’s only once we get to know your<br/> specific requirements that we can add value to 
                        your business via our<br/> team of expert Consultants, who are committed to deliver
                        the best<br/> service.
                        </h1>
                    </div>    
                </div>
              
            </div>

        </div>

     );
}
 
export default Aboutcompany;