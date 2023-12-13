const link = "https://tally.so/r/mRMxGJ"

import Container from "../../layout/Container"
import HeroTitle from "./HeroTitle"
import HeroImage from "./HeroImage"
import Flipbox from "../../layout/Flipbox"

export default () => 
<header className="py-32">
  <Container>
    <Flipbox flip={true}>
        <HeroTitle/>       
        <HeroImage/>
    </Flipbox>
  </Container> 
</header>