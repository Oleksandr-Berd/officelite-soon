import styled from "@emotion/styled";
import { StyleProps } from "../../utils/types";

export const List = styled.ul`
padding-top: 100px;
  padding-left: 23px;
  padding-right: 25px;

  text-align: center;

  background: linear-gradient(to bottom, #f2f2f2 50%, #25293a 50%);
`;

export const Item = styled.li<StyleProps>`
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 54px;
  padding-right: 54px;

  color: ${(props) => (props.color === "white" ? "#333950" : "#fff")};

  border-radius: 13px;

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  &:nth-child(1),
  &:nth-child(3) {
    background-color: #fff;
  }

  &:nth-child(2) {
    background-color: #5175ff;

    background-image: url(${props => props.bg});
    background-repeat: no-repeat;
  }
`;

export const Package = styled.h3`
  margin-bottom: 40px;

  font-family: "KumbhBold";
  font-size: 20px;
  line-height: 1.4;
`;

export const Price = styled.h2`
  margin-bottom: 8px;

  font-family: "KumbhBold";
  font-size: 56px;
  line-height: 1.14;
`;

export const UserProposal = styled.p`
  margin-bottom: 56px;

  font-family: "KumbhRegular";
  font-size: 16px;
  line-height: 1.75;
`;

export const SubList = styled.ul<StyleProps>`
  margin-bottom: 32px;

  & > li {
    color: ${(props) => (props.color === "white" ? "#333950" : "#fff")};
  }
`;

export const SubItem = styled.li`
  font-family: "KumbhRegular";
  font-size: 16px;
  line-height: 1.75;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;
