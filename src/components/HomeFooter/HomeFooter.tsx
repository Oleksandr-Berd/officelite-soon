import * as SC from "./HomeFooterStyled"

import ButtonLink from "../../ui/ButtonLink/ButtonLink";
import Counter from "../../ui/Counter/Counter";

import bg_mob from "../../assets/images/footer_bg_mob.svg";
import bg_tab from "../../assets/images/footer_bg_tab.svg"
import { useMediaQuery } from "usehooks-ts";


const HomeFooter = () => {

  const isTablet = useMediaQuery("(min-width:768px)")

    return (
      <SC.FooterStyled bg={isTablet ? bg_tab : bg_mob}>
        <Counter location="home" />
        <ButtonLink location="intro" color="blue" />
      </SC.FooterStyled>
    );
}
 
export default HomeFooter;