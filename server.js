require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json()); // JSON.parse

const renderTemplate = require('./lib/renderTemplate');

const Profile = require('./views/Profile');

const postRouter = require('./routes/postRouter');

app.use('/posts', postRouter);

app.get('/', (req, res) => {
  res.redirect('/posts');
});

app.get('/profile', (req, res) => {
  console.log('server!');
  renderTemplate(Profile, {}, res);
});

app.listen(process.env.PORT ?? 3000);