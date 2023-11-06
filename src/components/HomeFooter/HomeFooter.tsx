import * as SC from "./HomeFooterStyled"

import ButtonLink from "../../ui/ButtonLink/ButtonLink";
import Counter from "../../ui/Counter/Counter";

const HomeFooter = () => {
    return (
      <SC.FooterStyled>
        <SC.Title>
          coming <span>4 nov 2024</span>
        </SC.Title>
        <Counter/>
        <ButtonLink location="intro" color="blue"/>
      </SC.FooterStyled>
    );
}
 
export default HomeFooter;