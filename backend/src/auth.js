const jwt = require('jsonwebtoken');

const auth = function(request, response, next) {
    const secret = 'VKPB6QPziQ'
    let token = request.headers['authorization'];

    if(!token) {
        return response.status(401).json({
            error: [{
                value: '',
                msg: 'Acesso negado'
            }]
        });
    }
    token = token.split(' ').pop();
    jwt.verify(token, secret, (err, decoded) => {
        if(err) {
            return response.status(401).json({
                error: [{
                    value: '',
                    msg: 'Acesso negado'
                }]
            }); 
        }
        next();
    });
};

module.exports = auth
