import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Lista() {
  const [users, setUsers] = useState([
    {
      id: "",
      name: "",
      email: "",
    },
  ]);

  useEffect(() => {
    api.get("/").then((response) => {
      setUsers(response.data);
    });
  }, []);

  async function handleDeleteUser(id) {
    //    alert('Você deseja realmente excluir esse usuário?'
    await api.delete(`/${id}`);
    alert("Usuário Deletado");
    window.location.reload();
  }

  return (
    <>
      <header className="header">Lista de usuários</header>
      <div className="container">
        <table class="table">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Edição/Remoção</th>
            </tr>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td><Link className="tolink" to={`/editar/${user.id}`}>
                  <button>Editar</button>
                </Link>
                <button
                  className="btn"
                  id={user.id}
                  onClick={() => handleDeleteUser(user.id)}
                >
                  Excluir
                </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
