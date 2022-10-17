import Image from '../src/image/logo.png';
import { Link } from "react-router-dom";
import { useState } from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  }
    return (
          <div className=" w-full bg-[#14213d]">
            <div className="flex  bg-[#14213D]  py-4 px-8 top-0  justify-between " >
              <Link to="/"><img className='w-[400px] h-[70px]    ' src={Image} alt="/" /></Link>
              <ul className="md:flex sm:hidden  lg:flex  text-white justify-between  ">
                <Link to="WhoweAre"> <li className="p-4 text-xl font-bold ">Whow We are</li></Link>
                <Link to="Clients"><li className="p-4 text-xl font-bold">Clients </li></Link>
                <Link to="Candidate"><li className="p-4 text-xl font-bold">Candidates</li></Link>
                <Link to="SearchJob"><li className="p-4 text-xl font-bold">Search Jobs</li></Link>
                <Link to="ContactUs"><li className="p-4 text-xl font-bold">Contact Us</li></Link>
    
              </ul>

              <div onClick={handleNav} className='sm:block md:hidden lg:hidden'>
                {!nav ? <AiOutlineClose size={30} className="fill-white"/>: <AiOutlineMenu size={30} className="fill-white"/>}
              </div>
              <div className={!nav ? "  fixed left-0 top-0 text-white  w-[30%] ease-in-out duration-500 bg-[#14213d] ":'fixed left-[-100%]' }>
                  <ul className="pt-24 ">
                  <Link to="WhoweAre"> <li className="p-4 text-xl font-bold ">Whow We are</li></Link>
                  <Link to="Clients"><li className="p-4 text-xl font-bold">Clients </li></Link>
                  <Link to="Candidate"><li className="p-4 text-xl font-bold">Candidates</li></Link>
                  <Link to="SearchJob"><li className="p-4 text-xl font-bold">Search Jobs</li></Link>
                  <Link to="ContactUs"><li className="p-4 text-xl font-bold">Contact Us</li></Link>
                </ul>
            </div>
            </div>
            
              
        </div>
      );
}
 
export default Navbar;