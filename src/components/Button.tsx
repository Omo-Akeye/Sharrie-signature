import { Link } from 'react-router-dom';
import arrow from '../assets/arrow-right.svg';

interface ButtonProps {
    children: string;
 // target element ID to scroll to
}

export default function Button({ children}: ButtonProps) {
  return (
    <Link to={'/product'} >
      <button className="md:h-10 md:w-32 h-8 w-24 bg-[#408C2B] text-white rounded-md md:text-sm text-xs px-2">
        <span className='flex items-center justify-center'>
          {children} 
          <img src={arrow} alt="" className='md:ml-2 max-md:w-3 max-md:h-3 ml-1' />
        </span>
      </button>
    </Link>
  );
}
