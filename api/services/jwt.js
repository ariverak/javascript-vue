const jwt = require('jwt-simple');
const SECRET = 'Secret0';

exports.generate = function(username){
    const payload = {
        sub : username
    }
    return jwt.encode(payload,SECRET)
}

exports.verify = function(accessToken){
    try {
        jwt.decode(accessToken,SECRET);
        return true;
    } catch(err){
        return false;
    }
}