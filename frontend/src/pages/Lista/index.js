import React, { useEffect, useState } from 'react';
import api from '../../services/api'

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
        <div>
           <ul>
            {users.map(user => (
                <li  key={user.id}>
                    <span>{user.email}</span>
                    <br />
                    <span>{user.name}</span>
                </li>
                ))}
            </ul>
        </div>
    )
}