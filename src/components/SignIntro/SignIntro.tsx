import * as SC from './SignIntroStyled'

const SignIntro:React.FC = () => {
    return (
      <SC.CommonWrapper>
        <SC.Title>Work smarter. Save time.</SC.Title>
        <SC.Content>
          Easily manage your projects. Get on the list and receive in-app perks
          available only to early subscribers. We are moving into final
          development and getting ready for official launch soon.
        </SC.Content>
      </SC.CommonWrapper>
    );
}
 
export default SignIntro;