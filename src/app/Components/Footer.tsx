import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='w-full border-t  flex md:flex-row flex-col-reverse gap-3 items-center justify-between text-sm py-20 lg:px-20 px-8 '>
        <p className='text-slate-500 '>Copyright 2024©All rights reserved</p>
        <div className='flex font-medium gap-3 text-slate-600'>
            <p className='hover:underline cursor-pointer'>Privacy Policy</p>
            <p className='hover:underline cursor-pointer'>Terms&Conditions</p>
        </div>
        <div className='flex my-4 gap-2'>
   <Image src={'/Icons/Twitter.svg'} width={20} height={20} className='hover:cursor-pointer hover:scale-110 duration-500 ' alt=''/>
   <Image src={'/Icons/Instagram.svg'} width={20} height={20} alt='' className='hover:cursor-pointer hover:scale-110 duration-500 ' />
   <Image src={'/Icons/Facebook.svg'} width={20} height={20} alt='' className='hover:cursor-pointer hover:scale-110 duration-500 ' />
        </div>

    </div>
  )
}

export default Footer