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

            await trx('users').insert({
                name,
                email,
                senha
            })

            return response.json(dados)
            
        } catch (error) {
            
        }
    },

    async index(request, response) {
        const results = await knex.select('*')
        return response.json(results)
    }
}
