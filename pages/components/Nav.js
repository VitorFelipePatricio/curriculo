import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'


export default class Nav extends Component {
    show = () => {
        var menu = document.querySelector('.lista')
        menu.classList.toggle('show')
    }

    render() {
        return (
            <section id="nav">
                <div className="container">
                    <h1 className="titulo">Vitor Felipe</h1>
                    <FontAwesomeIcon icon={faCaretDown} size="2x" color="blue" onClick={this.show} id="icon" />
                    <div className="menu">
                        <nav className="nav">
                            <ul className="lista">
                                <li className="itemLista">
                                    <p><a onClick={this.show} className="link" href="#">EXPERIÊNCIAS</a></p>
                                </li>
                                <li className="itemLista">
                                    <p><a onClick={this.show} className="link" href="">FORMAÇÃO</a></p>
                                </li>
                                <li className="itemLista">
                                    <p><a onClick={this.show} className="link" href="">CLIENTES</a></p>
                                </li>
                                <li className="itemLista">
                                    <p><a onClick={this.show} className="link" href="">HABILIDADES</a></p>
                                </li>
                                <li className="itemLista">
                                    <p><a onClick={this.show} className="link" href="">ESPECIALIDADES</a></p>
                                </li>
                                <li className="itemLista">
                                    <p><a onClick={this.show} className="link" href="">CONTATO</a></p>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        )
    }
}


