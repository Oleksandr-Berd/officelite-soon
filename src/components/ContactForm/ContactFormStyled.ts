import styled from "@emotion/styled";
import { InputProps, StyleProps } from "../../utils/types";

export const CommonWrapper = styled.div<StyleProps>`
  position: relative;
  z-index: 5;

  padding-bottom: 87px;
  padding-left: 24px;
  padding-right: 24px;

  background: linear-gradient(to bottom, #f2f2f2 50%, #25293a 50%);

  @media (min-width: 768px) {
    padding-bottom: 126px;
    padding-left: 161px;
    padding-right: 162px;
  }

  &::after {
    position: absolute;
    bottom: 0;
    left: 0;

    content: url(${(props) => props.bg});

    @media (min-width: 1440px) {
        content: "";
      top: 0;
      right: 0;
    }
  }

  @media (min-width: 1440px) {
    padding-bottom: 279px;
    padding-left: 0;
    padding-right: 165px;

    background: linear-gradient(to right, #f2f2f2 50%, #25293a 50%);

    border: none;
  }
`;

export const FormStyled = styled.form`
  position: relative;
  z-index: 5;

  display: flex;
  flex-direction: column;

  padding-top: 24px;
  padding-bottom: 24px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #fff;

  border-radius: 13px;

  @media (min-width: 1440px) {
    width: 445px;

    padding-top: 40px;
    padding-bottom: 51px;
    padding-left: 43px;
    padding-right: 42px;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 24px;
  }

  & > svg {
    position: absolute;
    bottom: 0;
    right: 0;

    transform: translateY(-16px);
  }

  & > p {
    position: absolute;
    bottom: 0;
    right: 0;

    transform: translateY(20px);

    color: #f05b5b;
    font-family: "KumbhRegular";
    font-size: 12px;
  }
`;

export const InputStyled = styled.input<InputProps>`
  width: 100%;

  padding-bottom: 16px;
  padding-left: 16px;

  font-family: "KumbhRegular";
  color: ${(props) => (props.isError ? "#f05b5b" : "#747b95")};
  font-size: 16px;
  line-height: 1.75;

  border: none;

  border-bottom: ${(props) =>
    props.isError ? " 1px solid #f05b5b" : "1px solid #747b95"};

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${(props) => (props.isError ? "#f05b5b" : "#747b95")};
  }
`;

export const SelectWrapper = styled.div`
  position: relative;

  margin-bottom: 24px;

  & > svg {
    position: absolute;
    bottom: 0;
    right: 0;

    transform: translateX(-24px) translateY(-24px);
  }
`;

export const SelectStyled = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 100%;

  padding-bottom: 16px;
  padding-left: 12px;

  font-family: "KumbhBold";
  color: #333950;
  font-size: 16px;
  line-height: 1.75;

  border: none;
  border-bottom: 1px solid #747b95;

  &:focus {
    outline: none;
  }

  & span {
    font-family: "KumbhRegular";
    color: #747b95;
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;

  padding-top: 14px;
  padding-bottom: 14px;

  margin-top: 40px;

  background-color: #5175ff;
  color: #fff;
  font-family: "KumbhBold";
  font-size: 16px;
  line-height: 1.75;

  border: none;
  border-radius: 28px;

  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  @media (min-width: 1440px) {
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color:  #829CFF;
        

      transition: background-color 0.3s ease-in-out;
    }
  }
`;
