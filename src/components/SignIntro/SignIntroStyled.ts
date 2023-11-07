import styled from "@emotion/styled";

export const CommonWrapper = styled.div`
  padding-bottom: 64px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  @media (min-width: 768px){
    padding-bottom: 45px;
    padding-left: 97px;
    padding-right: 98px;

  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  color: #333950;
  font-family: "KumbhBold";
  font-size: 40px;
  line-height: 1.2;

  @media (min-width: 768px){
    margin-bottom: 24px;
  }
`;

export const Content = styled.p`
  color: #747b95;
  font-family: "KumbhRegular";
  font-size: 16px;
  line-height: 1.63;
`;
