import React from 'react'
import bizday from '../assets/features/business_day_logo.png'
import dw from '../assets/features/dw_logo_1.png'
import globalsoln from '../assets/features/globalsoln.png'
import leaf from '../assets/features/blueleaf.png'
import ndes from '../assets/features/ndes.png'
import theworldaround from '../assets/features/theworldaround.png'
import fuzetalent from '../assets/features/FUZE-TALENT-SHOW-FOR-TECH-FOUNDERS.png'


const Features = () => {
  return (
    <div className=''>
      <section id='our_partners'>
      <div className='flex items-center justify-center mt-28   '>
               
                <h1 className='text-primaryBlue font-chelsea text-center text-2xl'>FEATURED IN</h1>
            </div>

<ul className=' pt-12 pb-24 md:mx-16 mx-5  text-primaryGreen flex lg:gap-20 md:gap-16 gap-6  justify-center items-center'>
    <li ><a href='https://businessday.ng/interview/enterpreneur/article/grace-james-entrepreneur-using-gamification-to-raise-climate-change-awareness/' target="_blank">
    <img src={bizday} className=''/></a></li>
    <li ><a href='https://www.dw.com/en/greenquest-a-game-raising-climate-awareness/video-69038860' target="_blank"><img src={dw}/></a></li>
    <li><a href='https://www.ndes.org.ng/final-competition-for-the-foresight-seeds-fund-accelerator-program-in-collaboration-with-ndeswomen/' target="_blank"><img src={ndes}/></a></li>
    <li ><a href='https://www.global-solutions-initiative.org/young-global-changers/recoupling-awards-2024/' target="_blank"><img src={globalsoln}/></a></li>
    <li ><a href='https://youtu.be/qAOdiT6MBWc?si=_6aY8SwQ4yiSo8Q5 ' target="_blank"><img src={fuzetalent}/></a></li>
    <li ><a href='https://theworldaround.com/ycp/#:~:text=25%20UNDER%2025&text=This%20cycle%C2%B4s%20interdisciplinary,with%20increasing%20unpredictability%20each%20day' target="_blank"><img src={theworldaround} className='w-16 h-12 lg:w-24 lg:h-24'/></a></li>

</ul> 
      </section>
       
    </div>
  )
}

export default Features