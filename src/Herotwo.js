

import Location from '../src/image/location.png';
import Bottomwave from '../src/image/bottomwave.svg';
import Bwave from '../src/image/bwave.svg';
const Herotwo = () => {
    return ( 
      <div className=' bg-[#44494b] w-full overflow-hidden'>
        <div className='bg-[#022a5b]'>
        <div className="  background-repeat: no-repeat">
          <h1 className='text-5xl text-white font-bold py-4 text-center'>We Specialise in Everything We Do</h1>
        </div>
        <div className=" grid lg:grid-cols-2 sm:grid-cols-1 sm:text-center lg:-w-[1240px] sm:w-[1240px]  overflow-x-hidden">
          <div className='pl-4'>
            <div className="p-4 sm:align-items-center ">
              <p className="text-white  text-xl text-justify ">
              Based in Manchester, we recruit entry, middle and senior level<br/>
              professionals into Food and FMCG businesses nationwide. Also, <br/>
              we’re really good at it!<br/>
              </p>
            </div>  
            <div className="p-4 text-center">
              <p className="text-white  text-xl text-justify">
              Based in Manchester, we recruit entry, middle and senior level<br/>
              professionals into Food and FMCG businesses nationwide. Also, <br/>
              we’re really good at it!<br/>
              </p>
            </div>
            <div className="p-4 text-center">
              <p className="text-white  text-xl text-justify">
              Based in Manchester, we recruit entry, middle and senior level<br/>
              professionals into Food and FMCG businesses nationwide. Also, <br/>
              we’re really good at it!<br/>
              </p>
            </div>
            </div>  
            <div className='lg:grid lg:grid-cols-1  '>
                <div className='sm:w-[640px]'>
                  <img  className=' sm:items-center sm:m-auto sm:w-[300px] sm:h-[300px]'src={Location} alt="/" />
                </div>
              
            <div className='lg:grid lg:grid-cols-1 '>
              <p className='text-white  text-xl text-justify sm:pl-8'>
                    At Magnet Recruit, we do not pretend to specialise in everything, <br/>
                  everywhere. Instead, we do claim to know the food industry and we<br/>
                    have worked with hundreds of people, who will tell you the same. 
              </p>
              <p className='text-white  text-xl text-justify pt-4 sm:pl-8'>
              We believe that your business is only as strong as its people and we<br/>
               are committed to help you build a high calibre team with the best<br/>
                Candidates, who will not only fit your job specifications, but also fit<br/>
                 your Culture and embody your core values.
              </p>
            </div>
            </div>
        </div>
        <div className='bg-[#E5E5E5]'>
              <img className='sm:w-full' src={Bwave} alt="/" />
            </div>
        </div>
        
      </div>
           
       
     );
}
 
export default Herotwo;