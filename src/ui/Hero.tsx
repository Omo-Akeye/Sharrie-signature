// import bg1 from '../assets/bg1.svg'
import Button from "../components/Button"


export default function Hero() {
  return (
    <div className="w-full bg-center bg-cover h-[90vh] text-white bg-hero">
       <article className="w-[70%] m-auto text-center xl:pt-32 pt-28">
       <h1 className="xl:text-[64px] lora font-extrabold capitalize text-[52px] mb-6">Unveil your natural radiance</h1>
       <p className="text-xl font-normal xl:text-2xl mb-14">From radiant serums to hydrating moisturizers, experience the ultimate in skincare indulgence</p>
       <Button>Exlplore</Button>
       </article>
    </div>
  )
}
