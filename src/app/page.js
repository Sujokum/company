import Banner from "@/component/BannerSec/Banner"
import Accomplishments from "@/component/Accomplishment/Accomplishments"
import Text from "@/component/TextSec/Text"
import Slider from "@/component/Slider/Slider"
import OurPic from "@/component/OurPicSec/OurPic"
export default function Home() {
  return (
   <main>
    <Banner/>
    <Accomplishments/>
    <Text/>
    <Slider/>
    <OurPic/>
   </main>
  )
}
