import logo from "../../img/logo.svg";
import "./style.css";

function Logo(){
    return(
        <div className='logo'>
            <img src= {logo} alt="logo do Samuel Books" />
            <p><strong>Samuel Books</strong></p>
        </div>
    );
}

export default Logo;