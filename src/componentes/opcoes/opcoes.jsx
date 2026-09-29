
import "./styleOpcoes.css";

const textOpcoes = ["Categoria", "Minha Estante", "Favoritos"]


function Opcoes() {
    return(
            <ul className = "opcoes">
                {textOpcoes.map((texto) => (
                    <li key={texto} className="opcao">
                        <p>{texto}</p>
                    </li>
                ))}
            </ul>
    )
}

export default Opcoes;
