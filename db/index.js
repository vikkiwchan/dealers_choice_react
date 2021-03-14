const { Sequelize, DataTypes } = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL ||
    'postgres://localhost/dealers_choice_react_recipes_db',
  { logging: false }
);
const { recipes } = require('./recipes');

// MODEL DEFINITION
const Recipe = db.define('recipe', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vegOrMeat: {
    type: DataTypes.ENUM('vegetarian', 'meat'),
  },
  detail: {
    type: DataTypes.TEXT,
  },
  imgUrl: {
    type: DataTypes.STRING,
  },
});

// HOOK
Recipe.beforeSave((recipe) => {
  if (!recipe.imgUrl) {
    recipe.imgUrl =
      'https://assets.bonappetit.com/photos/5ea5f4c79820ff0008fe7225/1:1/w_2560%2Cc_limit/HLY-carbonara-16x9.jpg';
  }
});

const syncAndSeed = async () => {
  try {
    await db.sync({ force: true });
    await Promise.all(
      recipes.map((recipe) =>
        Recipe.create({
          title: recipe.title,
          author: recipe.author,
          vegOrMeat: recipe.vegOrMeat,
          detail: recipe.detail,
          imgUrl: recipe.imgUrl,
        })
      )
    );
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  model: { Recipe },
  db,
  syncAndSeed,
};
