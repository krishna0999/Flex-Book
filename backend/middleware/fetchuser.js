const jwt = require('jsonwebtoken');

const JWT_SIGN = 'mynameiskrishna00';


const fetchuser = (req,res,next) => {
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({error : "Please authenticate with correct token"});
    }
    try {
        const data = jwt.verify(token, JWT_SIGN);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({error : "Please authenticate with correct token"});
    }

}

module.exports = fetchuser;