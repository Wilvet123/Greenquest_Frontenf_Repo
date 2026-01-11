import React from 'react'
import Carousel from './Carousel'
import leaf from '../assets/features/blueleaf.png'
import Slider from './Slider'

const Advocacy = () => {
  return (
    <div className=''>
      <section id='advocacy_programs' className='bg-skyBlue mt-12 md:mt-4 '>
      <div className='flex items-center justify-center gap-5 pb-4 pt-24'>
                <img src={leaf} className='h-10 w-10 '/>
                <h1 className='text-primaryBlue font-chelsea text-center text-2xl'>ADVOCACY PROGRAM</h1>
            </div>
            <div className='text-start lg:px-40 md:px-12 px-6'>
            <p className='font-bold font-quicksand'>Our advocacy program brings our games to life,
               beyond screens and boards, into real communities. We work with schools, local organizations,
                and youth leaders to spark conversations and drive action around issues that matter most.
            </p><br />
        <p>Whether it’s leading climate workshops, teaching upcycling and creative skills, hosting
           storytelling circles, or organizing plastic waste clean-ups, we center youth voices and
            cultural identity in everything we do.
        <br>
            </br>
            
            To date, we’ve reached thousands children across west Africa helping them see that their stories,
             their choices, and their dreams matter.

        </p>
            </div>
            <Slider/>
      </section>
      
    </div>
  )
}

export default Advocacy