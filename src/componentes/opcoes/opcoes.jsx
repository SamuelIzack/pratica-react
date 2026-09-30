import { OpcoesLista, OpcaoItem } from './OpcoesStyle.jsx'

const textOpcoes = ["Categoria", "Minha Estante", "Favoritos"]


function Opcoes() {
    return(
            <OpcoesLista>
                {textOpcoes.map((texto) => (
                    <OpcaoItem key={texto}>
                        <p>{texto}</p>
                    </OpcaoItem>
                ))}
            </OpcoesLista>
    )
}


export default Opcoes;
