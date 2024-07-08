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
    <div className="mt-24 overflow-hidden" >
        <section className="ml-[5%]">
        <h1 className="text-[#0A0B0A] text-xl font-light">Customer review </h1>
        <h1 className="text-[#0A0B0A] font-medium text-4xl my-9">In your own words-</h1>
        <div className='flex gap-5'>
            <img src={img} alt="" className='xl:w-[412px] xl:h-[430px] object-cover w-96 h-[340px]'/>
            <ul className='flex gap-5'>
              {review.map((reviews) => 
              <li key={reviews.id} className='xl:w-[540px] xl:h-[430px] border-[2px] p-5 rounded-lg  w-96 h-[340px]'>
                     <p className='xl:text-xl text-right text-lg'>{reviews.date}</p>
                     <img src={quote} alt="" className='w-12 h-12' />
                     <p className='xl:text-3xl text-[#343434] xl:leading-10 text-xl'>{reviews.reviews}</p>
                     <div className='flex justify-end'>
                     <img src={quote2} alt="" className='w-12 h-12'/>
                     </div>
                     <p className='text-xl text-[#5A5A5A]'>-{reviews.name}</p>

              </li>)}
            </ul>
        </div>
        <div className='w-[90%]  border-b-[8px] border-[#FAFAFA] m-auto mt-6'></div>
        <div className='flex justify-center my-8'>
          <img src={r} alt="" />
        </div>
        </section>
    </div>
  )
}
