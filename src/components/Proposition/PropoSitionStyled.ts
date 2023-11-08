import styled from "@emotion/styled";
import { StyleProps } from "../../utils/types";

export const List = styled.ul`
  padding-top: 100px;
  padding-left: 23px;
  padding-right: 25px;

  text-align: center;

  background: linear-gradient(to bottom, #f2f2f2 50%, #25293a 50%);

  @media (min-width: 768px) {
    padding-top: 140px;
    padding-left: 39px;
    padding-right: 40px;
  }

  @media (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
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

    @media (min-width: 1440px) {
      margin-bottom: 0;
    }
  }

  &:nth-child(1),
  &:nth-child(3) {
    background-color: #fff;
  }

  &:nth-child(2) {
    background-color: #5175ff;

    background-image: url(${(props) => props.bg});
    background-repeat: no-repeat;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-top: 48px;
    padding-bottom: 48px;
    padding-left: 48px;
    padding-right: 48px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 1440px) {
    padding-left: 65px;
    padding-right: 64px;

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;

export const ContentWrapper = styled.div`
  text-align: left;

  @media (min-width: 1440px) {
    text-align: center;
  }
`;

export const Package = styled.h3`
  margin-bottom: 40px;

  font-family: "KumbhBold";
  font-size: 20px;
  line-height: 1.4;

  @media (min-width: 768px) {
    margin-bottom: 16px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;

export const Price = styled.h2`
  margin-bottom: 8px;

  font-family: "KumbhBold";
  font-size: 56px;
  line-height: 1.14;

  @media (min-width: 768px) {
    margin-bottom: 4px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 8px;
  }
`;

export const UserProposal = styled.p`
  margin-bottom: 56px;

  font-family: "KumbhRegular";
  font-size: 16px;
  line-height: 1.75;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    margin-bottom: 56px;
  }
`;

export const SubList = styled.ul<StyleProps>`
  margin-bottom: 32px;

  & > li {
    color: ${(props) => (props.color === "white" ? "#333950" : "#fff")};
  }

  @media (min-width: 768px) {
    margin-bottom: 0;

    text-align: left;
  }

  @media (min-width: 1440px) {
    margin-bottom: 32px;

    text-align: center;
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
