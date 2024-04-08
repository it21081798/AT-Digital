import React from 'react';
import Search from '../assets/search.png';

const Section2 = () => {
    return (
        <div className='max-w-[1064px] h-auto mx-auto p-6'>
            <div className='flex items-center justify-between gap-[20px] md:flex-row flex-col-reverse'>
                <div className='flex flex-col gap-[20px] p-12 text-center sm:text-left justify-center md:justify-start w-full'>
                    <h3 className='text-[#6B3CC9] text-[27px] font-secondary font-semibold  justify-center md:text-left'>Digital Strategy Consulting</h3>
                    <p className='text-[16px] leading-[19.36px] font-primary font-normal'>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <button className='text-white uppercase font-semibold bg-[#F28D35] py-[12px] px-[20px] rounded-[4px] w-[129px] text-[14px] mx-auto md:mx-0'>Learn more</button>
                </div>
                <img width={414} height={416} src={Search} alt="Search" />
            </div>
        </div>
    )
}

export default Section2