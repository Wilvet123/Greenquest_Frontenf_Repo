import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram, FaTiktok,FaDiscord} from "react-icons/fa";
import logo from '../assets/gq-innovation-logo.png';
import googleplay from '../assets/features/googleplay.png';
import appstore from '../assets/features/appstore.png';

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 md:px-24 px-12 py-12'>
      {/* Top Section */}
      <div className='flex flex-col md:flex-row gap-10 justify-between border-b pb-4 border-gray-200'>
        {/* Left Section: Logo and Description */}
        <div className='md:w-[424px] w-full'>
          <img src={logo} className='w-24 h-14' alt="GreenQuest Logo" />
          <p className='pt-5 text-gray-600'>
          At GreenQuest Innovations We don’t just imagine better futures; we help build them.
          </p>
        </div>

        {/* Right Section: App Download */}
        <div className='mt-8 md:mt-20'>
          <h4 className='text-gray-800 font-semibold'>Download the app</h4>
          <div className='flex flex-row md:flex-col gap-2 mt-2'>
            <img src={appstore} className='h-8 w-24' alt="App Store" />
            <img src={googleplay} className='h-8 w-24' alt="Google Play" />
          </div>
        </div>
      </div>

      {/* Social Media Links Section */}
      <div className='flex justify-center md:justify-start pt-8'>
        <ul className='flex gap-5'>
          <li>
            <a href='https://www.twitter.com/GreenQuestGame' target="_blank" rel="noreferrer">
              <FaTwitter size={21} className='rounded-full text-white bg-primaryGreen p-1 text-center' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/greenquestinnovations?igsh=N3cyYnZ5aW9zMnRn&utm_source=qr' target="_blank" rel="noreferrer">
              <FaInstagram size={21} className='rounded-full text-white bg-primaryGreen p-1 text-center' />
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/company/greenquest/' target="_blank" rel="noreferrer">
              <FaLinkedinIn size={21} className='rounded-full text-white bg-primaryGreen p-1 text-center' />
            </a>
          </li>
          <li>
            <a href='https://www.tiktok.com/@greenquestgames?_t=ZM-8vapAgY3oYw&_r=1' target="_blank" rel="noreferrer">
            <FaTiktok size={21} className='rounded-full text-white bg-primaryGreen p-1 text-center' />
            </a></li>
          <li>
            <a href='https://discord.com/invite/34JGRh38F4?fbclid=PAAaZ9q4IcgbN5XsoiGXKXiVhUiHziu-gR8qQGIoAgLEkxh_sfsVwYtrVwAFo' target='_blank' rel="noreferrer">
              <FaDiscord size={21} className='rounded-full text-white bg-primaryGreen p-1 text-center' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
