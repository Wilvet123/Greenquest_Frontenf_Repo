import React from 'react'
import ReactPlayer from 'react-player'
import boardGame from '../assets/board_game.png'
import { motion } from 'framer-motion'

const Trailer = () => {
  return (
    <div className="px-12 md:px-28 lg:px-72 -mt-12  md:-mt-48">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Video with fade + slide animation */}
        <motion.div 
          className="flex-[1] w-full"
        >
          <div className="aspect-video w-full">
            <ReactPlayer 
              url="https://youtu.be/HuaiE7vX688?si=i0aeVx4P4ZEKuLVC" 
              controls={true} 
              width="100%" 
              height="100%" 
            />
          </div>
        </motion.div>

        {/* Image with bounce/scale effect */}
        <motion.div 
          className="flex-1 flex justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.05, rotate: 2 }}
        >
<img 
  src={boardGame} 
  alt="Board Game" 
  className="object-contain h-56 sm:h-72 md:h-96 lg:h-[34rem] xl:h-[40rem]"
/>

        </motion.div>

      </div>
    </div>
  )
}

export default Trailer
