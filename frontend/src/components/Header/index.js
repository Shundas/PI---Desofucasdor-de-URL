import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
//import { logout } from '../../utils/auth'

export default function Header() {
  return (
    <>
      <header id="wrapper">
        <nav>
          <ul className="menu">
            <li>
              <Link className="to-link" to="/">
                Home{" "}
              </Link>
            </li>
            <li>
              <Link className="to-link" to="/desofuscador">
                Desofuscador{" "}
              </Link>
            </li>
            <li>
              <Link className="to-link" to="/cadastro">
                Cadastro de Usuário{" "}
              </Link>
            </li>
            <li>
              <Link className="to-link" to="/lista">
                Lista de Usuário{" "}
              </Link>
            </li>
          </ul>
        <button onClick="">Logout</button>
        </nav>
      </header>
    </>
  );
}
