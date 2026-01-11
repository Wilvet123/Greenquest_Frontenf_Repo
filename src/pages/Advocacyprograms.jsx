import React from 'react'
import { schoolDetails } from '../data'
import bg3 from '../assets/hero2.jpg'
import { useParams } from 'react-router-dom'
import frog from '../assets/features/frog.png'
import leaf from '../assets/features/blueleaf.png'

const Advocacyprograms = () => {
  const { id } = useParams();  
  return (
    <div>
      <div className='h-screen w-full relative  flex justify-center px-7 items-center'>
        <div className='z-20 absolute top-0 bg-black/50 h-screen  shadow-xl left-0'>
        <div className='mt-44 min-h-2 text-white flex items-center justify-center flex-col'>
        <h1 className='font-chelsea lg:text-3xl md:text-xl text-base lg:mx-36 md:mx-24 '>
            GREENQUEST:Fostering Awareness of Climate Change through Games
        </h1>
        <p className='bg-primaryGreen lg:px-7 md:px-7 px-4 lg:py-9 md:py-9 py-4 lg:text-base 
        md:text-base text-xs  rounded-lg text-center lg:mx-40 md:mx-28 mx-8 mt-7'>
            We work to foster a sustainable future through education, awareness and community engagement.
        </p>
        </div>
        </div>
     <img src={bg3} className='absolute top-12 left-0  object-cover h-screen w-full -z-20' />
          
       <img src={frog} alt="" className='absolute left-0 bottom-0 h-28 w-28' /> 
     </div>
      
      
      
      <div className='bg-skyBlue md:px-24 px-12 pt-12'>
        {
            schoolDetails.filter(schooldeets => schooldeets.id === id).map((schooldeets)=>(
              <div>
                <div className='flex items-center justify-start gap-5 py-4'>
                <img src={leaf} className='h-10 w-10 '/>
                <h1 className='text-primaryBlue font-chelsea text-center text-2xl'>{schooldeets.school}</h1>
            </div>
        <h1 className='font-bold pt-2 pb-4'>We work to foster a sustainable future through education, awareness, and community engagement.</h1>
        <p>
            {schooldeets.details1}
        </p><br/>
        <p>{schooldeets.details2}</p>
        <div className='flex flex-wrap gap-10 justify-center items-center mt-12'>
            
                <img src={schooldeets.img.img1} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>
                <img src={schooldeets.img.img3} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>
                <img src={schooldeets.img.img3} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>
                <img src={schooldeets.img.img4} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>
                <img src={schooldeets.img.img5} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>
                <img src={schooldeets.img.img6} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>
                <img src={schooldeets.img.img7} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>
                <img src={schooldeets.img.img8} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>
                <img src={schooldeets.img.img9} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>
                <img src={schooldeets.img.img10} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>
                <img src={schooldeets.img.img11} className='p-3 bg-regularBlue object-cover w-80 h-80 rounded-lg'/>

            
        </div>
                </div>  
            ))
        }
        
    </div>
    </div>
    
  )
}

export default Advocacyprograms