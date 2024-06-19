import Image from 'next/image'
const ArtistCard = ({src}:{src:string}) => {
  return (
   
    <div className="flex items-center flex-col mb-32">
        <Image src={src} width={500} height={500} alt='' className="w-80 h-80 object-cover rounded-3xl"/>
        <h3 className="font-bold text-gray-800 mt-12 text-lg">John Doe</h3>
        <div className='flex my-4 gap-2'>
   <Image src={'/Icons/Twitter.svg'} width={20} height={20} className='hover:cursor-pointer hover:scale-110 duration-500 ' alt=''/>
   <Image src={'/Icons/Instagram.svg'} width={20} height={20} alt='' className='hover:cursor-pointer hover:scale-110 duration-500 ' />
   <Image src={'/Icons/Facebook.svg'} width={20} height={20} alt='' className='hover:cursor-pointer hover:scale-110 duration-500 ' />
        </div>

    <p className="w-136 text-center font-light text-gray-700 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

        </div>
  )
}

export default ArtistCard