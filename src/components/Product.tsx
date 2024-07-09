import { Link } from "react-router-dom";
import CartBtn from "./CartBtn";

interface Product {
  id: number;
  name: string;
  price: number;
  src: string;
}

interface ProductProps {
  products: Product[];
}

export default function Product({ products }: ProductProps) {
  return (
    <div>
      <section className="grid md:grid-cols-3 grid-cols-2 md:gap-5 gap-4 text-sm">
        {products.map((product: Product) => (
             <Link to={`/${product.name}`} key={product.id}>
          <div >
            <img
              src={product.src}
              alt=""
              className="xl:w-[413px] xl:h-80 object-cover md:w-96 md:h-72 w-40 h-40  rounded-[16px]"
            />
            <div className="border-t-[1px] mt-6 pt-3 flex justify-between md:px-3 flex-shrink-0">
              <span>
                <p className="text-[#797A7B] md:text-base text-xs">{product.name}</p>
                <p className="font-medium text-sm md:text-base">${product.price}.00</p>
              </span>
            
                <CartBtn />
              
            </div>
          </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
