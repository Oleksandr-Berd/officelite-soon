import { useMediaQuery } from "usehooks-ts";

import * as SC from "./SignPageStyled"

import ContactForm from "../../components/ContactForm/ContactForm";
import SignIntro from "../../components/SignIntro/SignIntro";
import Counter from "../../ui/Counter/Counter";

const SignPage: React.FC = () => {
  const isDesktop = useMediaQuery("(min-width:1440px)");

  return (
    <>
      {isDesktop ? (
        <SC.CommonWrapper>
          <div>
            <SignIntro />
            <Counter location="sign" />
          </div>
          <ContactForm />
        </SC.CommonWrapper>
      ) : (
        <div>
          <SignIntro />
          <Counter location="sign" />

          <ContactForm />
        </div>
      )}
    </>
  );
};

export default SignPage;
