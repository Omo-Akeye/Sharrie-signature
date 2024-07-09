import navbar from '../assets/menu.svg'
import searchbox from '../assets/search.svg'
import phone from '../assets/phone.svg'
import cart from '../assets/shopping-cart.svg'
import avatar from '../assets/Avatar.svg'
import menu from '../assets/menu.svg'
import chevron from '../assets/chevron-right.svg'
import x from '../assets/x.svg'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

export default function Nav() {
    const [navToggle,setNavToggle] = useState(false)
  return (
    <>
    <nav className="w-[90%] m-auto flex justify-between xl:my-8 text-sm md:my-4 my-8 items-center relative z-50">
        <div className='md:flex items-center gap-6 hidden'>
            <span className='flex gap-2'>
                <img src={navbar} alt="" className='w-4 h-4' />
                <h2 className='text-sm'>Menu</h2>
            </span>
            <span className='flex items-center gap-2'>
                <img src={searchbox} alt="" className='w-4 h-4' />
                <input type="text" name="" id=""  className='w-16 h-6 outline-none bg-transparent placeholder-black' placeholder='Search'/>
            </span>
        </div>
        <img src={menu} alt="" className='md:hidden flex cursor-pointer' onClick={()=>setNavToggle(!navToggle)} />
        <Link to={'/'}>
        <h2 className='md:text-3xl redress text-[#408C2B] text-[20px]'>Sharrie's Signature</h2>
        </Link>

        <div className='md:flex gap-6 hidden'>
            <span className='flex gap-2'>
                <img src={phone} alt="" className='w-4 h-4'/>
                <h2>Contact us</h2>
            </span>
            <NavLink to={'/cart'}>
            <span className='flex gap-2'>
                
                <img src={cart} alt="" className='w-4 h-4'/>
                <h2>Cart</h2>
               
            </span>
            </NavLink>
            <img src={avatar} alt="" className='w-4 h-4'/>
        </div>


        <NavLink to={'/cart'} className='flex md:hidden'>
            <span className='flex'>
                <img src={cart} alt="" className='w-5 h-5'/>
            </span>
            </NavLink>





    </nav>


    {navToggle && 
    <main className='w-60 h-64 bg-white fixed ml-[40px] shadow-lg'>
    <div className='flex ml-[10%] mt-14 mb-6 gap-1 text-sm font-light items-center'>
      <img src={x} alt="" className='w-3 h-3 cursor-pointer' onClick={()=>setNavToggle(!navToggle)} />
      <p>Menu</p>
    </div>
    <ul className='bg-[#FAFAFA] text-sm font-light [&_li]:border-y-[1px] [&_li]:py-2 ' >
    <li>
        <span className='flex  w-[80%] m-auto justify-between'>
        <p>Cleanse & prep</p>
        <img src={chevron} alt="" />
        </span>
     </li>
     <li>
        <span className='flex w-[80%] m-auto justify-between'>
        <p>Moisturizes & protect</p>
        <img src={chevron} alt="" />
        </span>
     </li>
     <li>
        <span className='flex w-[80%] m-auto justify-between'>
        <p>Treat & Nourish</p>
        <img src={chevron} alt="" />
        </span>
     </li>
     <li>
        <span className='flex w-[80%] m-auto justify-between'>
        <p>Body Care</p>
        <img src={chevron} alt="" />
        </span>
     </li>
    </ul>
 </main>}
    
    </>
  )
}


