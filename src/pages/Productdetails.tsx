import { useNavigate, useParams } from "react-router-dom";
import MightLike from "../ui/MightLike";
import chevron from '../assets/chevron-down.svg';
import chevronup from '../assets/chevron-up.svg';
import CartBtn from "../components/CartBtn";
import chevBck from "../assets/Frame 70.svg";
import { useState } from "react";
import useFetchProducts from "../hooks/fetchProducts";

export default function Productdetails() {
  const { data, status, error } = useFetchProducts();
  const getImageUrl = (imagePath: string): string => {
    return `https://api.timbu.cloud/images/${imagePath}`;
  };
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const { name } = useParams();
  const product = data?.find((p: { name: string | undefined; }) => p.name === (name));

  if (!product) {
    return <div>Product not found</div>;
  }

 
  return (
    <div>
      <section className="grid gap-16 md:grid-cols-2 xl:gap-32 md:gap-24">
        <div className="md:-mt-[17%] -mt-[120px]">
          <img src={chevBck} alt="" className="absolute top-[15%] left-[5%] cursor-pointer" onClick={() => navigate(-1)} />
          <img src={getImageUrl(product.photos[0]?.url)} alt="" className="md:w-[50vw] w-full md:h-[100vh] h-[435px] object-cover" />
        </div>
        <section className="md:mt-20 xl:mt-44 md:mr-[10%] max-md:mx-[10%]">
          <div className="flex justify-between">
            <p className="text-[#6E6E6E] md:text-xl">RS34670</p>
            <p className="text-[#408C2B] text-sm">In Stock</p>
          </div>
          <h1 className="my-6 text-2xl font-semibold">{product.name}</h1>
          <p className="text-[#5A5A5A] text-sm font-light">{product.description}</p>
          <p className="text-[#4EAB35] text-xs my-6">Made with pure natural ingredients</p>
          <div className="text-[#343434] border-b-[1px] text-sm mb-6 pb-2">
            <span className="flex justify-between">
              <p>How to use</p>
              <img src={toggle ? chevronup : chevron} alt="" onClick={() => setToggle(!toggle)} className="cursor-pointer" />
            </span>

            {toggle && <>
              <p className="mb-2 text-sm">Apply a generous amount to damp skin, massage in circular motions, and rinse thoroughly.</p>
              <p>Use 2-3 times a week for best results.</p>
            </>}
          </div>
          <div className="text-[#343434] flex justify-between border-b-[1px] text-sm">
            <p>Delivery & drop-off</p>
            <img src={chevron} alt="" />
          </div>
          <div className="flex justify-between mt-12">
            <main>
              <p className="text-[#797A7B] font-light">Sub Total</p>
              <p className="text-sm font-semibold">${product.current_price[0].value}.00</p>
            </main>
            <CartBtn product={product} />
          </div>
        </section>
      </section>
      <MightLike />
    </div>
  );
}
