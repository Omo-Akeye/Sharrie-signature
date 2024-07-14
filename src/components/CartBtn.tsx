import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../cartSlice/cartSlice";
import { Product } from "../store"

interface CartBtnProps {
  product: Product;
}

export default function CartBtn({ product }: CartBtnProps) {
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();

  function handleAddCart(e: React.MouseEvent) {
    e.preventDefault();
    const newItem = {
      id: product.id,
      name: product.name,
      quantity: 1,
      src: `https://api.timbu.cloud/images/${product.photos[0]?.url}`, 
      price: product.current_price[0].NGN,
      totalPrice: product.current_price[0].NGN * 1,
    };
    dispatch(addItem(newItem));
  }

  const addToCart = (e: React.MouseEvent) => {
    handleAddCart(e);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  return (
    <>
      {showAlert && (
        <div className="fixed top-0 left-0 right-0 w-40 py-2 m-auto mt-5 text-center text-white bg-green-500">
          Item added to cart!
        </div>
      )}
      <button
        className="xl:px-12 py-1 md:py-2 px-1 border-[2px] border-[#408C2B] md:px-6 rounded-md text-[#408C2B] text-[8px] md:text-base flex-shrink-0"
        onClick={addToCart}
      >
        Add to cart
      </button>
    </>
  );
}
