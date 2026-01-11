import React from 'react'
import leaf from '../assets/features/whiteleaf.png'


const Contact = () => {
  return (
    <div className='bg-primaryBlue w-full py-14 lg:px-24 px-8  flex justify-center'>
        <section id='contact_us'>
        <div className='flex items-center justify-center gap-5 py-4 min-h-12'>
                <img src={leaf} className='h-10 w-10 '/>
                <h1 className='text-white font-chelsea text-center text-2xl'>CONTACT US</h1>
            </div>
            <p className='text-white text-center min-w-96'>You want to sponsor, send us a message or partner with us? Kindly fill this form.</p>
            <form action='https://formspree.io/f/xqaznpon' method='POST'>
                <div className='flex flex-wrap justify-center md:gap-10 gap-5 md:my-9 my-5'>
                <div className='flex flex-col  '>
                    <label>First Name:</label>
                    <input placeholder='First Name'
                     type='text' name='name' className='pl-3 md:pr-32 pr-16  border-none outline-none  md:py-5 py-3 rounded-md text-start' required/>
                </div>
                <div className='flex flex-col'>
                    <label>Surname:</label>
                    <input placeholder='Surname' name='name'
                     className='pl-3 md:pr-32 pr-16 border-none outline-none md:py-5 py-3 rounded-md'
                      type='text' required/>
                </div>
                </div>

                <div className='flex flex-wrap justify-center md:gap-10 gap-5 md:mb-9 mb-5'>
                <div className='flex flex-col'>
                    <label>Email Adress:</label>
                    <input placeholder='Email Adress' name='email'
                    className='pl-3 md:pr-32 pr-16 border-none outline-none md:py-5 py-3 rounded-md'
                     type='email' required/>
                </div>
                <div className='flex flex-col'>
                    <label>Subject:</label>
                    <input placeholder='Subject' name='subject' className='pl-3 md:pr-32 pr-16 border-none outline-none md:py-5 py-3 rounded-md'
                    type='text' required/>
                </div>
                </div>
                <div className='flex flex-col mx-16 md:mx-0'>
                <label>Message:</label>
                <textarea placeholder='Send us a Message' name='message' className='pl-3 md:pr-32 pr-4 border-none outline-none py-5 rounded-md'></textarea>
                </div>
                <div className='flex items-center justify-center'>
                <button className='bg-primaryGreen text-white md:px-48 px-24 mt-9 py-4 rounded-md ' 
                type='submit'>Send</button>
                </div>

                
            </form>
        </section>
    </div>
  )
}

export default Contact