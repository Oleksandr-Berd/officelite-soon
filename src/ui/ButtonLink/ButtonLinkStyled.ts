import styled from "@emotion/styled";
import { LinkButtonProps } from "../../utils/types";

export const Wrapper = styled.div<LinkButtonProps>`
  display: inline-block;

  padding-left: 41px;
  padding-right: 41px;
  padding-top: 14px;
  padding-bottom: 14px;

  background-color: ${(props) =>
    props.color === "blue"
      ? "#5175ff"
      : props.color === "grey"
      ? "#D3D3D3"
      : "#fff"};

  border: none;
  border-radius: 28px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  cursor: pointer;

  & > a {
    color: ${(props) => (props.location === "intro" ? "#fff" : "#5175FF")};
    font-family: "KumbhBold";
    font-size: 16px;
    line-height: 1.75;
  }

  @media (min-width: 1440px) {
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: ${(props) =>
        props.color === "blue"
          ? "#829CFF"
          : props.color === "grey"
          ? "#979797"
          : "#fff"};

      transition: background-color 0.3s ease-in-out;
    }
  }
`;