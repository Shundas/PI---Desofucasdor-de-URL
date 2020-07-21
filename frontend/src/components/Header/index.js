import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';
import './style.css';
import { logout } from '../../utils/auth';

export default function Header() {
  return (
    <>
      <header id="wrapper">
        <nav>
          <ul className="menu">
            <li>
              <Link className="to-link" to="/">
                Home{' '}
              </Link>
            </li>
            <li>
              <Link className="to-link" to="/desofuscador">
                Desofuscador{' '}
              </Link>
            </li>
            <li>
              <Link className="to-link" to="/cadastro">
                Cadastro de Usuário{' '}
              </Link>
            </li>
            <li>
              <Link className="to-link" to="/lista">
                Lista de Usuário{' '}
              </Link>
            </li>
          </ul>
          <button className="btn-power" onClick={logout}>
            <FiPower color={'#e12'} size={20} />
          </button>
        </nav>
      </header>
    </>
  );
}
