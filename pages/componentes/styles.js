import styled from 'styled-components'

export const NavBar = styled.nav`
    width: 100%;
    height: 80px;
    background-color: #fff;
    border-radius: 0 0 5px 5px;
    box-shadow: 10px 10px 35px 0 rgba(0,0,0,0.05);
`

export const Link = styled.a`
    text-decoration: none;
    cursor: pointer;
    color: blue;
`

export const Lista = styled.ul`
    line-height: 50px;
    text-align: center;
`

export const Titulo = styled.h1`
    position: relative;
    float: left;
    margin-left: 30px;
    line-height: 15px;
    font-size: 34px;
    color: blue
`

export const ItemLista = styled.li`
    list-style: none;
    display: inline-block;
    margin-right: 2%;
`