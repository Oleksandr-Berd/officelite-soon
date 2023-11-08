import * as SC from "./IntroStyled";

import { ReactComponent as IntroBoard } from "../../assets/images/intro_board.svg";
import { ReactComponent as IntroBoardTab } from "../../assets/images/boardTab.svg";
import {ReactComponent as IntroBoardDesk} from "../../assets/images/boardDesk.svg"
import ButtonLink from "../../ui/ButtonLink/ButtonLink";
import { useMediaQuery } from "usehooks-ts";

const Intro: React.FC = () => {
  const isTablet = useMediaQuery("(min-width:768px)");
  const isDesktop = useMediaQuery("(min-width:1440px)")

  return (
    <>
      {isTablet ? (
        <SC.CommonContainer>
          <SC.ContentWrapper>
            <SC.Title>
              A simple solution to complex tasks is coming soon
            </SC.Title>
            <SC.Content>
              Say goodbye to inefficient juggling of multiple apps, teams, and
              projects. Officelite is the new collaboration platform built with
              an intuitive interface to improve productivity.
            </SC.Content>
            <ButtonLink location="intro" color="blue" />
          </SC.ContentWrapper>
          <div>{isDesktop ? <IntroBoardDesk/> : <IntroBoardTab />}</div>
        </SC.CommonContainer>
      ) : (
        <SC.CommonContainer>
          <div>
            <IntroBoard />
          </div>
          <SC.Title>A simple solution to complex tasks is coming soon</SC.Title>
          <SC.Content>
            Say goodbye to inefficient juggling of multiple apps, teams, and
            projects. Officelite is the new collaboration platform built with an
            intuitive interface to improve productivity.
          </SC.Content>
          <ButtonLink location="intro" color="blue" />
        </SC.CommonContainer>
      )}
    </>
  );
};

export default Intro;
