import { useLocation } from "react-router-dom";

import * as SC from "./HeaderStyled";

import Logo from "../../ui/Logo/Logo";

const Header: React.FC = () => {
  const location = useLocation();

const path = location.pathname

  return (
    <SC.HeaderStyled location={path === "/" ? "home" : "sign"}>
      <Logo />
      {path === "/sign" ? <SC.StyleFigure></SC.StyleFigure> : null}
    </SC.HeaderStyled>
  );
};

export default Header;
