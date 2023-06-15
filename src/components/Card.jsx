import React from 'react'
import { FaBookOpen } from "react-icons/fa"
import { SiGooglescholar } from "react-icons/si"

import { BsLinkedin, BsCalendar3 } from "react-icons/bs"
import { SiResearchgate } from "react-icons/si"

import { IoMdSchool } from "react-icons/io"
import dplb from "../assets/dplb.png"


export const Card = (props) => {
    return (
        <div className='card  flex justify-start items-center tracking-wider text-[#666666] font-serif rounded-2xl bg-white my-[1%]  p-[1%] '>
            <div className='card-image  w-[7rem] flex-shrink-0'><img src={props.image} className='rounded-full member-res-card-image w-32' alt="" /></div>
            <div className=' flex flex-col  px-[2%] py-[1%] w-full'>
                <div className='mb-[1%]'>
                    <span className=' font-sans  font-bold tracking-widest text-black'>{props.name},
                    </span>
                    <span className='ml-[1%] whitespace-normal' > {props.desg}</span>
                </div>
                <div className='details flex w-full'>
                    <div className='flex w-1/4'>
                        <div className='flex items-center justify-center'>
                            <BsCalendar3 size={"1.25rem"} className="mem-icon " />
                        </div>
                        <div className='whitespace-normal w-full flex  items-center'>
                            <h2 className=' pb-[2%] p-[1%] whitespace-normal'>{props.year}</h2>
                        </div>
                    </div>
                    <div className='flex w-full'>
                        <div className='flex items-center justify-center'>
                            <IoMdSchool size={"1.25rem"} className="mem-icon " />
                        </div>
                        <div className='whitespace-normal w-full flex  items-center'>
                            <h2 className='   p-[1%] whitespace-normal'>Under {props.supervisor}</h2>
                        </div>
                    </div>
                    <div className='flex w-full'>
                        <div className='flex items-center justify-center'>
                            <FaBookOpen size={"1.25rem"} className="mem-icon " />
                        </div>
                        <div className='whitespace-normal w-full flex  items-center'>
                            <h2 className=' p-[1%] whitespace-normal'>{props.title}</h2>
                        </div>
                    </div>

                </div>
                <div className='profiles flex pt-[1%]'>
                    {
                        props.google &&
                        <div className='flex  pr-[3%] items-center'>
                            <a href={props.google} target='__blank' >
                                <SiGooglescholar size={"1.25rem"} className="mem-icon text-black transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                    {
                        props.researchgate &&
                        <div className='flex  pr-[3%] items-center'>
                            <a href={props.researchgate} target='__blank' >
                                <SiResearchgate size={"1.25rem"} className="mem-icon text-black transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                    {
                        props.linkedin &&
                        <div className='flex pr-[3%] items-center'>
                            <a href={props.linkedin} target='__blank' >
                                <BsLinkedin size={"1.25rem"} className="mem-icon text-black transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }
                    {
                        props.dplb &&
                        <div className='flex  flex-shrink-0 pr-[3%] items-center'>
                            <a href={props.dplb} target='__blank' >
                                <img src={dplb} className="w-5 mem-icon  transition ease-in-out hover:animate-pulse hover:scale-150" />
                            </a>
                        </div>

                    }


                </div>
                {props.display &&
                    <a href={props.url} target='__blank' className=' mt-[2%]'>
                        <button className='hvr-radial-out card-button font-sans tracking-wider transition ease-in-out  hover:text-white px-[3%] rounded-2xl py-[1%] w-[14rem]'>
                            View Profile
                        </button>
                    </a>
                }
            </div>
        </div>
    )
}
