const knex = require('../database/index')

module.exports = {
    async create(request, response) {
        try {
            const dados = {
                name,
                email,
                senha
            } = request.body
    
            const trx = await knex.transaction()

            await knex('users').insert({
                name,
                email,
                senha
            })

            return response.json(dados)
            
        } catch (error) {
            
        }
    },

    async index(request, response) {
        const results = await knex.select('*').from('users')
        return response.json(results)
    }
}
