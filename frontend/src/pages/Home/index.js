import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="center">
        <Link className="back" to="/cadastro">
          Cadastro
        </Link>{" "}
        <br />
        <Link className="back" to="/lista">
          Lista de Usuários
        </Link>
      </div>
    </>
  );
}
