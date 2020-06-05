const knex = require('../database/index')

module.exports = {
    async create(request, response) {
        try {
            const dados = {
                name,
                email,
                senha
            } = request.body
    
            await knex('users').insert({
                name,
                email,
                senha
            })

            return response.json(dados)
            
        } catch (error) {
            
        }
    },

    async update(request, response,  next){
        try{
            const { email, name } = request.body
            const { id } = request.params

            await knex('users').update({ email, name }).where({ id })

            return response.send()

        }catch (error){

        }
    },

    async delete(request, response, next){
        try{

            const { id } = request.params

            await knex('users').where({ id }).del()

            return response.send()

        }catch(error){

        }
    },

    async index(request, response) {
        const results = await knex.select('*').from('users')
        return response.json(results)
    },

    async show(request, response, next) {
        try{

            const { name } = request.body

            const result = await knex('users').where('name', 'like', `%${name}%`)

            return response.json(result)

        }catch(error){

        }
    }
}
