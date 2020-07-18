import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Header from '../../components/Header';
import api from '../../services/api';
import { login } from '../../utils/auth';

export default function Home() {
  const [loginData, setLoginData] = useState({
    email: "",
    senha: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { email, senha } = loginData;

    const data = {
      email,
      senha,
    };

    await api.post("/login", data).then((response) => { 
      login(response.data.token);
      window.location.href = '/lista'
      //setErros(response.data.erros);
    });     
  }


  return (
    <>
    <Header />
    <div className="login-form">
     <h2>Bem vindo ao Desofuscador</h2> 
      <h6>LOGIN</h6>
      <form onSubmit={handleSubmit}>
        <div className="textbox">
          <input 
            type="text"
            placeholder="E-mail"
            name="email"
            id="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="textbox">
          <input 
            type="password"
            placeholder="Senha"
            name="senha"
            id="senha"
            onChange={handleInputChange}
          />
        </div>
        <input type="submit" value="Entrar" class="login-btn active" ></input>
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
