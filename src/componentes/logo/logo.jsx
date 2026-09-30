import logo from "../../img/logo.svg";
import { LogoContainer, LogoImg } from "./LogoStyle.jsx";

function Logo(){
    return(
        <LogoContainer>
            <LogoImg src={logo} alt="Logo Samuel Books"/>
            <p><strong>Samuel Books</strong></p>
        </LogoContainer>
    );
}

export default Logo;
