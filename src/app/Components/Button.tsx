import React from 'react'
import Image from 'next/image'
const Button = ({txt,Icon,onClick}:{txt:string,Icon?:string,onClick?:()=>void}) => {
  return (
    <button onClick={onClick} className='flex hover:shadow-2xl duration-500 gap-2 bg-primary shadow-lg text-white px-6 py-3 rounded-full text-sm md:text-lg'>
        {txt}
        {
           Icon&& <Image src={Icon} width={20} height={20} alt='' className='text-white'/>
        }
        
        </button>
  )
}

export default Button