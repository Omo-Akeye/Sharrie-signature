
import { useNavigate, useSearchParams } from "react-router-dom";
import { data } from "../data/data";


export default function Productdetails() {
  // const navigate = useNavigate()
  const { name } = useSearchParams();
  const product = data.find(p => p.name === (name));
  return (
    <div>
      
    </div>
  )
}
