import Product from "../components/Product";
import { data } from "../data/data";


export default function FeaturedProduct() {
  const products = [...data].slice(0, 6);
  return (
    <div className="w-[90%] m-auto md:mt-24 mt-12" id="featured">
       <div className='md:text-2xl text-sm font-light border-b-[1px] mb-10 pb-4 spacing1'>Featured Products</div>
       <section>
        <Product products={products}/>
       </section>
    </div>
  )
}
