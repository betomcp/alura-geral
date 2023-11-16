require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();

app.use(express.json());

const users = [];

app.get('/user', (req, res) => {
    res.status(200).json(users);
})

app.post('/user', async (req, res) => {
    const hashedPasswoord = await bcrypt.hash(req.body.password, 10);
    const userName = req.body.userName;
    users.push({ userName: userName, password: hashedPasswoord });
    res.sendStatus(201);
})

app.post('/login', async (req, res) => {
    const user = users.find(user => user.userName == req.body.userName);

    if(!user) return res.status(400).send('Usuário incorreto');

    const valid = await bcrypt.compare(req.body.password, user.password);

    if (valid) {
        const token = jwt.sign({ userName: user.userName }, process.env.ACCESS_TOKEN_SECRET);
        return res.status(200).json({ token: token });
    }

    return res.status(400).send('Usuário ou senha incorretos');
})

app.listen(3000, () => {
    console.log('App runing on port 3000');
});