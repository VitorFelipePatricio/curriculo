import { useState } from 'react'

function HelloWorld() {
    return (
        <div>
            <h1>Hello World</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador,setContador] = useState(0)

    function adicionarContador() {
        setContador(contador + 1)
    }

    function removerContador() {
        setContador(contador - 1)
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button><br />
            <button onClick={removerContador}>Remover</button>
        </div>
    )
}

export default HelloWorld