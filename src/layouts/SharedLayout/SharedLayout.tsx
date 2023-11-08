import { Outlet } from "react-router-dom";

import * as SC from "./SharedLayoutStyled"

import { Props } from "../../utils/types";
import Header from "../Header/Header";

import bgMob from "../../assets/images/bg_header_mob.svg"
import bgIntroTab from "../../assets/images/bg_intro_tab.svg"
import bgIntroDesk from "../../assets/images/bg_intro_desk.svg"
import { useMediaQuery } from "usehooks-ts";

const SharedLayout:React.FC<Props> = ({children}) => {

  const isTablet = useMediaQuery("(min-width:768px)")
  const isDesktop = useMediaQuery("(min-width:1440px)")

    return (
      <SC.SharedLayoutStyled
        bg={isDesktop ? bgIntroDesk : isTablet ? bgIntroTab : bgMob}
      >
        <Header />
        {children}
        <Outlet />
      </SC.SharedLayoutStyled>
    );
}
 
export default SharedLayout;