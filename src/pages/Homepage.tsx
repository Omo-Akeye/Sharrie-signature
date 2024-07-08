import Community from "../ui/Community";
import FeaturedProduct from "../ui/FeaturedProduct";
import FirstOrder from "../ui/FirstOrder";
import Hero from "../ui/Hero";
import MightLike from "../ui/MightLike";
import OurCollections from "../ui/OurCollections";
import OurProducts from "../ui/OurProducts";
import Review from "../ui/Review";


export default function Homepage() {
  return (
    <div>
        <Hero/>
        <OurProducts/>
        <OurCollections/>
        <FeaturedProduct/>
        <FirstOrder/>
        <MightLike/>
        <Community/>
        <Review/>
    </div>
  )
}
