import styled from "@emotion/styled";
import { CounterProps } from "../../utils/types";

export const HeaderStyled = styled.header<CounterProps>`
  padding-top: 50px;
  padding-bottom: 89px;

  @media (min-width: 768px) {
    padding-top: 72px;
    padding-bottom: 104px;
    padding-left: 39px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    padding-top: ${(props) => (props.location === "home" ? "81px" : "0")};
    padding-bottom: ${(props) => (props.location === "home" ? "102px" : "0")};
    padding-left: 165px;
  }
`;

export const StyleFigure = styled.div`
  width: 305px;
  height: 237px;
  background-color: #25293a;

  border: none;
`;