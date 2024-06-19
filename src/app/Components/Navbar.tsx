"use client"
import Image from 'next/image'
import Button from '../Components/Button'
import Link from 'next/link'
import { RouteUrl } from '../Utils/data'
import { usePathname } from 'next/navigation'
import { IconButton, Modal } from '@mui/material'
import { useContext, useState } from 'react';
import { ThemeContext } from './GlobalContext'
import Contact from './Contact'


const Navbar = () => {
    const [toggleMenu,setToggleMenu]=useState<boolean>(false)
    const routes = ['Home','Gallery','Artist','AboutUs']
   const pathname:string =usePathname()
   const {ContactOn,toggleContact} = useContext(ThemeContext)
  return (
    <div className='CommonFlex w-full border-b   py-12 xl:px-20 lg:px-12 px-8 '>
       { ContactOn&&<Contact/>}
        <div className='CommonFlex Navigations  '>
        <h3 className='font-bold text-lg mr-10'>Jane</h3>

        <ul className='lg:flex xl:gap-6 lg:gap-4 duration-500   hidden'>
            {routes.map((itm,id)=>{
             
            
                if(itm==='Home'){

                    return <Link key={id} href={RouteUrl}  className={'/'===pathname?'text-primary font-semibold':''}>{itm}</Link>
                }
               return <Link key={id} href={RouteUrl+itm} className={'/'+itm===pathname?'text-primary font-semibold':''}>{itm}</Link>

            })
            
            }
           
        </ul>

        </div>
        <div className='CommonFlex md:w-10/12  lg:w-auto flex  justify-between xl:gap-6 lg:gap-4 gap-6'>
            <Link href={'https://mail.google.com/'} target='_blank'>
        <p className='hover:underline hover:cursor-pointer font-bold text-primary md:block hidden '>Someone@gmail.com</p>
            </Link>
            <p className='text-gray-500 font- text-sm md:block hidden'>(912)-210-0936</p>
            <div className='flex justify-center items-center gap-8'>
            <Button onClick={toggleContact} txt='Contact Me'/>
            <div className='block lg:hidden w-0.5 h-6 bg-gray-400'></div>
            <IconButton className='block lg:hidden'>

            <Image src={"Icons/Menu.svg"} width={20} height={ 20} alt='' className=' w-50 h-50' onClick={()=>setToggleMenu(!toggleMenu)} />
            </IconButton>
         { toggleMenu&& 

            <ul className='mt-3 bg-white py-2 px-4 rounded-lg shadow-xl lg:hidden  gap-2 md:gap-4 flex top-24 flex-col absolute duration-500  right-10'>
            {routes.map((itm,id)=>{
             
            
             if(itm==='Home'){

                 return <Link key={id} href={RouteUrl}  className={'/'===pathname?'text-primary font-semibold':''}>{itm}</Link>
             }
            return <Link key={id} href={RouteUrl+itm} className={'/'+itm===pathname?'text-primary font-semibold':''}>{itm}</Link>

         })
            
        }
           
        </ul>}
                  
            </div>

        </div>


    </div>
  )
}

export default Navbar