import img1 from '../assets/image 25 (1).jpg'
import img2 from '../assets/image 25 (2).jpg'
import img3 from '../assets/image 25 (3).jpg'
import img4 from '../assets/image 25 (4).jpg'

export default function Community() {
  return (
    <div className="bg-[#E4F5E0] grid grid-cols-2 xl:gap-40 gap-20 mt-10">
        <section className="ml-[10%] xl:my-44 my-36">
            <h1 className="lora font-bold xl:text-6xl text-5xl">Join our online community</h1>
            <p className='my-8 w-[80%]'>Stay updated with the latest skincare tips, product launches, and exclusive offers  </p>
            <p className='text-[#408C2B] inline-block border-b-[1px] border-[#408C2B]'>Follow us</p>
        </section>
        <section className=''>
            <div className='flex gap-12 '>
                <div className='flex items-end'>
                <img src={img1} alt="" className='xl:w-72 xl:h-[300px] w-60 h-52 rounded-md object-cover' />
                </div>
                <img src={img2} alt="" className='xl:w-96 xl:h-[341px] rounded-md object-cover w-72' />
            </div>
            <div className='flex gap-12 mt-8'>
                <div className='flex items-end'>
                <img src={img3} alt="" className='xl:w-52 xl:h-56 rounded-md object-cover w-48 h-40' />
                </div>
                <img src={img4} alt="" className='xl:w-96 xl:h-64 object-cover w-64 h-52 rounded-md'/>
            </div>
        </section>
    </div>
  )
}
