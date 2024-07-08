import Product from "../components/Product";


export default function MightLike() {
  return (
    <div className="w-[90%] m-auto mt-24">
       <div className='text-xl font-light border-b-[1px] mb-10 pb-4 flex justify-between'>
        <h2>You might like</h2>
        <span className="text-[#408C2B] text-sm font-light">view all</span>
       </div>
       <section>
        <Product/>
       </section>
    </div>
  )
}
