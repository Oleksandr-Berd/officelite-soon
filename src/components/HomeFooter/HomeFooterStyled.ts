import styled from "@emotion/styled";
import { StyleProps } from "../../utils/types";

export const FooterStyled = styled.footer<StyleProps>`
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 23px;
  padding-right: 24px;

  text-align: center;

  background-color: #25293a;

  background-image: url(${(props) => props.bg});
  background-repeat: no-repeat;
  background-position: bottom;

  @media (min-width: 1440px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding-top: 82px;
    padding-bottom: 91px;
    padding-left: 165px;
    padding-right: 165px;
  }
`;


