import Product from "../components/Product";
import useFetchProducts from "../hooks/fetchProducts";

export default function ProductPage() {
  const { data, status, error } = useFetchProducts();
  if (status === 'loading') return <div>Loading...</div>;
  if(!data) return null;
  if (error) return <div>ERROR</div>
  const product = data
  return (
    <div>
    <section className="w-full bg-center bg-cover prod-g h-[356px] pt-[106px]">
     
     <div className="w-[60%] m-auto">
     <h1 className="text-[#0A0B0A] text-5xl font-semibold text-center leading-[57px]">Pamper your skin 
     with nature’s  finest ingredients</h1>
     </div>
    </section>
    <main className="my-12 w-[90%] m-auto">
    <Product products={product}/>
    </main>
    
    </div>
  )
}
