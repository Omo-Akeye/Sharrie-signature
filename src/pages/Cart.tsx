import { Link } from 'react-router-dom'
import cartimg from '../assets/shopping-cart1.svg'
import MightLike from '../ui/MightLike'

export default function Cart() {
  return (
    <div className='w-[90%] m-auto'>
     <main className='flex justify-center items-center md:my-28 my-20'>
     <section className='text-center md:w-[50%] m-auto w-[80%]'>
        <div className='flex items-center justify-center'>
        <img src={cartimg} alt="" className='max-md:w-16 max-md:h-16' />
        </div>
           
            <h1 className='text-[#0A0B0A] font-semibold text-[28px] mt-12 mb-6 text-xl'>Your cart is empty</h1>
            <p className='text-[#818181] md:mb-12 max-md:text-xs mb-8'>Explore our collections today and start your journey towards radiant beauty. Your skin will thank you</p>
            <Link to={'/'}>
            <button className='bg-[#408C2B] text-white text-sm px-4 py-3 rounded-md w-40'>Start shopping</button>
            </Link>
            
        </section>
     </main>
     <MightLike/>
    </div>
  )
}
