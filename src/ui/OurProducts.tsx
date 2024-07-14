import img from '../assets/Carousel card.jpg'
import mark from '../assets/emojione-v1_left-check-mark.svg'
import Button from '../components/Button'

export default function OurProducts() {
  return (
    <div className="bg-[#E4F5E0]">
      <main className="grid w-[90%] m-auto md:grid-cols-2 pt-12">
        <div className=' md:relative'>
            <img src={img} alt="" className='xl:h-[558px] xl:w-[522px] md:w-[400px] md:h-[470px] w-[334px] h-[385px] md:absolute md:-bottom-[10%] object-cover rounded-lg' />
        </div>
        <div className='md:mt-24 mt-9'>
            <div className='flex items-center gap-4'>
                <span className='md:w-4 md:h-4 w-3 h-3 bg-[#2A5C1C]'></span>
                <h1 className='text-sm font-light md:text-2xl spacing1'>Our Product</h1>
            </div>
            <h1 className='mt-8 mb-4 text-3xl font-bold text-black lora md:text-6xl'>Unlock Your Glow</h1>
            <p className='text-[#474747] md:text-base text-sm'>Explore our collection and transform your skincare routine with Sharrie’s Signature touch. Your journey to luminous, flawless skin starts here.</p>
            <div className='[&_span]:flex [&_span]:items-center md:text-sm [&_span]:gap-5 [&_span]:mb-6 mt-8 text-xs [&_img]:w-[14px] [&_img]:h-[14px]'>
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

            <div className='my-8 md:my-12'>
              <Button >Shop Now</Button>
            </div>
        </div>
      </main>
    </div>
  )
}
