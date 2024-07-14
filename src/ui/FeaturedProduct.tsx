import Product from "../components/Product";
import useFetchProducts from "../hooks/fetchProducts";



export default function FeaturedProduct() {
  const { data, status, error } = useFetchProducts();
  if (status === 'loading') return <div>Loading...</div>;
  if(!data) return null;
  if (error) return <div>ERROR</div>
  const featuredProducts = data.slice(0,6)

  

  return (
    <div className="w-[90%] m-auto md:mt-24 mt-12" id="featured">
       <div className='md:text-2xl text-sm font-light border-b-[1px] mb-10 pb-4 spacing1'>Featured Products</div>
       <section>
        <Product products={featuredProducts} />
       </section>
    </div>
  )
}
