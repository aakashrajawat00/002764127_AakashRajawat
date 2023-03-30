const jwt = require('jsonwebtoken')

const generateToken = (id) =>
{
    return jwt.sign({id},'react123', {
        expiresIn: "30d",
    });
};

module.exports = generateToken;