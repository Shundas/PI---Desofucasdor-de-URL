import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./styles.css";
import { getToken } from '../../utils/auth'

export default function Lista() {
  const [users, setUsers] = useState([
    {
      id: "",
      name: "",
      email: "",
    },
  ]);
  const token = getToken();

  const options = {
    headers: {
      "authorization": `Bearer ${token}`
    }
  }
  useEffect(() => {
    api.get("/", options).then((response) => {
      setUsers(response.data);
    });
  }, []);

  async function handleDeleteUser(id) {
    if (window.confirm("Você deseja realmente excluir este usuário?")) {
      await api.delete(`/${id}`, options);
      alert("Usuário Deletado");
      window.location.reload();
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <h1>Lista de usuários</h1>
        <table className="table">
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Edição/Remoção</th>
            </tr>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="tolink" to={`/editar/${user.id}`}>
                    <button>Editar</button>
                  </Link>
                  <button
                    className="btn-excluir"
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
