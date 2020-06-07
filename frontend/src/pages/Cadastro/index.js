import React, { useState } from 'react';
import api from '../../services/api'

function Cadastro() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        senha: '',
    })

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const { name, email, senha } = formData;
        const data = {
            name,
            email,
            senha
        };

        await api.post('/', data);

        alert('Usuário cadastrado')
    }

    return (
       <> 
            <header>Header do Cadastro</header>
            <form>
                <h1>Cadastro de Usuário</h1>

                <fieldset>
                    <legend>
                        <h2>Dados</h2>
                    </legend>

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
                </fieldset>

                <button type="submit" onClick={handleSubmit}>Cadastrar</button>
            </form>
        </>

    )
}

export default Cadastro;