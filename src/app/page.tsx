import Image from 'next/image'
import Navbar from './Component/Navbar/Navbar'
import AboutUs from './Component/Navbar/AboutUs/Aboutus'
import { OurStory } from './OurStory/OurStory'

export default function Home() {
  return (
    <>
      <div style = {{backgroundImage:'url(/Insert-Image-Here.png)'}} className='w-[1440px]  h-[836px] flex flex-col items-center '>
     <Navbar/>
     </div>
     <div className='px-[100px]'>
     <AboutUs/>
     <OurStory/>
     </div>
    </>
  )
}
