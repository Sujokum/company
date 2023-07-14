import Banner from "@/component/BannerSec/Banner"
// import Accomplishments from "@/component/Accomplishment/Accomplishments"
import Testimonial from "@/component/testimonial/Testimonial"
import Text from "@/component/TextSec/Text"
import Slider from "@/component/Slider/Slider"
import OurPic from "@/component/OurPicSec/OurPic"
import TeamSlider from "@/component/TeamSlider/TeamSlider"
import WeFlow from "@/component/WeFlow/WeFlow"
import CaseStudy from "@/component/CaseStudy/CaseStudy"
export default function Home() {
  return (
   <main>
    <Banner/>
    <Testimonial/>
    <Text/>
    <Slider/>
    <WeFlow/>
    <OurPic/>
    <TeamSlider/>
    <CaseStudy/>
   </main>
  )
}
