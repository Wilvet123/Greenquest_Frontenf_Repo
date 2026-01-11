import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import niko from '../assets/nikodesign.png';
import backpack from '../assets/features/backpack.png';
import leaf from '../assets/features/blueleaf.png';

const About = () => {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className='bg-skyBlue'>
      <section id='who_we_are'>
        <motion.div
          className='flex md:flex-nowrap flex-wrap justify-between lg:gap-28 md:gap-0 lg:px-52 md:px-12 px-6 items-center'
          initial='hidden'
          animate='visible'
          variants={sectionVariants}
          transition={{ duration: 0.8}}
        >
          <div className='min-h-[610px] max-w-[547px] py-24 md:pr-24 lg:pr-0'>
            <div className='flex items-center justify-start gap-5 py-4 '>
              <img src={leaf} className='h-10 w-10 object-cover' />
              <h1 className='text-primaryBlue font-chelsea text-center text-2xl'>WHO WE ARE</h1>
            </div>
            <p className='font-bold font-futura'>
            We are GreenQuest Innovations, a collective of Afro-futuristic storytellers,
             game creators, and impact-driven changemakers. At our core, we believe that stories 
             rooted in African heritage and imagined futures can shift mindsets, spark action, and
              shape a more just world.

            </p>
            <br />
            <p className='font-futura'>
            Through our video game Monsters and Threats and board game Rebirth of Idah, we create 
            powerful learning experiences that tackle real-world issues—starting with climate change,
             but not ending there. From gender inequality to food insecurity, our games reflect the 
             struggles and strengths of African communities, blending culture, technology, and imagination
              to inspire hope and action.


            </p>
          </div>
          <div>
            <img src={niko} className='lg:max-w-[352px] md:w-[352px] lg:h-[514px] md:h-[514px]' />
          </div>
        </motion.div>

        <motion.div
          className='flex md:flex-nowrap flex-wrap justify-center md:gap-36 lg:gap-[400px] gap-12 lg:px-28 md:px-12 px-6 items-center lg:pb-40'
          initial='hidden'
          animate='visible'
          variants={sectionVariants}
          transition={{ duration: 0.5, delay: 0.2 }} // Delay for the second section
        >
          <div>
            <img src={backpack} className='lg:w-[352px] lg:h-[400px] lg:block hidden md:block' />
          </div>
          <div className='min-h-[610px] max-w-[547px] py-24'>
            <div className='flex items-center justify-start gap-5'>
              <img src={leaf} className='h-10 w-10 ' />
              <h1 className='text-primaryBlue font-chelsea text-center text-2xl'>OUR MISSION</h1>
            </div>
            <p className='font-quicksand pb-16'>
            Our mission is to make education transformative, culturally rooted, and accessible through
             games that reflect our lived realities.
             <br></br>
             <br></br>
            We use Afro-futuristic storytelling and gamified learning to raise awareness of socio-economic 
            and environmental issues; from the climate crisis to inequality, waste management, and access
             to education. Our goal is to empower the next generation with not just knowledge, but the courage
              to act
              <br></br>
              <br></br>
              By creating immersive experiences where players learn, imagine, and lead, we’re building
               a movement of young changemakers ready to reshape their world.


            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
