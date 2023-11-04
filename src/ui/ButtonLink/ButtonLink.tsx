import * as SC from "./ButtonLinkStyled"

import { LinkButtonProps } from "../../utils/types";


const ButtonLink:React.FC<LinkButtonProps> = ({location, color}) => {
    return (
      <SC.Wrapper location={location} color={color}>
        <a href="/sing">Get Started</a>
      </SC.Wrapper>
    );
}
 
export default ButtonLink;