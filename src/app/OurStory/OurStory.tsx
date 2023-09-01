'use client'
import React, { useState } from "react"
import Image from "next/image"
import Button from "../Button/Button"
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
export const OurStory = () => {
    const [state,setState] = useState(0)
    const sliderData = [
        {
            name:'Sell Apartments',
            url:'',
        },
        {
            name:'Buy Apartments',
        },
        {
            name:'Sell House',
        },
        {
            name:'Buy House',
        },
        {
            name:'Rent Apartment',
        },
        {
            name:'Rent House',
        },
    ]
    const secondSliderData = [
        {
            name:'ONE BED APARTMENT',
            img:'/Insert Image Here.png',
            address:'325 East 38th Street, New York'
        },
        {
            name:'FAMILY APARTMENT',
            img:'/Insert Image Here.png',
            address:'325 East 38th Street, New York'
        },
        {
            name:'DESIGNER HOME',
            img:'/Insert Image Here.png',
            address:'325 East 38th Street, New York'
        },
    ]
    return <div className="w-full">
    <div className="flex flex-row items-center gap-[20px]">
                    <div style={{width:'72px',height:'1px'}} className="bg-red-500 text-white"></div>
                    <h1 className="text-[32px] font-bold leading-[37px]">Story Behind Our Company</h1>
                    </div>
    <div className="flex flex-col items-center mt-[20px]">
            <div className="flex flex-row gap-[132px] items-end ">
                <h1 className="max-w-[442px] leading-[37px] text-[#FFFFFF] text-[32px] font-normal">Upholding values of honesty and trust to deliver the best in real estate has been our greatest accolade.</h1>
                <div className="w-[502px] h-[267px] relative">
                    <Image alt = "" src = "/Image.png" layout = 'fill' objectFit = 'cover'/>
                </div>  
            </div>
            <div className="flex flex-row gap-[132px] items-end mt-[80px] ">
                <div className="w-[502px] h-[267px] relative">
                    <Image alt = "" src = "/Imagefsdasd.png" layout = 'fill' objectFit = 'cover'/>
                </div>  
                <h1 className="max-w-[442px] leading-[37px] text-end text-[#FFFFFF] text-[32px] font-normal">Upholding values of honesty and trust to deliver the best in real estate has been our greatest accolade.</h1>
            </div>
    </div>


    <div className="mt-[241px] w-full">
                    <div className="flex flex-row items-center gap-[20px]">
                    <div style={{width:'72px',height:'1px'}} className="bg-red-500 text-white"></div>
                    <h1 className="text-[32px] font-bold leading-[37px]">Story Behind Our Company</h1>
                    
                    </div> 
                    <div className="flex flex-row items-center justify-between w-full">
                        <h1 className="text-[32px] font-normal leading-[52PX] ">We provide the best quality product for you.</h1>
                        <div className="flex flex-row items-center gap-[16px]">
                        <Button className="w-[56px] h-[56px] rounded-full border-[1px] border-gray-500 flex flex-row items-center justify-center "><Image alt = "" src = "/Icon2.png" width = {7} height={16}/></Button>
                        <Button className="w-[56px] h-[56px] rounded-full border-[1px] border-gray-500 flex flex-row items-center justify-center rotate-180"><Image alt = "" src = "/Icon2.png" width = {7} height={16}/></Button>
                        </div>
                    </div>

                    <div className="flex flex-row items-center mt-[58px] gap-[117px]">
                        <div className="flex flex-col gap-[20px] ">
                        {
                            sliderData.map((element,idx)=> {
                                return <div key = {idx} className="text-gray-500 hover:text-white transform hover:translate-x-5 hover:-translate-y-2 duration-500 hover:text-white cursor-pointer">{element.name}</div>
                            })
                        }
                        </div>
                        <div className="max-w-[1000px]">
                        <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
       {
           secondSliderData.map((element,idx)=> {
            return <SwiperSlide className="h-[450px]" key={idx}>
                {/* <div className="flex flex-col gap-[20px]"> */}
            <div className="w-[266px] h-[364px]">
            <div className="bg-white relative rounded-xl  w-[266px] h-[255px] hover:h-[364px] transform ease-out duration-500"> 
            <Image alt="" src= {element.img} objectFit="cover" layout="fill" className="rounded-xl"/>
            </div>
            <div className="flex flex-col text-white gap-[8px] mt-[15px] ">
                <p className="text-[20px] font-semibold leading-[26px]">{element.name}</p>
                <p className="text-gray-500 text-[14px] font-normal leading-[24px]">{element.address}</p>
            </div>
            </div>
            
            {/* </div> */}
             </SwiperSlide>
           }) 
       } 
            
      </Swiper>
                        </div>
                    </div>
    </div>
    </div>    
}