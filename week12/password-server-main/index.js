const express = require('express');
const crypto = require('node:crypto');
  
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// global data will store user records {username, password, salt}
const data = {
    users: [],
};

// function to create a password hash using PBKDF2
// const hashPassword = (password, salt) => {
//     const key = crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512');
//     return key.toString('hex');
// }

const sha256Hash = (password, salt) => {
    const hash = crypto.createHash('sha256');
    hash.update(password + salt);
    return hash.digest('hex');
};

app.get('/users', (req, res) => {
    res.send(data.users);
});

app.post('/login', (req, res) => {
    const {username, password} = req.body;
    console.log(username, password);
    const user = data.users.find(user => user.username === username);
    if (!user) {
        res.status(401).send({success: false, error: 'Invalid Username or Password'});
        return;
    }
    const hashedPassword = sha256Hash(password, user.salt);
    if (user.password !== hashedPassword) {
        res.status(401).send({success: false, error: 'Invalid Username or Password'});
        return;
    }
    res.send({success: true, username: user.username});
});


app.post('/register', (req, res) => {
    const {username, password, repeat} = req.body;
    if (password !== repeat) {
        res.status(400).send({success: false, error: 'Passwords do not match'});
    } else {
        const salt = crypto.randomBytes(16).toString('hex');
        const hashedPassword = sha256Hash(password, salt);
        data.users.push({
            username,
            password: hashedPassword,
            salt,
        });
        res.send({success: true, username: username});
    }
});


const port = 3144;
console.log(`Server running at http://localhost:${port}`);
app.listen(port);



