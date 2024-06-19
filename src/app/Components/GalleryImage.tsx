import React from 'react'
import Image from 'next/image'
const GalleryImage = ({src,txt,cls}:{src:string,txt:string,cls:string}) => {
  return (
    <div className={cls}>
      <div className='Bg-Frame '>
        <Image
          src={src}
          className='rounded-lg -z-10 object-cover'
          layout="fill"
          quality={100}
          alt="Background"
        />
        <p className='text-white font-sans font-semibold sm:text-lg w-full h-full flex items-end sm:px-4 sm:pb-4 p-2 lg:text-2xl'>
          {txt}
        </p>
      </div>
    </div>
  )
}

export default GalleryImage