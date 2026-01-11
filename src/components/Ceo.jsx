import React from 'react'
import ceo from '../assets/team/ceo.png'

const Ceo = () => {
  return (
    // bg-gradient-to-b from-primaryBlue via-[#549977] to-primaryGreen
    <div className='z-0 flex flex-wrap md:flex-nowrap md:px-12 items-center lg:gap-12 gap-6 justify-center py-20 '>
        <div className='z-20'>
        <img src={ceo} className='rounded-full h-72 w-72 object-cover '/>
        </div>
        <div className='w-[440px]'>
        <p className='text-primaryBlue  font-semibold lg:text-start text-sm text-center px-8 lg:px-0'> "Africans are not consumers, In contrast, the
           African gaming industry is on the rise, transforming from a niche market into a powerhouse
            of creativity and innovation. Local developers are creating culturally rich and impactful games,
             showcasing immense potential for growth."
        </p>
        <div className=' text-center lg:text-start    '>
            <h1 className='text-primaryGreen font-bold'>Grace James</h1>
            <p >Founder GreenQuest</p>
        </div>
        </div>
       
    </div>
  )
}

export default Ceo