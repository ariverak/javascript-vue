const express = require('express')
const app = express();
const data = require('./data')
const PORT = 3000; //definimos el puerto de la app
const jwt = require('./services/jwt')
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get('/users',function(req,res){

    const accessToken = req.headers.authorization;

    if(!jwt.verify(accessToken)) return res.status(403).send(false);

    const users = data.users.map(u=>u.username);

    return res.json(users)

})

app.post('/login',function(req,res){

    const username = req.body.username;
    const password = req.body.password;
    
    const user = data.users.find(u => {
        return u.username === username && u.password === password;
    });
    
    if(!user) return res.status(403).send({message : "El usuario o contraseña son invalidos"});
    
    const accessToken = jwt.generate(user.username);

    return res.send({ accessToken }).json()
})

app.listen(PORT, function () {
    console.log('Aplicacion corriendo en el puerto ' + PORT);
});