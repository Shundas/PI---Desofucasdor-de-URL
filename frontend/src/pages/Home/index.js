import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Header from '../../components/Header'


export default function Home() {
  return (
    <>
    <Header />
    <div className="login-form">
     <h2>Bem vindo ao Desofuscador</h2> 
      <h6>LOGIN</h6>
      <form action="">
        <div className="textbox">
          <input type="text" placeholder="E-mail"/>
          <span class="check-message">Obrigatório</span>
        </div>
        <div className="textbox">
          <input type="password" placeholder="Senha"/>
          <span class="check-message">Obrigatório</span>
        </div>
        <input type="submit" value="Entrar" class="login-btn active" disabled></input>
        <div className="dont-have-account">
          Não possui uma conta?
          <Link to="/cadastro">
            <a> Cadastrar</a>
          </Link>
        </div>
      </form>
    </div>
    </>
  );
}
