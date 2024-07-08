
import arrow from '../assets/arrow-right.svg'
interface ButtonProps {
    children :string
}
export default function Button({children}:ButtonProps) {
  return (
    <button className="h-10 w-32 bg-[#408C2B] text-white rounded-md text-sm px-2">
        <span className='flex items-center justify-center'>
        {children} 
        <img src={arrow} alt="" className='ml-2' />
        </span>
    </button>
  )
}
