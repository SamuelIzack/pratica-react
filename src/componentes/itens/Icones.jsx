import { IconesUl, Icone } from "./IconesStyle.jsx"
import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";

const icones = [
    { id: 'perfil', src: perfil, alt: 'Perfil' },
    { id: 'sacola', src: sacola, alt: 'Sacola de compras' },
]

function Icones() {
    return(
        <IconesUl>
            {icones.map((icone) => (
                <Icone key={icone.id}><img src={icone.src} alt={icone.alt}/></Icone>
            ))}
        </IconesUl>
    )
}

export default Icones;
