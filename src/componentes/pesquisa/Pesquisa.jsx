import { ContainerBusca, Titulo, SubTitulo, CampoDePesquisa } from "./PesquisaStyle.jsx"
import { useState } from "react"


export function Pesquisa(){
    const [textoDigitado, setTextoDigitado] = useState('')
    
    return ( 
        <ContainerBusca>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre o seu livro em nossa estante</SubTitulo>
            <CampoDePesquisa type="text" placeholder="Escreva aqui o nome do livro" 
                onBlur={ evento => setTextoDigitado(evento.onChange.value)}
            />
        </ContainerBusca>
    )
}