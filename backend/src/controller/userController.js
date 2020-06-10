const knex = require('../database/index');
const { validationResult } = require('express-validator');

module.exports = {
    //Criação do usuário com validação --OK
    async create(request, response, next) {
        try {
            const erros = validationResult(request);
            const dados = {
                name,
                email,
                senha
            } = request.body
            const results = {
                dados,
                erros: erros.array()
            }
            if (!erros.isEmpty()) {
                return response.json(results)
            } else {
                await knex('users').insert({
                    name,
                    email,
                    senha
                })
                return response.json(results)    
            }
            
        } catch (error) {
            next(error)
        }
    },

    //Alteração do usuário com validação --OK
    async update(request, response,  next){
        try{
            const erros = validationResult(request);
            const { email, name } = request.body
            const { id } = request.params

            const results = {
                id,
                name,
                email,
                erros: erros.array()
            }
            if (!erros.isEmpty()) {
                return response.status(422).json(results)
            } else {
                if(results.name === "") { 
                    await knex('users').update('email', email).where('id', id)
                } else if(results.email === "") {
                    await knex('users').update('name', name).where('id', id)
                } else {
                    await knex('users').update('email', email).where('id', id)
                    await knex('users').update('name', name).where('id', id)
                }
                return response.json(results)
            }
        }catch (error){
            next(error)
        }
    },

    // Delete de usuário com validação --OK
    async delete(request, response, next ){
        try{
            const { id } = request.params
            const delete_id = await knex('users').where({ id }).del()

            if(!delete_id) {
                return response.status(400).json({ message: "Usuário não encontrado" })
            } else{
                return response.json({ msg: 'Usuário deletado'})
            }
        }catch(error){
            next(error)
        }
    },

    //Buscar todos usuários --OK
    async index(request, response) {
        const results = await knex.select('*').from('users').orderBy('id')
        return response.json(results)
    },

    //Buscar usuário específico --Verificar
    async show(request, response, next) {
        try{
            const { name } = request.query
            const pesquisaUser = await knex('users').where('name', 'like', `%${name}%`)
            
            if(!pesquisaUser) {
                return response.json({ msg: "Usuário não encontrado" }) //verificar
            } else{
                return response.json(pesquisaUser)
            }

        }catch(error){
            next(error)
        }
    },

    // buscando unico user -- pelo ID
    async unique(request, response, next) {
        try{
            const { id } = request.params;
            const pesquisaUserUnico = await knex('users').where('id', id).first();
            
            if(!pesquisaUserUnico) {
                return response.json({ msg: "Usuário não encontrado" }) //verificar
            } else{
                return response.json(pesquisaUserUnico)
            }

        }catch(error){
            next(error)
        }
    }
}
