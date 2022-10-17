import Upwave from "../src/image/page2wave.png"
import BG from "../src/image/wwrbg.jpg";
import Downwave from "../src/image/page2wavedown.png";
import Personone from "../src/image/person1.png";
import Persontwo from "../src/image/person2.png";
import Linkedin from "../src/image/linkedin.png";
import Mail from "../src/image/mail2.png";
import FemaleOne from "../src/image/woman1.png";
import FemaleTwo from "../src/image/woman2.png";
import CircleCheck from "../src/image/checkcircle.svg";
import User from "../src/image/user.png";
import ArrowRight from "../src/image/arrowright.png";
import CheesKing from "../src/image/cheesking.png";
import Tick from "../src/image/tick.png";
import MR from "../src/image/Mr.png";
import ArrowDown from "../src/image/downarrow.png";
import Footer from "./Footer";
import BGVid from "../src/image/gif-2.gif";
import Carosel2 from "./Carosel2";


const WhoweAre = () => {
    return ( 
     
        <div className="w-full overflow-hidden  ">
            <div className="bg-fixed h-"   style={{ backgroundImage: `url(${BGVid})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" } }>
                <img className="bg-transparent  w-full" src={Upwave} alt="/"  />
                <h1 className="text-white text-8xl text-center font-bold">Who We Are</h1>
                <img className="bg-transparent m-0 p-0 w-full" src={Downwave} alt="/" />
            </div>
       
           <div className="bg-[#14213D]  w-full overflow-hidden">
                <h1 className=" text-center text-6xl text-white font-bold">Meet The Team</h1>
            <div className="lg:w-[1240px] sm:max-w-full  sm:grid-cols-1  grid lg:grid-cols-2 gap-6  justify-center mx-auto my-10">    
                <div className="object-center">
                    <img className="object-center m-auto" src={Personone} alt="" />
                    <div className="py-6">
                    <h1 className=" text-center text-4xl text-[#FCA311] font-bold">Sam Hassan</h1>
                    <a href=""><h1 className="text-3xl text-white text-center text-bold">Founder</h1></a>
                    </div>
                    <div className="flex justify-center">
                        <img  className="w-10 h-10  mx-2" src={Linkedin} alt="/" />
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-12 fill-[#fca311]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div >
                        <div className="flex sm:border lg:border-none sm:mx-2">
                            <p className=" lg:w-[25%]   text-xl text-[#FCA311]  border   p-4 lg:border-b-0 ">About Sam</p>
                            <p className="w-[80%] border-b-2"></p>
                        </div>
                        <div className="sm:mx-2">
                            <p className="p-7   border  text-white border-t-transparent text-xl text-justify ">
                                Previously working for various companies as an Interim  
                                Recruitment Consultant, Sam decided to give up his status 
                                of employee and establish an honest organisation based on
                                the values he believes in. He founded Magnet Recruit in the
                                midst of the 2020 pandemic, with the aim of creating and
                                promoting a Culture within the recruitment industry that
                                puts Clients and Candidates first.
                            </p>
                        </div>
                        <div className="my-4 sm:border lg:border-none sm:mx-2">
                            <div className="flex ">
                                <p className=" w-[30%]  text-xl text-[#FCA311]  border  p-4 lg:border-b-0 ">His motto</p>
                                <p className="w-[80%] border-b-2"></p>
                            </div>
                            <div>
                                <p className="pr-80 py-10 w-full  border  text-white border-t-transparent text-xl text-justify ">
                                    “Begin with the end in mind”.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img className="m-auto" src={Persontwo} alt="" />
                    <div className="py-6">
                    <h1 className=" text-center text-4xl text-[#FCA311] font-bold">Dominic Jones</h1>
                    <a href=""><h1 className="text-3xl text-white text-center text-bold">Director</h1></a>
                    </div>
                    <div className="flex justify-center">
                        <img  className="w-10 h-10 mx-2 " src={Linkedin} alt="/" />
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-12 fill-[#fca311]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <div >
                        <div className="flex sm:border lg:border-none sm:mx-2">
                            <p className=" w-[35%]  text-xl text-[#FCA311]  border  p-4 lg:border-b-0 ">About Dominic</p>
                            <p className="w-[80%] border-b-2"></p>
                        </div>
                        <div className="sm:boder sm:mx-2">
                            <p className="p-8   border  text-white border-t-transparent text-xl text-justify ">
                                With extensive recruitment experience within the Food
                                Manufacturing & FMCG space, Dom has a strong eye for detail and 
                                will partner with Sam to give both existing and new clients best in
                                class support across Engineering, Operations, Technical and
                                Commercial disciplines, within both Perm and Interim contracts. 
                                Building relationships with both Clients and Candidates alike, is
                                what Dom strives for.
                            </p>
                        </div>
                    </div>
                    <div className="my-4 sm:border lg:border-none sm:mx-2">
                        <div className="flex">
                            <p className=" w-[30%]   text-xl text-[#FCA311]  border  p-4 lg:border-b-0 ">His motto</p>
                            <p className="w-full border-b-2"></p>
                        </div>
                        <div>
                            <p className="pr-72 py-10 text-left border  text-white border-t-transparent text-xl  ">
                                “Begin with the end in mind”.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full ">           
                <div className="lg:w-[1240px] sm:max-w-full   lg:grid grid-cols-2 gap-6  justify-center mx-auto my-10">    
                    <div>
                        <img className="object-center m-auto" src={FemaleOne} alt="" />
                        <div className="py-6">
                        <h1 className=" text-center text-4xl text-[#FCA311] font-bold">Suzanne Malik</h1>
                        <a href=""><h1 className="text-3xl text-white text-center text-bold">Recruitment Consultant & Account Manager</h1></a>
                        </div>
                        <div className="flex justify-center">
                            <img  className="w-10 h-10  mx-2" src={Linkedin} alt="/" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-12 fill-[#fca311]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div >
                        <div className="flex sm:border lg:border-none sm:mx-2">
                            <p className=" w-[30%]  text-xl text-[#FCA311]  border  p-3 lg:border-b-0 ">About Suzanne</p>
                            <p className="w-[80%] border-b-2"></p>
                        </div>
                        <div className="sm:mx-2">
                            <p className="p-7  border  text-white border-t-transparent text-xl text-justify ">
                                With a strong background in law and Client Relationship
                                management, Suzanne joined the magnet team ready to start an
                               exciting journey and in need of a new challenge. With her positive
                                mindset and enthusiastic character, she has already developed an
                                excellent network within the industry.  Suzanne is very passionate
                                about health, wellbeing and lifestyle coaching.
                             </p>
                        </div>
                        <div className="my-4 sm:border lg:border-none sm:mx-2">
                        <div className="flex ">
                            <p className="  text-xl text-[#FCA311]  border w-44  p-4 lg:border-b-0 ">Her motto</p>
                            <p className="w-full border-b-2"></p>
                        </div>
                        <div>
                        <p className="py-10 border  text-white border-t-transparent text-xl  ">
                        “Vision without action is a daydream”.
                            </p>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div>
                        <img className="object-center m-auto" src={FemaleTwo} alt="" />
                        <div className="py-6">
                        <h1 className=" text-center text-4xl text-[#FCA311] font-bold">Yasmine Boubakir</h1>
                        <a href=""><h1 className="text-3xl text-white text-center text-bold">Accounts Administrator</h1></a>
                        </div>
                        <div className="flex justify-center">
                            <img  className="w-10 h-10 mx-2" src={Linkedin} alt="/" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-12 fill-[#fca311]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                        </div>
                        <div >
                        <div className="flex sm:border lg:border-none sm:mx-2">
                            <p className=" w-[30%]  text-xl text-[#FCA311]  border  p-4 lg:border-b-0 ">About Yasmin</p>
                            <p className="w-[80%] border-b-2"></p>
                        </div>
                        <div className="sm:mx-2">
                            <p className="p-8   border  text-white border-t-transparent text-xl text-justify ">
                                Yas recently joined Magnet Recruit to take over the administrative
                                side of the business and manage all things accounting and
                                invoicing. While simultaneously conducting her doctoral research
                                in the field of languages and human sciences, she runs the back
                                office and operates behind the scenes to put systems of
                                organisation in place.<br/>
                            </p>
                        </div>
                        <div className="my-4 sm:border lg:border-none sm:mx-2">
                        <div className="flex">
                            <p className="    text-xl text-[#FCA311] w-44 border  p-4 lg:border-b-0 ">Her motto</p>
                            <p className=" w-full border-b-2"></p>
                        </div>
                        <div className="lg:mx-0 sm:mx-2">
                            <p className=" py-10 text-left border  text-white border-t-transparent text-xl  ">
                                “Always under-promise and over-deliver”.
                            </p>
                        </div>
                         </div>
                        </div>
                    </div>
                </div>
            <div className="w-[1240px] sm:hidden  py-44 m-auto">
                <div>
                <h1 className="text-8xl font-bold text-[#FCA311] text-center">How do we recruit<br/> people?</h1>
                </div>
                <div className="m-auto justify-center w-[600px]">    
                <div  className="  text-white pt-12 flex">
                    <img className="h-12 w-12  " src={CircleCheck} alt="/" />
                    <a href=""><h1 className="text-2xl font-bold py-2 px-4 hover:text-[#FCA311]">We ask the difficult question</h1></a>
                </div>
                <div  className="  text-white py-2 flex">
                    <img className="h-12 w-12 " src={User} alt="/" />
                    <a href=""><h1 className="text-2xl font-bold py-2 px-4 hover:text-[#FCA311]">We only put the best candidates in<br/> front of you.</h1></a>
                </div>
                <div  className="  text-white py-2 flex">
                    <img className="h-12 w-12 " src={ArrowRight} alt="/" />
                    <a href=""><h1 className="text-2xl font-bold py-2 px-4 hover:text-[#FCA311]">We look for long-term partnerships.</h1></a>
                </div>
                <div  className="  text-white py-2 flex">
                    <img className="h-12 w-12 " src={CheesKing} alt="/" />
                    <a href=""><h1 className="text-2xl font-bold py-2 px-4 hover:text-[#FCA311]">We specialise in what we do.</h1></a>
                </div>
                <div  className="  text-white py-2 flex">
                    <img className="h-12 w-12 " src={Tick} alt="/" />
                    <a href=""><h1 className="text-2xl font-bold py-2 px-4 hover:text-[#FCA311]">We ensure every candidate we<br/>
                        represent, can do that role.</h1></a>
                </div>
            </div>    
            </div>
            </div>
            <div className="lg:w-[1240px] sm:w-full justify-center sm:py-6 m-auto ">
                <h1 className="text-[#fca311] text-2xl text-center py-2 font-bold">RECRUITMENT</h1>
                <h1 className="text-white lg:text-6xl sm:text-4xl text-center font-bold py-2">Our Recruitment Process</h1>
           </div>
           <div className="w-[1340px] mt-10 m-auto gap-10 sm:hidden lg:grid grid-cols-3 py-20">
                <div className="grid ">
                <div className="h-56"></div>
                    <h1 className="text-[#fca311] px-4 text-2xl text-justify py-2 font-bold">04. THE PROCESSING</h1>
                    <h1 className=" border-b-2 w-96 m-auto"></h1>
                    <h1 className="py-6 text-white text-2xl justify-center pl-8">
                    We will manage the entire process that follows the interview stage. From feedback, to offers and referencing, we will take over to save you time and enable you to focus on the essential instead.
                    </h1>
                    <img className="rotate-180 place-self-center w-[200px] h-[170px]" src={ArrowDown} alt="" />
                </div>
                <div>
                    <h1 className="text-center text-[#fca311] text-2xl font-bold ">01. THE CONSULTATION</h1>
                    <h1 className=" border-b-2 pt-20 w-96 m-auto"></h1>
                    <div className=" grid place-content-center">
                         <h1 className="py-6 text-white text-2xl justify-center pl-8">
                            We will take a dive into your<br/>
                            Company, Culture, values and<br/>
                            roles’ requirement to gain an in-<br/>
                            depth understanding of the vacancies.
                            </h1>
                    </div>
                    <div className=" grid place-content-center">
                        <img className=" mb-24 pt-10" src={MR} alt="" />
                        <h1 className="text-center text-[#fca311] text-2xl font-bold ">03. THE ASSESSMENT</h1>
                    <h1 className=" border-b-2 pt-20 w-96 m-auto"></h1>
                    <h1 className="break-all pt-10 px-10 text-white text-2xl justify-center pl-8">We will thoroughly review, shortlist and outline the most relevant applicants to go through to the interview stage.</h1>
                    </div>
                </div>
                <div className="grid">
                    <img className="place-self-center" src={ArrowDown} alt="/" />
                    <h1 className="text-justify px-4 pt-20 text-[#fca311] text-2xl font-bold ">02. THE RESOURCING</h1>
                    <h1 className=" border-b-2 mt-24  w-96 m-auto"></h1>
                    <h1 className="break-all pt-10 px-10 text-white text-2xl justify-center pl-8">Our Consultants will then source the best-suited candidates for your requirements. Our research process is based on our knowledge of the industry and awareness of Candidates availabilities, as well as our extensive network and database.</h1>
                </div>  
           </div>
           </div>
           <div className="w-full mt-18 ">
                <Carosel2/>
            </div>  
            <Footer/>
        </div>
     );
}
 
export default WhoweAre;