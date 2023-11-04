import { Outlet } from "react-router-dom";

import * as SC from "./SharedLayoutStyled"

import { Props } from "../../utils/types";
import Header from "../Header/Header";

import bgMob from "../../assets/images/bg_header_mob.svg"

const SharedLayout:React.FC<Props> = ({children}) => {
    return (
      <SC.SharedLayoutStyled bg={bgMob}>
        <Header />
        {children}
        <Outlet />
      </SC.SharedLayoutStyled>
    );
}
 
export default SharedLayout;