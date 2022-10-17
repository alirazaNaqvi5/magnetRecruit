import Upwave from "../src/image/page2wave.png"
import BG from "../src/image/wwrbg.jpg";
import Downwave from "../src/image/page2wavedown.png";
import Pie from "../src/image/pie.svg";
import Manlocate from "../src/image/manlocate.png";
import Bill from "../src/image/bill.png";
import Slider from "../src/image/slider.png";
import Laptop from "../src/image/laptop1.jpg";
import Speedometer from "../src/image/speedometer.png";
import Carsoul2 from "../src/image/carsoul2.JPG";
import Footer from "./Footer";
import Carosel2 from "./Carosel2";
const Clients = () => {
    return ( 
        <div className="w-full  ">
            <div className="bg-fixed "   style={{ backgroundImage: `url(${BG})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" } }>
                <img className="bg-transparent  w-full" src={Upwave} alt="/"  />
                <h1 className="text-white text-8xl text-center font-bold">Clients</h1>
                <img className="bg-transparent m-0 p-0 w-full" src={Downwave} alt="/" />
            </div>
            <div className="w-full py-10 lg:px-24 sm:px-2 ">
                <h1 className="lg:text-5xl sm:text-3xl  break-all subpixel-antialiased ">Magnet Recruit offer a variety of services based<br/> on your specific needs and requirements.</h1>
            </div>
            <div className="grid lg:grid-cols-4 p-2 lg:w-[1300px] gap-10 m-auto">
                <div>
                    <h1 className="text-6xl my-4 text-center text-[#fca311]">Interim</h1>
                <div className="drop-shadow-2xl border">    
                    <img className="h-14 w-14 my-6 place-self-center m-auto " src={Pie} alt="/" />
                    <p className="text-2xl text-center font-bold py-4">INTERIM</p>
                    <p className=" text-center font-normal px-6 text-gray-500 text-2xl leading-loose">Drawing on our deep industry knowledge and large network, we will put the best individuals in front of you. Whether it’s short-term interim support during seasonal peaks or the right person for your project, our Interim Consultants team will ensure to facilitate the delivery of your assignment with the most appropriate contractors.</p>
                </div>
                </div>
                <div>
                    <div className="h-52"></div>
                    <h1 className="text-6xl my-4 text-center text-[#fca311]">Perm</h1>
                <div className="drop-shadow-2xl border">    
                    <img className="h-14 w-14 my-6 place-self-center m-auto " src={Manlocate} alt="/" />
                    <p className="text-2xl text-center font-bold py-4">PERMANENT PLACEMENTS</p>
                    <p className=" text-center font-normal px-6 text-gray-500 text-2xl leading-loose">Our permanent recruitment experts will guarantee you the best individuals who will strengthen your operation and take it to the next level. Always putting your Culture and values at the forefront whilst simultaneously ensuring a high-level professional performance that surpasses your expectations.</p>
                </div>
                </div>
                <div>
                    <div className="h-96"></div>
                    <h1 className="text-6xl my-4 text-center text-[#fca311]">Retained</h1>
                <div className="drop-shadow-2xl border">    
                    <img className="h-14 w-14 my-6 place-self-center m-auto " src={Bill} alt="/" />
                    <p className="text-2xl text-center font-bold py-4">RETAINED ROLES</p>
                    <p className=" text-center font-normal px-6 text-gray-500 text-2xl leading-loose">Our permanent recruitment experts will guarantee you the best individuals who will strengthen your operation and take it to the next level. Always putting your Culture and values at the forefront whilst simultaneously ensuring a high-level professional performance that surpasses your expectations.</p>
                </div>
                </div>
                <div>
                    <div className="h-52"></div> <div className="h-52"></div> <div className="h-52"></div>
                    <h1 className="text-6xl my-4 text-center text-[#fca311]">Bespoke</h1>
                <div className="drop-shadow-2xl border">    
                    <img className="h-14 w-14 my-6 place-self-center m-auto rotate-90 " src={Slider} alt="/" />
                    <p className="text-2xl text-center font-bold py-4">BESPOKE PACKAGES</p>
                    <p className=" text-center font-normal px-6 text-gray-500 text-2xl leading-loose">Our permanent recruitment experts will guarantee you the best individuals who will strengthen your operation and take it to the next level. Always putting your Culture and values at the forefront whilst simultaneously ensuring a high-level professional performance that surpasses your expectations.</p>
                </div>
                </div>
            </div>
            <div className="pt-6  bg-[#14213D] absolut  " style={{ backgroundImage: `url(${Laptop})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" } } >
                    <div className="bg-[#14213D] lg:opacity-80 sm:opacity-99 ">
                        <div className="lg:w-[1240px] p lg:m-auto">
                            <div className="py-20">
                                <img className="place-self-center m-auto w-[150px] h-[150px] bg-[#fca311]  rounded-full p-3 " src={Speedometer} alt="/" />
                            </div>
                            <div>
                                <h1 className="lg:text-8xl sm:text-5xl text-[#fca311] text-center font-bold">Fast. Reliable. Facile.</h1>
                            </div>
                            <div className="py-12">
                                <h1 className="lg:text-5xl sm:text-4xl text-white text-center">We guarantee quality, every single time. </h1>
                            </div>
                            <div className=" text-white sm:mx-20  lg:mx-40 text-2xl">
                                <h1>We are leaders in:</h1>
                                <ul className="list-disc lg:place-self-center pl-4 py-4 ">
                                    <li className="list-disc py-2">Quality over quantity.</li>
                                    <li className="list-disc py-2">Unrivalled market knowledge.</li>
                                    <li className="list-disc py-2">Providing the highest calibre of candidates. </li>
                                </ul>
                            </div>
                            <div className="h-36"></div>
                        </div>
                    </div>
                </div>
            <div className="bg-[#14213D] py-8 lg:w-full sm:grid">
                <div className=" lg:flex lg:flex-row lg:w-[1240px] m-auto gap-10 py-8">
                    <div className="basis-1/2 sm:py-6">
                        <h1 className="text-white lg:text-5xl sm:text-3xl sm:text-center sm:m-auto">Send your CV to us. Let us<br/> handle the rest.</h1>
                    </div>
                    <div className="basis-1/2 place-items-center">
                        <button className="px-14 py-4 rounded-md ml-28 mt-8 hover:bg-[#fca311] font-bold hover:text-white  bg-slate-200 ">Send CV</button>
                    </div>
                </div>
            </div>
            <div className="w-full ">
                <Carosel2/>
            </div>
            <Footer/>
        </div>    
     );
}
 
export default Clients;