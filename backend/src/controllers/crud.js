const User = require('../models/user');

module.exports = {
    async store(req, res) {
        const { name, email, senha } = req.body;
        
        const user = await User.create({ name, email, senha });

        return res.json(user);
    }
}
