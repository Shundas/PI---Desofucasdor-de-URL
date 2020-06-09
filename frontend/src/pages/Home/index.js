import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Home() {
  return (
    <div id="page-home">
        <Link to="/cadastro">
          <button>Cadastro</button>
        </Link>
        <br />
        <Link to="/lista">
          <button>Lista</button>
        </Link>
    </div>
  );
}
