import * as SC from "./IntroStyled";

import {ReactComponent as IntroBoard} from "../../assets/images/intro_board.svg"
import ButtonLink from "../../ui/ButtonLink/ButtonLink";

const Intro: React.FC = () => {
  return (
    <SC.CommonContainer>
      <SC.ImageGeneralCon>
        <IntroBoard />
      </SC.ImageGeneralCon>
      <SC.Title>A simple solution to complex tasks is coming soon</SC.Title>
      <SC.Content>
        Say goodbye to inefficient juggling of multiple apps, teams, and
        projects. Officelite is the new collaboration platform built with an
        intuitive interface to improve productivity.
      </SC.Content>
      <ButtonLink/>
    </SC.CommonContainer>
  );
};

export default Intro;
