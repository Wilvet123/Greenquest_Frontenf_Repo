import React from 'react'
import leaf from '../assets/features/blueleaf.png';

const Subscription = () => {
  return (
    <div className="w-full bg-gray-200 mt-16">
      <div className="flex justify-center p-6 md:p-12">
      
        {/* Form */}
        <form 
          action="https://formspree.io/f/meolwrrv" 
          method="POST" 
          className="flex flex-col items-center w-full max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-5 py-4">
            <img src={leaf} className="h-10 w-10 object-cover" alt="leaf icon" />
            <h1 className="text-primaryBlue font-chelsea text-2xl">Join the Adventure Early</h1>
          </div>
          <p className='pb-7 lg:text-lg'>Our brand-new board game is almost here! Subscribe now and get notified the moment it’s released — don’t miss out on the fun.</p>
          <label htmlFor="email" className="sr-only">Email Address</label>
          
          <input 
            id="email"
            placeholder="Email Address"
            name="email"
            className="w-full max-w-lg pl-3 pr-4 border-none outline-none md:py-5 py-3 rounded-md text-center"
            type="email"
            required
          />
          
          <button 
            className="bg-primaryGreen text-white w-full max-w-lg mt-4 py-3 rounded-md transition hover:opacity-90" 
            type="submit"
          >
            Subscribe
          </button>
        </form>

      </div>
    </div>
  )
}

export default Subscription
