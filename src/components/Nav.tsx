import navbar from '../assets/menu.svg'
import searchbox from '../assets/search.svg'
import phone from '../assets/phone.svg'
import cart from '../assets/shopping-cart.svg'
import avatar from '../assets/Avatar.svg'

export default function Nav() {
  return (
    <nav className="w-[90%] m-auto flex justify-between xl:my-8 text-sm my-4 items-center">
        <div className='flex items-center gap-6'>
            <span className='flex gap-2'>
                <img src={navbar} alt="" className='w-4 h-4' />
                <h2 className='text-sm'>Menu</h2>
            </span>
            <span className='flex items-center gap-2'>
                <img src={searchbox} alt="" className='w-4 h-4' />
                <input type="text" name="" id=""  className='w-16 h-6 outline-none'/>
            </span>
        </div>
        <h2 className='text-3xl redress text-[#408C2B]'>Sharrie's Signature</h2>

        <div className='flex gap-6'>
            <span className='flex gap-2'>
                <img src={phone} alt="" className='w-4 h-4'/>
                <h2>Contact us</h2>
            </span>
            <span className='flex gap-2'>
                <img src={cart} alt="" className='w-4 h-4'/>
                <h2>Cart</h2>
            </span>
            <img src={avatar} alt="" className='w-4 h-4'/>
        </div>

    </nav>
  )
}
