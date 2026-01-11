import React from 'react'
import { Link } from 'react-router-dom'
import street2schools2 from '../assets/greenquestclub/street2schools/street2schools2.jpg'
import { schoolDetails } from '../data'

const Carousel = () => {
  return (
    <div className='flex flex-wrap md:flex-nowrap md:px-12 px-6 justify-center gap-12 pt-14 bg-skyBlue'>
      {
        schoolDetails.map((program)=> (
          <div key={program.id} className=' bg-blue-200 px-5 py-4 max-w-96 rounded-lg relative'>
          <img src={program.img.img3} className='w-full h-[160px] object-cover'/>
          <h1 className='text-primaryBlue pt-4'> {program.school}</h1>
          <p className='text-xs py-3'>{program.intro}
          </p>
          <Link to={`/advocacy-program/${program.id}`}>       
            <button className='text-center bg-primaryBlue text-white rounded-lg w-full py-3 px-2 '>Read More</button>
          </Link>
      </div>
        ))
      }
     
    </div>
   
  )
}

export default Carousel