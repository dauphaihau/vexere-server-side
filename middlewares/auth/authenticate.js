const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('token');
    try {
        const decode = jwt.verify(token, 'abcdef');
        console.log('decode: ', decode);
        if (decode) {
            req.user = decode;
            return next();
        } else {
            res.status(401).send('You are not logged in')
        }
    } catch (err) {
        res.status(401).send('You are not logged in')
    }
}

module.exports = {
    authenticate
};

