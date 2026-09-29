import "./styleHeader.css"
import Logo from '../logo/logo';
import OpcoesHeader from '../opcoes/opcoes';
import IconesHeader from '../itens/item';

function Header(){
    return(
        <header className='app-header'>
          <Logo/>
          <OpcoesHeader/>
          <IconesHeader/>
        </header>
    )
}

export default Header;