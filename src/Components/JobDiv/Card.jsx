import React from 'react'

import { BiTimeFive } from 'react-icons/bi';

export default function Card({item}) {

    return (
        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg hover:cursor-pointer">
            <span className='flex justify-between items-center gap-4'>
                <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{item.title}</h1>
                <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive />{item.time}
                </span>
            </span>
            <h6 className='text-[#ccc]'>{item.location}</h6>
            <p className='text-[13px] text-[#9595995] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {item.desc}
            </p>
            <div className='company flex items-center gap-2'>
                <img src={item.image} alt="logo" className='w-[10%]'/>
                <span className='text-[14px] py-[1rem] bloxk group-hover:text-white'>{item.company}</span>
            </div>

            <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>Apply Now</button>
        </div>
    )
}
