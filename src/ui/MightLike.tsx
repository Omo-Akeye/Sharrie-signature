import Product from "../components/Product";



export default function MightLike() {
  // const reversedProducts = [...data].reverse().slice(0, 6);
  return (
    <div className="w-[90%] m-auto md:mt-24 mt-12">
       <div className='text-xl font-light border-b-[1px] mb-10 pb-4 flex justify-between'>
        <h2 className="text-sm font-light md:text-2xl spacing2">You might like</h2>
        <span className="text-[#408C2B] text-sm font-light">view all</span>
       </div>
       <section>
       <Product products={[]}/>
       </section>
    </div>
  )
}
