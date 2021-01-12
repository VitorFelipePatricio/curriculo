import React, { Component } from 'react'
import { Link , ItemLista, Titulo, Lista , NavBar } from './styles'


export default class Nav extends Component {
    render() {
        return (
            <div>
                <NavBar>
                <Titulo>Vitor Felipe</Titulo>
                    <Lista>
                        <ItemLista>
                            <p><Link href="#">EXPERIÊNCIAS</Link></p>
                        </ItemLista>
                        <ItemLista>
                            <p><Link href="#">FORMAÇÃO</Link></p>
                        </ItemLista>
                        <ItemLista>
                            <p><Link href="#">CLIENTES</Link></p>
                        </ItemLista>
                        <ItemLista>
                            <p><Link href="#">HABILIDADES</Link></p>
                        </ItemLista>
                        <ItemLista>
                            <p><Link href="#">ESPECIALIDADES</Link></p>
                        </ItemLista>
                        <ItemLista>
                            <p><Link href="#">CONTATO</Link></p>
                        </ItemLista>
                    </Lista>
                </NavBar>
            </div>
        )
    }
}

