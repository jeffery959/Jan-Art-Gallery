"use client"
import Image from "next/image"
import IconButton from '@mui/material/IconButton';
import {useState} from 'react'
const FAQDeck = ({question}:{question:string}) => {
    const [ansSeen,setAnsSeen] = useState('hidden')

  return (
<div className={`  w-full max-w-480  flex-col  overflow-hidden flex mb-10 border-b justify-between `}>
<div className="flex w-full justify-between">

<p className='pb-5 text-lg md:text-xl font-bold text-gray-500'>{question}</p>
<IconButton className="w-10 h-10" onClick={()=>ansSeen==='hidden'?setAnsSeen('block'):setAnsSeen('hidden')} >
<Image src={'/Icons/GreaterThan.svg'} width={15} height={15} alt=""  className={`${ansSeen==='hidden'?'rotate-90':'-rotate-90'} ` }/>
</IconButton>
</div>
<p className={`pb-10 mt-0 font-light  text-gray-500 ${ansSeen}`}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit illum nisi officia at harum mollitia non, ducimus numquam consectetur iusto dolore fuga maxime eos iste, laboriosam omnis! Ipsum, ullam provident.
</p>
</div>
  )
}

export default FAQDeck