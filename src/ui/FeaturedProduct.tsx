import Product from "../components/Product";


export default function FeaturedProduct() {
  return (
    <div className="w-[90%] m-auto mt-24">
       <div className='text-xl font-light border-b-[1px] mb-10 pb-4'>Featured Products</div>
       <section>
        <Product/>
       </section>
    </div>
  )
}
