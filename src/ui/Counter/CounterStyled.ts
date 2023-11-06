import styled from "@emotion/styled";

export const List = styled.ul`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

margin-bottom: 40px;
`

export const Item = styled.li`
padding-top: 11px;
padding-bottom: 10px;
padding-left: 17px;
padding-right: 16px;

  background-color: #333950;

  &:not(:last-child) {
    margin-right: 13px;
  }
`;

export const Number = styled.p`
color: #fff;
font-family: "KumbhBold";
font-size: 32px;
line-height: 1.5;
`

export const Title = styled.p`
  color: #979797;
  font-family: "KumbhBold";
  font-size: 12px;
  line-height: 2.33;
`;