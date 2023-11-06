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
`;

export const Title = styled.h3`
  margin-bottom: 18px;

  text-transform: uppercase;

  font-family: "KumbhBold";
  color: #fff;
  font-size: 16px;
  line-height: 3;
  letter-spacing: 5px;

  & > span {
    color: #5175ff;
  }
`;
