import React from 'react'
import hero1 from '../assets/hero1.jpg'
import frog from '../assets/features/frog.png'

const Home = () => {
  return (
    <div className='text-center font-chelsea'>
    <section id='home'>
      <div className='h-screen w-full relative flex justify-center px-7 items-center'>
        {/* Background Overlay */}
        <div className='z-20 absolute top-0 left-0 bg-black/50 h-screen w-full shadow-xl'>
          <div className='min-h-screen h-screen text-white flex items-center justify-center flex-col'>
            <h1 className='font-chelsea lg:text-3xl md:text-xl text-base lg:mx-36 md:mx-24 mx-7'>
              GREENQUEST: Driving Change Through Immersive Technology.
            </h1>
            <p className='bg-primaryGreen lg:px-7 md:px-7 px-4 lg:py-9 md:py-9 py-4 lg:text-base 
            md:text-base text-xs rounded-lg text-center lg:mx-40 md:mx-28 mx-8 mt-7'>
              Afro-futuristic games raising awareness on climate change,
               inequality, and the challenges shaping African communities.

            </p>
          </div>
        </div>
        
        {/* Background Image */}
        <img 
          src={hero1} 
          className='absolute top-0 left-0 h-screen w-full object-cover -z-20' 
          alt="Background Image"
        />
        
        {/* Frog Image */}
        <img 
          src={frog} 
          alt="Frog Image" 
          className='absolute left-0 bottom-0 h-28 w-28' 
        />
      </div>
    </section>
  </div>
  
  )
}

export default Home