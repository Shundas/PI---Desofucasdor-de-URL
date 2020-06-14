import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import {Link} from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi';

import './style.css'

export default function Editar() {
    const { id } = useParams();

    const [userUpdate, setUserUpdate] = useState({
        name: '',
        email: '',
    })

    useEffect(() => {
        api.get(`/${id}`).then(response => {
            setUserUpdate(response.data)
        })
    },[])

    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserUpdate({ ...userUpdate, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const { name, email } = userUpdate;
        const data = {
            name,
            email,
        };

        await api.put(`/${id}`, data);
        alert('Usuário Editado')
    }

    
    return (
        <div id="page-editar"> 
        <header>
            <Link to='/lista'>
                <FiArrowLeft />
                Voltar para Lista
            </Link>
        </header>
            <form onSubmit={handleSubmit}>
                <legend>
                    <h2>Editar usuário</h2>
                </legend>
                    <fieldset>  
                        <div className="field">
                            <label htmlFor="name">Nome</label>
                                <input 
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={userUpdate.name}
                                    onChange={handleInputChange}
                                />
                        </div>

                        <div className="field">
                            <label htmlFor="email">E-mail</label>
                                <input 
                                    type="text"
                                    name="email"
                                    id="email"
                                    value={userUpdate.email}
                                    onChange={handleInputChange}
                                />
                        </div>
                    </fieldset>
                <button type="submit">Editar</button>
            </form>
        </div>
    )
}