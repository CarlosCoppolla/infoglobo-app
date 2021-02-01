import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Avatar } from "antd";

const menuLinks = [
    {
        title: 'Últimas notícias',
        path: '/'
    },
    {
        title: 'Editor de Posts',
        path: '/posts'
    },
    {
        title: 'Entrar em contato',
        path: '/contato'
    },
    {
        title: 'Entrar',
        path: '/login'
    }
]

export default function Menu({ usuario }) {
    const [menuAtivo, setMenuAtivo] = useState(false)

    return (
        <nav className={`site-menu ${menuAtivo && 'ativo'}`} role="navigation">
            <span className="menu-title">InfoGlobo</span>
            <div className="menu-content-container">
                <ul>
                    {menuLinks.map((link, index) => (
                        <li key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    ))}
                </ul>
                {/* <span className="menu-avatar-container">
                    <Avatar  size={50} src="" />
                    <span className="menu-avatar-name">{`${usuario.primeiroNome} ${usuario.ultimoNome}`}</span>
                </span> */}
            </div>
            <i className="ionicons icon ion-ios-menu" onClick={() => setMenuAtivo(!menuAtivo)} />
        </nav>)
} 