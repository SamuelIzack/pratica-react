import Logo from '../logo/Logo.jsx';
import Opcoes from '../opcoes/Opcoes.jsx';
import Icones from '../itens/Icones.jsx';
import { HeaderContainer } from './HeaderStyle.jsx'

function Header(){
    return(
        <HeaderContainer>
          <Logo/>
          <Opcoes/>
          <Icones/>
        </HeaderContainer>
    )
}

export default Header;
