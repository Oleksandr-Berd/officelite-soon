import styled from "@emotion/styled";

export const CommonContainer = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  text-align: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 39px;
    padding-right: 40px;
  }

  @media (min-width: 1440px) {
    padding-left: 165px;
    padding-right: 165px;
  }
`;

export const ContentWrapper = styled.div`
  margin-right: 36px;

  text-align: left;
`;

export const Title = styled.h1`
  margin-bottom: 24px;

  color: #333950;
  font-family: "KumbhBold";
  font-size: 40px;
  line-height: 1.2;

  @media (min-width: 1440px) {
    font-size: 56px;
    line-height: 1.14;
  }
`;

export const Content = styled.p`
  margin-bottom: 24px;

  color: #747b95;
  font-family: "KumbhRegular";
  font-size: 16px;
  line-height: 1.63;

  @media (min-width: 768px) {
    width: 345px;
  }

  @media (min-width: 1440px) {
    width: 535px;

    margin-bottom: 32px;

    font-size: 18px;
    line-height: 1.56;
  }
`;
