import React from 'react'

function show() {
    var menu = document.querySelector('.lista') 
    menu.classList.toggle('show');
}

export default () =>
    <div className="container">
        <h1 className="titulo">Vitor Felipe</h1>
        <div className="menu">
            <nav className="nav">
                <ul className="lista">
                    <li className="itemLista">
                        <p><a onClick={show} className="link" href="#">EXPERIÊNCIAS</a></p>
                    </li>
                    <li className="itemLista">
                        <p><a onClick={show} className="link" href="">FORMAÇÃO</a></p>
                    </li>
                    <li className="itemLista">
                        <p><a onClick={show} className="link" href="">CLIENTES</a></p>
                    </li>
                    <li className="itemLista">
                        <p><a onClick={show} className="link" href="">HABILIDADES</a></p>
                    </li>
                    <li className="itemLista">
                        <p><a onClick={show} className="link" href="">ESPECIALIDADES</a></p>
                    </li>
                    <li className="itemLista">
                        <p><a onClick={show} className="link" href="">CONTATO</a></p>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
