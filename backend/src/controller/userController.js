import knex from '../database/index'

class userController {
    async create(request, response) {
        try {
            const {
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

            return console.log(response.json())
            
        } catch (error) {
            
        }




    }
}