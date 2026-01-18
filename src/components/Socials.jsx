import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok, FaDiscord } from "react-icons/fa";

const Socials = () => {
  return (
    <div className='fixed md:right-10 right-2 z-20 top-[269px]'>
        <ul className=' text-primaryGreen flex flex-col gap-8 '>
            <li ><a href='https://www.twitter.com/GreenQuestGame' target="_blank"><FaTwitter size={25}/></a></li>
            <li ><a href='https://www.instagram.com/greenquestinnovations?igsh=N3cyYnZ5aW9zMnRn&utm_source=qr' target="_blank"><FaInstagram size={25}/></a></li>
            <li><a href='https://www.linkedin.com/company/greenquest/' target="_blank"><FaLinkedinIn size={25}/></a></li>
            <li><a href='https://www.tiktok.com/@greenquestgames?_t=ZM-8vapAgY3oYw&_r=1' target="_blank"><FaTiktok size={25}/></a></li>
            <li ><a href='https://discord.com/invite/34JGRh38F4?fbclid=PAAaZ9q4IcgbN5XsoiGXKXiVhUiHziu-gR8qQGIoAgLEkxh_sfsVwYtrVwAFo'><FaDiscord size={25}/></a></li>
        </ul> 
    </div>
  )
}

export default Socials