"use client"
import { Dispatch, SetStateAction, useContext } from 'react'
import Link from 'next/link'
import Button from './Button'
import { ThemeContext } from './GlobalContext'
interface NavContextType {
    toggleContact: boolean;
    setToggleContact: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContactSec = () => {
    const {toggleContact} = useContext(ThemeContext)
    
  return (
    <section className="w-full  mt-32 lg:mt-48 bg-sky-200 py-10 shadow-lg  justify-center flex xl:px-20 lg:px-12 px-8 mb-32  ">

    <div className=' w-full max-w-480 '>
      

      <h4 className=" mb-5 text-3xl font-bold text-gray-500'">Still have questions?</h4>
      <div className="flex gap-2 lg:py-6 py-4">
      <Link href={'https://mail.google.com/'} target='_blank'>
    <p className='hover:underline hover:cursor-pointer font-bold text-primary   '>Someone@gmail.com</p>
        </Link>
        <p className='text-gray-500 font-medium  '>(912)-210-0936</p>
      </div>
      <Button txt="Contact Me" onClick={()=>{toggleContact()}} />
      

      
    </div>
  </section>
  )
}

export default ContactSec