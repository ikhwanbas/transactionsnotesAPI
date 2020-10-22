const hyperid = require('hyperid')

function authorization(req, res, next) {
    const authorization = req.headers.authorization
    if (authorization) {
        const token = authorization.split(' ')[1]
        const isValidToken = hyperid.decode(token)
        if (isValidToken) {
            next()
        } else {
            res.status(401).send('unauthorized bro')
        }
    } else {
        res.status(401).send('unauthorized')
    }
}

module.exports = authorization