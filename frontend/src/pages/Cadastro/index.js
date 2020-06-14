import React, { useState } from "react";
import api from "../../services/api";
import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';
import Alert from 'react-bootstrap/Alert';

import './style.css'

function Cadastro() {
  
  const [erros, setErros] = useState([
    {
      msg:"",
    }
  ])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    senha: "",
    confSenha: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const { name, email, senha, confSenha } = formData;

    const data = {
      name,
      email,
      senha,
      confSenha
    };

    await api.post("/", data)
      .then((response) => {
        setErros(response.data.erros)
      })
   }

  return (
    <div id="page-cadastro">
      <header>
        <Link to='/'>
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>
      {erros.map((erro, id) => (
        <Alert key={id} variant="danger">{erro.msg}</Alert>
      ))}
      <form onSubmit={handleSubmit}>
        <h2>Cadastro de Usuário</h2>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              id="email"
              onChange={handleInputChange}
            />
          </div>

          <div className="field">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              name="senha"
              id="senha"
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="confSenha">Confirma Senha</label>
            <input
              type="password"
              name="confSenha"
              id="confSenha"
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;
