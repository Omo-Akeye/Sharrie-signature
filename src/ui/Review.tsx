import img from '../assets/image 25 (4).jpg'
import quote from '../assets/bi_quote.svg'
import quote2 from '../assets/bi_quote (1).svg'
import r from '../assets/Frame 50.svg'


const review = [
  {
    id: 1,
    reviews:'I’ve been using this RadiantGlow Vitamin C Serum  for a few weeks, and my skin has never looked better! It’s brighter, smoother, and more even-toned.',
    name:'Jane D.',
    date:' 01/04/24',
  },
  {
    id: 1,
    reviews:"I’ve been using this RadiantGlow Vitamin C Serum  for a few weeks, and my skin has never looked better! It’s brighter, smoother, and more even-toned.",
    name:'Sarah K.',
    date:' 21/07/24',
  },
]

export default function Review() {
  return (
    <div className="md:mt-24 mt-12 overflow-hidden" >
        <section className="ml-[5%]">
        <h1 className="text-[#0A0B0A] md:text-2xl text-sm font-light spacing1">Customer review </h1>
        <h1 className="text-[#0A0B0A] font-medium md:text-4xl md:mt-8 mt-4 mb-12 text-[28px]">In your own words-</h1>
        <div className='flex md:gap-5 gap-4'>
            <img src={img} alt="" className='xl:w-[412px] xl:h-[430px] object-cover md:w-96 md:h-[340px] w-44 h-48'/>
            <ul className='flex gap-5'>
              {review.map((reviews) => 
              <li key={reviews.id} className='xl:w-[540px] xl:h-[430px] border-[2px] md:p-5 p-3 rounded-lg  md:w-96 md:h-[340px] h-48 w-[360px]'>
                     <p className='md:text-lg text-right xl:text-xl text-sm hidden'>{reviews.date}</p>
                     <img src={quote} alt="" className='md:w-12 md:h-12 w-5 h-5' />
                     <p className='xl:text-3xl text-[#343434] xl:leading-10 md:text-xl md:my-3 text-sm'>{reviews.reviews}</p>
                     <div className='flex justify-end'>
                     <img src={quote2} alt="" className='w-12 h-12'/>
                     </div>
                     <p className='md:text-xl text-[#5A5A5A] text-sm'>-{reviews.name}</p>

              </li>)}
            </ul>
        </div>
        <div className='w-[90%]  border-b-[8px] border-[#FAFAFA] m-auto mt-6'></div>
        <div className='flex justify-center my-8'>
          <img src={r} alt="" className='max-md:w-28' />
        </div>
        </section>
    </div>
  )
}
