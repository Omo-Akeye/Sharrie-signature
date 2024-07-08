import { data } from "../data/data"
import CartBtn from "./CartBtn"


interface Product {
    id: number;
    name: string;
    price: number;
    src: string;
  }

export default function Product() {
  return (
    <div>
        <ul className="grid grid-cols-3 gap-5 text-sm">
            {data.map((product:Product)=> 
            <li key={product.id}>
                <img src={product.src} alt="" className="xl:w-[413px] xl:h-80 object-cover w-96 h-72"/>
                <div className="border-t-[1px] mt-6 pt-3 flex justify-between px-3">
                    <span >
                        <p className="text-[#797A7B] ">{product.name}</p>
                        <p className="font-medium">${product.price}.00</p>
                    </span>
                    <div>
                        <CartBtn/>
                    </div>
                </div>
            </li>)}
        </ul>
    </div>
  )
}
