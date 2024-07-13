// import bg1 from '../assets/bg1.svg'
import Button from "../components/Button"


export default function Hero() {
  return (
    <div className="w-full bg-center bg-cover md:h-[90vh] h-80 text-white bg-hero">
       <article className="m-auto text-center xl:pt-32 md:pt-28 w-[90%] pt-[70px]">
       <h1 className="xl:text-[64px] lora font-extrabold capitalize md:text-[52px] mb-6 text-2xl">Unveil your natural radiance</h1>
       <div className="md:w-[70%] m-auto">
       <p className="text-xs font-normal md:text-xl xl:text-2xl mb-14">From radiant serums to hydrating moisturizers, experience the ultimate in skincare indulgence</p>
       <Button >Exlplore</Button>
       </div>
       </article>
    </div>
  )
}
