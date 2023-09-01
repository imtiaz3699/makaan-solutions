'use client'
import Image from "next/image"
export default function AboutUs () {
    const data = [
        {
            name:'Buy a Home',
            img:'/iconspace_House 2_25px@2x.png',
            description:'Browse millions of properties in your city, sace your favorites and set up search alerts',
        },
        {
            name:'Rent a Home',
            img:'/iconspace_House 2_25px@2x - Copy.png',
            description:'Communiation directly with advertiser. if all goes well. one of these verified users ',
        },
        {
            name:'Sell a Home',
            img:'/iconspace_House 3_25px.png',
            description:'Find your dream house? you just need to a few action and you can start move to your house',
        },
    ]
    return <div className=" flex flex-row items-center justify-between  py-[120px]" >
                <div className="flex flex-col gap-[27px]">
                    <div className="flex flex-row items-center gap-[]">
                    <div style={{width:'72px',height:'1px'}} className="bg-red-500 text-white"></div>
                    <h1 className="text-[32px] font-bold leading-[37px]">About Us</h1>
                    </div>
                    <h1 className=" text-[40px] font-normal leading-[52px] max-w-[602px]">We Are best and most trusted real estat agent</h1>
                    <div className="mt-[90px] ml-10 flex flex-col gap-[50px]">
                        {
                            data.map((element,idx)=> {
                                return <div key={idx} className="flex flex-row items-center gap-[24px]">
                                <div className="w-[80px] h-[80px] bg-[#404040] rounded-full flex flex-row items-center justify-center">
                                        <Image alt = "" src = {element.img} width = {40} height = {40}/>
                                </div>
                                <div className="flex flex-col gap-[15px]">
                                        <h1 className="text-[20px] font-semibold leading-[23px]">{element.name}</h1>
                                        <div className="max-w-[406px]">{element.description}</div>
                                </div>
                            </div>
                            })
                        }
                    
                    </div>
                </div>
                <div className="w-[502px] h-[630px] relative rounded-xs">
                        <Image alt = "" src='/highlight.png' layout="fill" objectFit="cover"/>
                        <div className="w-[360px] h-[108px] bottom-10 -translate-x-20 flex flex-row items-center gap-[22px] justify-center bg-white absolute z-10 rounded-xl">
                                    <div className="w-[56px] h-[56px] bg-[#B0774D2A] rounded-full   flex flex-row items-center justify-center">
                                        <Image alt="" src='/Icon.png' width = {21} height = {21}/>
                                        
                                    </div>
                                    <h1 className="text-[20px] font-semibold max-w-[182px] text-black">Watch Our History</h1>
                                    
                        </div>
                </div>
    </div>
}