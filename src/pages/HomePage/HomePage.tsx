import * as SC from "./HomePageStyled"

import HomeFooter from "../../components/HomeFooter/HomeFooter";
import Intro from "../../components/Intro/Intro";
import Proposition from "../../components/Proposition/Proposition";

import bg_mob from "../../assets/images/footer_bg_mob.svg"

const HomePage:React.FC = () => {
    return (
      <SC.CommonWrapper bg={bg_mob}>
        <Intro />
        <Proposition />
        <HomeFooter />
      </SC.CommonWrapper>
    );
}
 
export default HomePage;