import HomeFooter from "../../components/HomeFooter/HomeFooter";
import Intro from "../../components/Intro/Intro";
import Proposition from "../../components/Proposition/Proposition";

const HomePage:React.FC = () => {
    return ( <div>
        <Intro/>
        <Proposition/>
        <HomeFooter/>
    </div> );
}
 
export default HomePage;