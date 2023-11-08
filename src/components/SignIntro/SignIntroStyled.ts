import styled from "@emotion/styled";

export const CommonWrapper = styled.div`
  padding-bottom: 64px;
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  @media (min-width: 768px) {
    padding-bottom: 45px;
    padding-left: 97px;
    padding-right: 98px;
  }

  @media (min-width: 1440px) {
    width: 540px;

    padding-bottom: 0;
    padding-left: 0;
    padding-right: 0;

    text-align: left;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  color: #333950;
  font-family: "KumbhBold";
  font-size: 40px;
  line-height: 1.2;

  @media (min-width: 768px) {
    margin-bottom: 24px;
  }

  @media (min-width: 1440px) {
    font-size: 56px;
    line-height: 1.14;
  }
`;

export const Content = styled.p`
  color: #747b95;
  font-family: "KumbhRegular";
  font-size: 16px;
  line-height: 1.63;

  @media (min-width: 1440px) {
    margin-bottom: 40px;

    font-size: 18px;
    line-height: 1.56;
  }
`;
