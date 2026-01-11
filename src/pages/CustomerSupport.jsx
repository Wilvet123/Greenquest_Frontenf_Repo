import React from 'react'
import { useNavigate } from 'react-router-dom'
import ActiveSupport from '../assets/gqshop/ActiveSupport.png'
import { GoArrowLeft } from "react-icons/go";

const CustomerSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-20 md:mt-24 lg:mt-28 px-4 md:px-8 lg:px-12">
      
      {/* Text Section */}
      <div className="w-full lg:w-2/3">
        <h1 
          className="pb-3 flex items-center gap-2 cursor-pointer hover:text-green-600 transition-colors"
          onClick={() => navigate(-1)}
        >
          <GoArrowLeft size={30} />
          <span className="font-bold text-lg md:text-xl">Customer Support</span>
        </h1>
        
        <h2 className="font-bold pb-6 text-xl md:text-2xl">
          Welcome to the official GreenQuest Innovations store!
        </h2>
        
        <p className="pb-4">
          We are thrilled to share the Birth of Idah, a powerful Afrofuturistic board game that blends culture, strategy,
          and climate action storytelling.
        </p>
        
        <p className="pb-4">
          Below are our customer support contacts to ensure a smooth and trustworthy experience for all customers, locally and globally.
        </p>

        <h3 className="font-bold pb-3 text-lg">Customer Support:</h3>
        <p className="pb-4">For all questions, support or order updates, please contact:</p>
        <p>Email: <a href="mailto:greenquestinnovations@gmail.com" className="text-green-700 underline">greenquestinnovations@gmail.com</a></p>
        <p>Phone: <a href="tel:08088752094" className="text-green-700">0808 875 2094</a> (Nigeria)</p>
        <p>Hours: Monday - Friday, 9:00 AM - 5:00 PM (WAT)</p>

        <h3 className="pt-10 font-bold pb-3 text-lg">Legal and Business Info:</h3>
        <p>GreenQuest Innovations Ltd.</p>
        <p>Company Registration Number: NO. 1799329</p>
        <p>Based in Lagos, Nigeria</p>
        <p>All rights reserved © 2025</p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
        <img 
          src={ActiveSupport} 
          alt="Active Customer Support" 
          className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default CustomerSupport
