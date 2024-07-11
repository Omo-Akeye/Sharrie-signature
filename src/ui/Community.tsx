import img1 from '../assets/image 25 (1).jpg'
import img2 from '../assets/image 25 (2).jpg'
import img3 from '../assets/image 25 (3).jpg'
import img4 from '../assets/image 25.jpg'

export default function Community() {
  return (
    <div className="bg-[#E4F5E0] grid md:grid-cols-2 xl:gap-40 md:gap-20 mt-10">
        <section className="ml-[10%] xl:my-44 md:my-36 my-8 order-last md:order-1">
            <h1 className="lora font-bold xl:text-6xl md:text-5xl text-4xl">Join our online community</h1>
            <p className='md:my-8 my-4 w-[80%] max-md:text-xs'>Stay updated with the latest skincare tips, product launches, and exclusive offers  </p>
            <p className='text-[#408C2B] inline-block border-b-[1px] border-[#408C2B]'>Follow us</p>
        </section>
        <section className='order-1 md:order-2 flex justify-end'>
            <main>

            <div className='flex md:gap-12 gap-3'>
                <div className='flex items-end'>
                <img src={img1} alt="" className='xl:w-72 xl:h-[300px] md:w-60 md:h-52 rounded-md object-cover h-[100px] w-[100px] ' />
                </div>
                <img src={img2} alt="" className='xl:w-96 xl:h-[341px] rounded-md object-cover md:w-72 md:h-80  w-36 h-32 ' />
            </div>
            <div className='flex md:gap-12 md:mt-8 gap-3 mt-3 max-md:justify-end'>
                <div className='flex items-end'>
                <img src={img4} alt="" className='xl:w-52 xl:h-56 rounded-md object-cover md:w-48 md:h-40 w-20 h-20' />
                </div>
                <img src={img3} alt="" className='xl:w-96 xl:h-64 object-cover md:w-64 md:h-52 rounded-md w-36 h-[88px]'/>
            </div>
            </main>
        </section>
    </div>
  )
}
