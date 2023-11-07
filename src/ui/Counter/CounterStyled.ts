import styled from "@emotion/styled";
import { CounterProps } from "../../utils/types";

export const CommonWrapper = styled.div`
  text-align: center;
`;

export const MainTitle = styled.h3<CounterProps>`
  margin-bottom: 18px;

  text-transform: uppercase;

  font-family: "KumbhBold";
  color: ${(props) => (props.location === "home" ? "#fff" : "#333950")};
  font-size: 16px;
  line-height: 3;
  letter-spacing: 5px;

  & > span {
    color: #5175ff;
  }
`;

export const List = styled.ul<CounterProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: ${props => props.location === "home" ? "40px" : "64px"};
`;

export const Item = styled.li<CounterProps>`
  width: 50px;

  padding-top: 11px;
  padding-bottom: 10px;
  padding-left: 12px;
  padding-right: 12px;

  background-color: ${(props) =>
    props.location === "home" ? "#333950" : "#D3D3D3"};

  border-radius: 4px;

  &:not(:last-child) {
    margin-right: 13px;
  }
`;

export const Number = styled.p<CounterProps>`
  color: ${(props) => (props.location === "home" ? "#fff" : "#5175FF")};

  font-family: "KumbhBold";
  font-size: 32px;
  line-height: 1.5;
`;

export const Title = styled.p<CounterProps>`
  color: ${(props) => (props.location === "home" ? "#979797" : "#333950")};
  font-family: "KumbhBold";
  font-size: 12px;
  line-height: 2.33;
`;
