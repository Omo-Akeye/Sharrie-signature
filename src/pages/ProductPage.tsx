import Product from "../components/Product";


export default function ProductPage() {
  return (
    <div>
    <section className="w-full bg-center bg-cover prod-g h-[356px] pt-[106px]">
     
     <div className="w-[60%] m-auto">
     <h1 className="text-[#0A0B0A] text-5xl font-semibold text-center leading-[57px]">Pamper your skin 
     with nature’s  finest ingredients</h1>
     </div>
    </section>
    <Product products={[]}/>
    </div>
  )
}
