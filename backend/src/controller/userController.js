import knex from '../database/index'

class userController {
    async create(request, response) {
        const {
            name,
            email,
            senha
        } = request.body

        const trx = await knex.transaction()

        


    }
}