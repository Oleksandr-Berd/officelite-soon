import * as SC from "./IntroStyled";

import {ReactComponent as IntroBoard} from "../../assets/images/intro_board.svg"

const Intro: React.FC = () => {
  return (
    <SC.CommonContainer>
      <SC.ImageGeneralCon>
        <IntroBoard />
      </SC.ImageGeneralCon>
      <SC.Title>A simple solution to complex tasks is coming soon</SC.Title>
      <p>
        Say goodbye to inefficient juggling of multiple apps, teams, and
        projects. Officelite is the new collaboration platform built with an
        intuitive interface to improve productivity.
      </p>
      <div>
        <a href="/sing">Get Started</a>
      </div>
    </SC.CommonContainer>
  );
};

export default Intro;
