import * as SC from "./HomeFooterStyled"

import ButtonLink from "../../ui/ButtonLink/ButtonLink";
import Counter from "../../ui/Counter/Counter";

import bg_mob from "../../assets/images/footer_bg_mob.svg";


const HomeFooter = () => {
    return (
      <SC.FooterStyled bg={bg_mob}>
        <Counter location="home"/>
        <ButtonLink location="intro" color="blue"/>
      </SC.FooterStyled>
    );
}
 
export default HomeFooter;