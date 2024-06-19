import Button from "@/app/Components/Button";
import Image from "next/image";
import Link from "next/link";
import { RouteUrl } from "@/app/Utils/data";
export default function Home() {
  
  return (
    <main className="mb-10 flex  flex-col">
      <section className="Section-1 w-full px-32 py-10 xl:px-40 flex md:justify-between md:flex-row  flex-col justify-center items-center ">
        <div className="md:w-1/2   pt-10 flex flex-col items-center ">

        <h3 className="xl:text-6xl lg:text-4xl font-extralight text-primary md:text-3xl text-2xl">Hi I’m Jane</h3>
        <h2 className="xl:text-8xl lg:text-7xl text-5xl font-bold  text-gray-800 text-center py-8">Professional Photographer </h2>
        <p className="text-center text-gray-500 pb-8 font-normal lg:w-10/12 xl:w-7/12  md:text-base text-xs">I take professional photos of people and events like weddings,prom and etc. I deliver with high quality photos and on time</p>
        <Link href={RouteUrl+'Gallery'}>
        <Button txt="Check Gallery" Icon="/Icons/Link.svg"/>
        </Link>
        </div>
        <Image src={'/Images/HeroImg.png'} width={300} height={300} alt="" className="lg:w-2/5 md:w-60 max-w-costum1 object-contain mt-32  w-72"/>

      </section>
      <section className="py-32 border-t w-full xl:px-20 lg:px-12 px-8">
        <div>
          <h4 className="xl:text-4xl lg:text-2xl md:text-xl text-lg font-bold lg:pb-12 text-gray-700 pb-6">I’m available for taking photos</h4>
          <p className="text-lg text-gray-500">If you needa photographer for your photos of any event?</p>
          <div className="flex gap-2 lg:py-6 py-4">
          <Link href={'https://mail.google.com/'} target='_blank'>
        <p className='hover:underline hover:cursor-pointer font-bold text-primary  '>Someone@gmail.com</p>
            </Link>
            <p className='text-gray-500 font-medium '>(912)-210-0936</p>
          </div>
          <Button txt="Contact Me"/>
          
        </div>

      </section>
    </main>
  );
}
