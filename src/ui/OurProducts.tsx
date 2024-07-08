import img from '../assets/Carousel card.jpg'
import mark from '../assets/emojione-v1_left-check-mark.svg'
import Button from '../components/Button'

export default function OurProducts() {
  return (
    <div className="bg-[#E4F5E0]">
      <main className="grid w-[90%] m-auto grid-cols-2">
        <div className=' relative'>
            <img src={img} alt="" className='xl:h-[558px] xl:w-[522px] w-[400px] h-[470px] absolute -bottom-[10%] object-cover' />
        </div>
        <div className='mt-24'>
            <div className='flex items-center gap-4'>
                <span className='w-4 h-4 bg-[#2A5C1C]'></span>
                <h1 className=' font-light text-2xl'>Our Product</h1>
            </div>
            <h1 className='font-bold text-black lora mt-8 mb-4 text-6xl'>Unlock Your Glow</h1>
            <p className='text-[#474747] text-base'>Explore our collection and transform your skincare routine with Sharrie’s Signature touch. Your journey to luminous, flawless skin starts here.</p>
            <div className='[&_span]:flex [&_span]:items-center [&_span]:text-sm [&_span]:gap-5 [&_span]:mb-6 mt-8'>
                <span >
                    <img src={mark} alt="" />
                    <p>Natural Ingredients: Harnessing the power of nature with ethically sourced, pure ingredients.</p>
                </span>
                <span >
                    <img src={mark} alt="" />
                    <p>Expertly Formulated: Developed by skincare experts to deliver visible, long-lasting results.</p>
                </span>
           
                <span >
                    <img src={mark} alt="" />
                   <p>Cruelty-Free: Committed to ethical practices with no animal testing.</p>
                </span>
                
            </div>

            <div className='my-12'>
              <Button>Shop Now</Button>
            </div>
        </div>
      </main>
    </div>
  )
}
