import React from 'react'
import GalleryImage from '@/app/Components/GalleryImage'
const page = () => {
  return (
    <div className='h-full lg:pb-24 pb-12  '>
        <h3 className="Page_Heading">Gallery</h3>

        <section className=' flex justify-center px-8 lg:px-32  xl:px-40'>
        {/* <div className='hidden lg:block '>
            <input type="text" placeholder='Search' className='px-4 border-b outline-none' />
            <h4 className='pl-4 py-4 font-bold text-xl '>Filter By</h4>
            <div className='pl-4 flex gap-2'>
            <input type="checkbox" id="scales" name="scales"  />
            <p className='font-medium text-gray-400'>Painting</p>
            </div>
            <div className='pl-4 flex gap-2 my-2'>
            <input type="checkbox" id="scales" name="scales"  />
            <p className='font-medium text-gray-400'>Sculptures</p>
            </div>
            <div className='pl-4 flex gap-2'>
            <input type="checkbox" id="scales" name="scales"  />
            <p className='font-medium text-gray-400'>Photography</p>
            </div>

        </div> */}
        <div className='w-full Gallery_Grid_Area '>
       <GalleryImage src='/Images/Painting.jpg' txt='Painting' cls={'Itm-1'}/>
       <GalleryImage src='/Images/Sculpture.jpg' txt='Sculpture' cls={'Itm-2'}/>
       <GalleryImage src='/Images/Wedding-Woman.jpg' txt='Hidden Bride' cls={'Itm-3'}/>
       <GalleryImage src='/Images/HappyBirthday.jpg' txt='BirthDay' cls={'Itm-4'}/>
       <GalleryImage src='/Images/RiverSide.jpg' txt='River side' cls={'Itm-5'}/>
       <GalleryImage src='/Images/Suit-Guy.jpg' txt='Suit' cls={'Itm-6'}/>


        </div>
        </section>
    </div>
  )
}

export default page