const postRouter = require('express').Router();

const MainPage = require('../views/MainPage');
const PostForm = require('../views/PostForm');

const renderTemplate = require('../lib/renderTemplate');

const { Post } = require('../db/models');

// get all posts
postRouter.get('/', async (req, res) => {
  const all = await Post.findAll({ order: [
    ['id', 'ASC'],
],});
  // get posts from db
  renderTemplate(MainPage, { all }, res);
});

// render post form
postRouter.get('/new', (req, res) => {
  // console.log(12345);
  renderTemplate(PostForm, {}, res);
});

// data from form
postRouter.post('/new', async (req, res) => {
  console.log(req.body);
  const newPost = await Post.create(req.body);
  res.json(newPost);
});

// edit post
postRouter.put('/:id', async (req, res) => {
  console.log(req.body);
  const { picture, text } = req.body;
  try {
    await Post.update({ picture, text }, { where: { id: Number(req.params.id) } });
    res.status(200).end();
  } catch (error) {
    console.log(error);
    res.status(555).end();
  }
});

// delete post
postRouter.delete('/:id', async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    res.sendStatus(222);
  } catch (error) {
    console.log(error);
    res.sendStatus(555);
  }
});

// like
postRouter.get('/like/:id', async (req, res) => {
  await Post.update({ likes: 1 }, { where: { id: req.params.id } });
  res.json({ likes: 1 });
});

// get one post
postRouter.get('/:id', (req, res) => { });

module.exports = postRouter;
