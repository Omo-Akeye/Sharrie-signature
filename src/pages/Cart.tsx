import {  useSelector } from 'react-redux';
import { RootState } from '../store';
import EmptyCart from '../ui/EmptyCart';
import MightLike from '../ui/MightLike';
import deleteBtn from '../assets/Delete.png';
// import { deleteItem, decreaseItem, increaseItem } from '../cartSlice/cartSlice';

// interface CartItem {
//   id: number;
//   name: string;
//   src: string;
//   price: number;
//   quantity: number;
//   totalPrice: number;
// }

export default function Cart() {
  // const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  
  // const handleIncrease = (id: number) => {
  //   dispatch(increaseItem(id));
  // };

  // const handleDecrease = (id: number) => {
  //   dispatch(decreaseItem(id));
  // };

  // const handleDelete = (id: number) => {
  //   dispatch(deleteItem(id));
  // };

  // const calculateSubtotal = () => {
  //   return cart.reduce((total, item) => total + item.totalPrice, 0);
  // };

  // const deliveryCost = 2.00;
  // const subtotal = calculateSubtotal();
  // const totalAmount = subtotal + deliveryCost;
  
  return (
    <div className='w-[90%] m-auto'>
      {cart.length > 0 ? (
        <section>
          <div className='border-b-[2px] mb-16'>
            <h2>Cart</h2>
          </div>
          <main className='grid justify-between md:flex'>
            <ul>
              {cart.map((item) => (
                <li key={item.id} className='flex gap-32 mt-6'>
                  <div className='flex gap-5 md:gap-28'>
                    <img src={item.src} alt={item.name} className='xl:w-[305px] xl:h-[344px] md:h-64 md:w-64 w-[100px] h-[120px] rounded-lg object-cover' />
                    <div className='max-md:text-sm'>
                      <p className='text-[#6E6E6E] font-light'>RS34670</p>
                      <h2 className='mt-6 md:mb-16'>{item.name}</h2>
                      <p className='text-[#797A7B] '>unit price</p>
                      <p className='font-bold'>{item.price}</p>
                      <span className='flex gap-5'>
                        <div className='flex border-[1px] md:gap-12 gap-4 items-center px-4 font-semibold'>
                          <button >-</button>
                          <p className=''>{item.quantity}</p>
                          <button >+</button>
                        </div>
                        <img src={deleteBtn} alt="Delete"  className='w-[50px] h-[36px] cursor-pointer' />
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className='border-[2px] xl:w-[433px] h-[320px] text-center p-11 max-md:mt-11'>
              <h1 className='font-semibold'>Cart Summary</h1>
              <span className='flex justify-between my-4'>
                <p>Sub-total</p>
                <p>$779</p>
              </span>
              <span className='flex justify-between'>
                <p>Delivery</p>
                <p>$965</p>
              </span>
              <section className='flex items-center justify-between gap-2 my-4'>
                <button className='text-sm border-[1px] px-4 py-2 rounded-md'>Cancel</button>
                <span className=''>
                  <p>Total amount</p>
                  <p>$5685</p>
                </span>
                <button className='bg-[#408C2B] text-sm px-4 rounded-md py-2 text-white'>Checkout</button>
              </section>
            </div>
          </main>
        </section>
      ) : (<EmptyCart />)}
      <MightLike />
    </div>
  );
}
