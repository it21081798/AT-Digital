import Hero from "../assets/image.png"

import React from 'react';


const Home = () => {
    const backgroundStyle = {
      backgroundImage: `url(${Hero})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      
    };
  
    return (
      <div className=' w-screen h-[448px] md:h-[700px] relative' style={backgroundStyle}>
        <div>
          <img className='w-screen md:hidden max-w-[668px] max-h-[500px]' src={Hero} alt="" />
        </div>
        <div className=' lg:mt-0 mx-auto absolute bottom-0 left-0 lg:left-[60px] lg:top-[354px] lg:w-[630px] w-screen h-auto md:h-[306px] bg-gradient-to-l from-[#1CBDDD] to-[#4DCA79] px-[40px] py-[24px]'>
          <p className='text-[36px] leading-[36px] md:text-[48px] text-white md:leading-[48px] font-primary font-bold'>We crush your competitors, goals, and sales records - without the B.S.</p>
          <button className='bg-[#F28D35] rounded-[4px] font-medium text-[14px] text-white py-[12px] px-[20px] uppercase mt-4 '>Get free consultation</button>
        </div>
      </div>
    );
  }
  
  export default Home;
  
