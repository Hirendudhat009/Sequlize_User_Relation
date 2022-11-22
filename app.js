const mongoose = require('mongoose')
const userRoutes = require('./routes/user');
const userControoler = require('./controller/user');
const bodyParser = require('body-parser');
const express = require('express')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('mongoose contected'))
    .catch(err => console.log(err))


app.post('/', userControoler.postUser);
app.post('/interest/:id', userControoler.postInterest)


app.get('/user', userControoler.getUserData);
app.get('/user/:id', userControoler.getData);
app.get('/', userControoler.getUser)

app.get('/interest', userControoler.getInterest);

app.delete('/user/:id', userControoler.deleteUser);

// app.put('/user/:id',userControoler.updateUser)

app.listen(9000);