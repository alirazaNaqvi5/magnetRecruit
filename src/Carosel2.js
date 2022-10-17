
import Carousel, { consts } from 'react-elastic-carousel';
import Slide1 from "../src/image/slide-1.png";
import Slide2 from "../src/image/slide-2.png";
import Slide3 from "../src/image/slide-3.png";
import Slide4 from "../src/image/slide-4.png";
import Slide5 from "../src/image/slide-5.png";
import Slide6 from "../src/image/slide-6.png";
import Slide7 from "../src/image/slide-7.png";
import Slide8 from "../src/image/slide-8.png";
import Slide9 from "../src/image/slide-9.png";
import Slide10 from "../src/image/slide-10.png";
import "./SliderStyle.css";
const Carosel2 = () => {

    const breakPoints = [
        { width: 1, itemsToShow: 2 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 900, itemsToShow: 3 },
      ];
    const styleDots =[

    ]  
    
        
    return ( 
        <div>
           <Carousel enableAutoPlay autoPlaySpeed={2000}  breakPoints={breakPoints} 
             className='flex relative p-4 bg-white'>
                
                    <img src={Slide1} alt="/" />
                    <img src={Slide2} alt="/" />
                    <img src={Slide3} alt="/" />
                    <img src={Slide4} alt="/" />
                    <img src={Slide5} alt="/" />
                    <img src={Slide6} alt="/" />
                    <img src={Slide7} alt="/" />
                    <img src={Slide8} alt="/" />
                    <img src={Slide9} alt="/" />
                    <img src={Slide10} alt="/" />
              
           </Carousel>
        </div>
     );
}
 
export default Carosel2;