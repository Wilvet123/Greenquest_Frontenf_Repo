import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import leaf from '../assets/features/blueleaf.png';
import { team } from '../data';

const Team = () => {
  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation variants for each team member
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <motion.div
      className='flex flex-wrap lg:mx-24 justify-center gap-12 items-center shadow-md shadow-black/20 rounded-lg p-4'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
      transition={{ duration: 0.5 }}
    >
      <div className='w-[400px]'>
        {/* Header */}
        <div className='flex items-center justify-start gap-5 py-4'>
          <img src={leaf} className='h-10 w-10 ' />
          <h1 className='text-primaryBlue font-chelsea text-center text-2xl'>MEET OUR TEAM</h1>
        </div>
        <div className='px-6'>
          <p className=''>
          We join hands to create a lasting impact on children all over the world.
          </p><br />
          <p className='font-semibold italic'>
            "Climate change is the most significant thing humans have ever done on this planet. 
            The only thing that needs to be bigger is our movement to stop it" - <span className='text-primaryGreen not-italic'>Bill McKibben</span>
          </p>
        </div>
      </div>

      {/* Team Pictures */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-6 gap-7">
  {team.map((teams, index) => (
    <motion.div
      key={teams.name}
      className={`w-[210px] h-[210px] group 
        ${index === 0 ? "lg:col-span-2 mx-auto" : ""}`} // 👈 first item spans 2 cols
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.3 }}
    >
      <div className="group-hover:bg-black/50 group-hover:z-10 relative rounded-lg transition-all duration-300 ease-in-out">
        <img
          src={teams.image}
          className="w-[210px] h-[210px] z-0 rounded-lg object-cover"
        />
        <div
          className="px-4 py-1 block md:hidden group-hover:block absolute bottom-2 left-0 right-0 bg-primaryBlue
            text-white text-center rounded-md w-[90%] mx-auto "
        >
          <h1>{teams.name}</h1>
          <h1>{teams.role}</h1>
        </div>
      </div>
    </motion.div>
  ))}
</div>

    </motion.div>
  )
}

export default Team;
