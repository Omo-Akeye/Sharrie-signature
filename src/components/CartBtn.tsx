import { useState } from "react";


export default function CartBtn() {
  const [showAlert, setShowAlert] = useState(false);

  const addToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
        <>
           {showAlert && (
        <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-2 w-40 m-auto mt-5">
          Item added to cart!
        </div>
      )}
    <button className="xl:px-12 py-1 md:py-2 px-1 border-[2px] border-[#408C2B] md:px-6 rounded-md text-[#408C2B] text-[8px] md:text-base flex-shrink-0" onClick={addToCart}>
        Add to cart
    </button>
      </>
  )
}
