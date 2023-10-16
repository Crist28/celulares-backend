const jwt = require('jsonwebtoken');
const { addDays } = require('date-fns');

const secret = process.env.JWT_SECRET;

exports.createToken = (user) => {
    const payload = {
        sub: user._id,
        nombres: user._nombres,
        apellidos: user._apellidos,
        email: user._email,
        role: user.rol,
        iat: Date.now() / 1000,
        exp: addDays(Date.now(), 7) / 1000
    };

    return jwt.sign(payload, secret);
};