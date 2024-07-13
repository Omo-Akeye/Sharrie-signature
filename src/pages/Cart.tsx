
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';

import EmptyCart from '../ui/EmptyCart';
import MightLike from '../ui/MightLike';
import deleteBtn from '../assets/Delete.png';
import { deleteItem, decreaseItem, increaseItem } from '../cartSlice/cartSlice';

interface CartItem {
  id: number;
  name: string;
  src: string;
  price: number;
  quantity: number;
}

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);
  console.log(cart);
  
  const handleIncrease = (id: number) => {
    dispatch(increaseItem(id));
  };

  const handleDecrease = (id: number) => {
    dispatch(decreaseItem(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteItem(id));
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  const deliveryCost = 2.00;
  const subtotal = calculateSubtotal();
  const totalAmount = subtotal + deliveryCost;
  
  return (
    <div className='w-[90%] m-auto'>
      {
        cart.length > 0 ? (
          <section>
            <div>
              <h2>Cart</h2>
            </div>
            <main className='flex justify-between'>
              <ul>
                {cart.map((item) => (
                  <li key={item.id} className='flex gap-32'>
                    <div>
                      <img src={item.src} alt={item.name} className='w-[305px] h-[344px] object-cover' />
                      <div>
                        <p className='text-[#6E6E6E] font-light'>RS34670</p>
                        <h2 className='mt-6 mb-16'>{item.name}</h2>
                        <p>unit price</p>
                        <span className='flex '>
                          <div className='flex'>
                            <button onClick={() => handleDecrease(item.id)}>-</button>
                            <p>{item.quantity}</p>
                            <button onClick={() => handleIncrease(item.id)}>+</button>
                          </div>
                          <img src={deleteBtn} alt="Delete" onClick={() => handleDelete(item.id)} className='w-[91px] h-16 cursor-pointer'/>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div>
                <h1>Cart Summary</h1>
                <span className='flex'>
                  <p>Sub-total</p>
                  <p>${subtotal.toFixed(2)}</p>
                </span>
                <span className='flex'>
                  <p>Delivery</p>
                  <p>${deliveryCost.toFixed(2)}</p>
                </span>
                <section className='flex'>
                <button>Cancel</button>
                  <span>
                    <p>Total amount</p>
                    <p>${totalAmount.toFixed(2)}</p>
                  </span>
                  <button>Checkout</button>
                </section>
              </div>
            </main>
          </section>
        ) : (<EmptyCart/>)
      }
      <MightLike/>
    </div>
  );
}

































// import product from '../assets/Frame 31 (1).jpg'
// import EmptyCart from '../ui/EmptyCart'
// import MightLike from '../ui/MightLike'
// import deleteBtn from '../assets/Delete.png'
// import {  useDispatch, useSelector } from 'react-redux';

// interface cartItem {
//   id: number;
//   name: string;
//   src: string;
//   price: number;
//   quantity: number
// }
// export default function Cart() {
//   const dispatch = useDispatch()
//   const cart = useSelector((state: RootState) => state.cart.cart);
//   console.log(cart);
  
  
//   return (
//     <div className='w-[90%] m-auto'>
//       {
//         cart.length > 0 ?  (
//           <section>
//           <div>
//             <h2>Cart</h2>
//           </div>
//           <main className='flex justify-between'>
//             <ul>

//             {cart.map((carts):cartItem => {
//              <li className='flex gap-32'>
//                   <div >
//               <img src={} alt="" className='w-[305px] h-[344px] object-cover' />
//               <div>
//                 <p className='text-[#6E6E6E] font-light'>RS34670</p>
//                 <h2 className='mt-6 mb-16'>{carts.name}</h2>
//                 <p>unit price</p>
//                 <span className='flex '>
//                   <div className='flex'><p>-</p> <p>1</p> <p>+</p></div>
//                   <img src={deleteBtn} alt="" className='w-[91px] h-16'/>
//                 </span>
//               </div>
//             </div>
//              </li>
//             })}
//             </ul>
           
//             <div>
//               <h1>Cart Summary</h1>
//               <span className='flex'>
//                 <p>Sub-total</p>
//                 <p>$19.00</p>
//               </span>
//               <span className='flex'>
//                 <p>Delivery</p>
//                 <p>$2.00</p>
//               </span>
//               <section className='flex'>
//                 <button>Cancel</button>
//                 <span>
//                   <p>Total amount</p>
//                   <p>$19</p>
//                 </span>
//                 <button>Checkout</button>
//               </section>
//             </div>
//           </main>
//         </section>
//         ) : (<EmptyCart/>) 
//       }
    
  
//      <MightLike/>
//     </div>
//   )
// }
