"use client"
import {useContext} from 'react'
import "./Contact.css"
import { IconButton } from '@mui/material'
import Image from 'next/image'
import Chips from './Chips'

import { ThemeContext } from './GlobalContext'
const Contact = () => {
  const {ContactOn,toggleContact} = useContext(ThemeContext)
  return (
    <div className={`Main_contact z-20 fixed left-0 top-0 w-screen h-screen items-center  xl:px-20 lg:px-12 px-8 flex  justify-center`}>

    <div className='Contact flex-col sm:flex-row min-h-168 gap-4 px-10 py-10 text-white rounded-xl  flex justify-between'>
        <div className='w-full sm:w-1/2'>
            <div className='text-xl font-bold'>
                <div>


   <h3>Let’s discuss</h3>  
   <h3>

    on something <span className='text-primary'>cool</span> 
   </h3>
   <h3>

    together
   </h3>
                </div>
                <div>
                  <div className='Box'>
                    <img src="Icons\Email.svg" alt="" />
                    <p>aaronjeffery529@gmail.com</p>
                  </div>
                  <div className='Box special'>
                    <img src="Icons\Phone.svg" alt="" />
                     <p>+1 (929)-608-4670</p>
                  </div>
                  <div className='Box'>
                    <img src="Icons\Location.svg" alt="" />
                     1743 fulton Ave
                  </div>

                </div>

                               

            </div>
            <div className=' flex justify-center sm:flex-start   gap-10 mt-4'>
            <Image src={'/Icons/Twitter-White.svg'} className='text-white ' width={20} height={20} alt='' />
   <Image src={'/Icons/Instagram-White.svg'} width={20} height={20} alt=''/>
   <Image src={'/Icons/Facebook-White.svg'} width={20} height={20} alt=''/>


                  </div> 
   
        </div>
        <div className='w-full sm:w-1/2  rounded-lg p-4 bg-white'>
          <div className='flex justify-between'>

          <h3 className='font-medium  text-gray-700 text-lg mb-4'>I’m interested in...</h3>
        <IconButton onClick={()=>toggleContact()} className='fixed top-10 right-16 outline'>
          <Image src="/Icons/Back-White.svg" width={20} height={20} alt="" />
        </IconButton>
          </div>
          <div className='flex flex-wrap gap-2' >
            <Chips txt='Photography'/>
            <Chips txt='Editing'/>
            <Chips txt='Pricing'/>
            <Chips txt='Meetup'/>
            <Chips txt='Copies of work'/>
             </div>

        </div>
    </div>
      
        
        </div>
  )
}

export default Contact