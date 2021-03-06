const express = require('express');
const app = express();
const path = require('path');
const {
  model: { Recipe },
  db,
  syncAndSeed,
} = require('./db/index');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res, next) =>
  res.sendFile(path.join(__dirname, 'index.html'))
);

app.get('/api/recipes', async (req, res, next) => {
  try {
    res.send(await Recipe.findAll());
  } catch (err) {
    console.error(err);
  }
});

app.post('/api/recipes', async (req, res, next) => {
  try {
    const { title, author, vegOrMeat, detail, imageUrl } = req.body;
    const recipe = await Recipe.create({
      title: title,
      author: author,
      vegOrMeat: vegOrMeat,
      detail: detail,
      imgUrl: imageUrl,
    });
    return res.redirect('/');
  } catch (err) {
    console.error(err);
  }
});

app.delete('/api/recipes/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const recipe = await Recipe.findByPk(id);
    await recipe.destroy();
    return res.sendStatus(204);
  } catch (err) {
    console.error(err);
  }
});

const init = async () => {
  try {
    await db.authenticate();
    syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, () => console.log(`App is listening on port ${port}`));
  } catch (err) {
    console.log(err);
  }
};

init();
