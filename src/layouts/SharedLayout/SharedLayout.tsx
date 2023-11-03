import { Outlet } from "react-router-dom";
import { Props } from "../../utils/types";
import Header from "../Header/Header";

const SharedLayout:React.FC<Props> = ({children}) => {
    return ( <main>
        <Header/>
        {children}
        <Outlet/>
    </main> );
}
 
export default SharedLayout;