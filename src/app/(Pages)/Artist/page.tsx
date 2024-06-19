import ArtistCard from "@/app/Components/ArtistCard"

const page = () => {
  return (
    <div className=' w-full flex flex-col items-center'>
        <h3 className='Page_Heading'>

        Artist
        </h3>
        <ArtistCard src={'/Images/Man-Artist.jpg'} />
        <ArtistCard src={'/Images/Woman-Artist.jpg'} />

        </div>
  )
}

export default page