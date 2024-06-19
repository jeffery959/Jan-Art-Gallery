"use client"
import { useContext } from 'react'
import Image from 'next/image'
import FAQDeck from '@/app/Components/FAQDeck'
import ContactSec from '@/app/Components/ContactSec'
import { ThemeContext } from '@/app/Components/GlobalContext'
const Page = () => {
  const {ContactOn,toggleContact} = useContext(ThemeContext)
  return (
    <div className='w-full flex flex-col justify-center'>
        <h3 className='Page_Heading'>About Us</h3>
        <section className='w-full xl:px-20 lg:px-12 px-8 flex md:flex-row  flex-col justify-center items-center '>
        <div className='flex gap-4 lg:gap-12 text-gray-800 justify-between md:flex-row flex-col-reverse w-full items-center max-w-480 '>
        <p className='md:w-192 w-full  px-2 text-center  font-extralight lg:text-xl text-gray-600 text-sm '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
<Image src={'/Images/AboutUs.jpg'} width={800} height={800} alt='' className='about-Img w-full  md:max-w-96 lg:max-w-136 rounded-2xl max-w-136 xl:max-w-192'/>

            </div>
            
        </section>

        <h2 className='w-full  text-center mt-32 lg:mt-48 lg:mb-28 md:mb-20 mb-10 text-2xl md:text-3xl font-extralight text-gray-500'>OurJourney</h2>
        <section className='w-full  xl:px-20 lg:px-12 px-8 flex md:flex-row  flex-col justify-center items-center '>
        <div className='flex gap-4 lg:gap-12 text-gray-800 justify-between md:flex-row flex-col w-full max-w-480  items-center '>
       
<Image src={'/Images/OurJourney.jpg'} width={800} height={800} alt='' className='w-full rounded-2xl max-w-136 md:max-w-96 lg:max-w-136 xl:max-w-192'/>
<p className='md:w-192 w-full px-2 text-center  font-extralight lg:text-xl text-gray-600 text-sm '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            </div>
            
        </section>
        <h2 className='w-full text-center text-2xl md:text-3xl mt-32 lg:mt-48 lg:mb-28 md:mb-20 mb-10 font-bold text-gray-700'>Location</h2>
        <section className='w-full md:h-192 h-128'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d48275.86604358997!2d-74.25039633349324!3d40.866571266783815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoogle%20map!5e0!3m2!1sen!2sus!4v1718587834733!5m2!1sen!2sus"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full  '></iframe>
      
         
            
        </section>
        <h2 className='w-full text-center mt-32 lg:mt-48 lg:mb-28 md:mb-20 mb-10 text-3xl font-bold text-gray-700'>FAQ</h2>
        <section className=' w-full   flex   xl:px-20 lg:px-12 px-8 flex-col justify-center items-center '>
          <FAQDeck question='What art styles do you do?'/>
          <FAQDeck question='Do you have a location at new jersey?'/>
        
       
        </section>
       <ContactSec/>
    
    </div>
  )
}

export default Page