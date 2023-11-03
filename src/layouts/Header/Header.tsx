import * as SC from "./HeaderStyled"

import Logo from "../../ui/Logo/Logo";

const Header:React.FC = () => {
    return ( <SC.HeaderStyled>
        <Logo/>
    </SC.HeaderStyled> );
}
 
export default Header;