import SignIntro from "../../components/SignIntro/SignIntro";
import Counter from "../../ui/Counter/Counter";

const SignPage:React.FC = () => {
    return ( <div>
        <SignIntro/>
        <Counter location="sign"/>
    </div> );
}
 
export default SignPage;