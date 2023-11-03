import * as SC from "./LogoStyled"

import {ReactComponent as LogoSvg} from "../../assets/images/logo.svg"

const Logo:React.FC = () => {
    return ( <SC.LogoStyled>
        <LogoSvg/>
        <p>officelite</p>
    </SC.LogoStyled> );
}
 
export default Logo;