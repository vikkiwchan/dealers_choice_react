const express = require('express');
const app = express();
const path = require('path');
const {
  model: { Recipe },
  db,
  syncAndSeed,
} = require('./db/index');

app.use('/dist', express.static(path.join(__dirname, 'dist')));

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
