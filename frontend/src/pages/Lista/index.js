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

    return (
        <>
        <header>Header</header>
        <div>
           <table>
            {users.map(user => (
                <tr  key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <Link to={`/editar/${user.id}`}>
                        <button>Editar</button>
                    </Link>
                    <button>Excluir</button>
                </tr>
                ))}
            </table>
        </div>
        </>
    )
}
