'use client'
export default function Navbar () {

    const navData = [
        {
            name:'Home',
            url:'',
        },
        {
            name:'Our Story',
            url:'',
        },
        {
            name:'Services',
            url:'',
        },
        {
            name:'Blog',
            url:'',
        },
        {
            name:'Subscribe',
            url:'',
        },
    ]
   return <div className="text-white py-[78px] flex flex-col items-center w-full">
        <h1 className="h-[82px] font-bold leading-[28px]">Real Estate</h1>
        <div className="w-[1070px] h-[58px] flex flex-row items-center justify-center gap-[40px] bg-black rounded-[20px]">
                {
                    navData.map((element,idx)=> {
                        return <div className="cursor-pointer hover:text-blue-500">{element.name}</div>
                    })
                }
        </div>
        <div className="mt-[111px] flex flex-col items-center justify-center">
                    <h1 className="font-bold text-[54px] leading-[72px] text-center max-w-[632px]">Everyone Deserves opportunty of Property</h1>
                    <p className="text-[20px] leading-[36px] max-w-[851px] text-center">We handle everything for your under one roof. Now You finally save all the stress time and extra hidden cost. with hundreds of design possibilities from leading architects</p>
        </div>
   </div> 
}