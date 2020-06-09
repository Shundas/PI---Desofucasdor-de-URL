import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import { Link } from 'react-router-dom';


export default function Lista() {
    const [users, setUsers] = useState([{
        id: '',
        name: '',
        email: ''
    }])

    useEffect(() => {
        api.get('/').then(response => {
            setUsers(response.data)
        })
    },[])

    async function handleDeleteUser(id) {
    //    alert('Você deseja realmente excluir esse usuário?'
       await api.delete(`/${id}`);
       alert('Usuário Deletado')
       window.location.reload()
    }

    return (
        <>
            <header>Header</header>
            <div>
            <table>
                <tbody>
                    {users.map(user => (
                        <tr  key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <Link to={`/editar/${user.id}`}>
                                <button>Editar</button>
                            </Link>
                            <button 
                                id={user.id} 
                                onClick={() => handleDeleteUser(user.id)}
                            >
                            Excluir
                            </button>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
