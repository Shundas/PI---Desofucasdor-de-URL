import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';


export default function Header() {
    return (
        <div id="page-header">
            <header>
                <nav>
                    <ul className="menu">
                        <li><Link to='/'>Home </Link></li>    
                        <li><Link to='/desofuscador'>Desofuscador </Link></li>    
                        <li><Link to='/cadastro'>Cadastro de Usuário </Link></li>    
                        <li><Link to='/lista'>Lista de Usuário </Link></li>    
                    </ul>
                </nav>
            </header>
        </div>
    )
}
