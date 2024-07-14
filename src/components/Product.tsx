import { Link } from "react-router-dom";
import CartBtn from "./CartBtn";


interface Product {
  id: string;
  name: string;
  description: string;
  current_price: { NGN: number }[];
  photos: { url: string }[];
}
interface ProductProps {
  products: Product[]
}
export default function Product({products}:ProductProps) {
  
  return (
    <div>
      <section className="grid grid-cols-2 gap-4 text-sm md:grid-cols-3 md:gap-5">
        {products.map((product: Product) => (
          <Link to={`/${product.name}`} key={product.id}>
            <div>
              <img
                src={`https://api.timbu.cloud/images/${product.photos[0]?.url}`}
                alt={product.name}
                className="xl:w-[413px] xl:h-80 object-cover md:w-96 md:h-72 w-40 h-40 rounded-[16px]"
              />
              <div className="border-t-[1px] mt-6 pt-3 flex justify-between md:px-3 flex-shrink-0">
                <span>
                  <p className="text-[#797A7B] md:text-base text-xs">{product.name}</p>
                  <p className="text-sm font-medium md:text-base">
                  ₦ {product.current_price[0].NGN}
                  </p>
                </span>
                <CartBtn product={product} />
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
