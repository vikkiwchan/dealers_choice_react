import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Home from './Home';
import Recipes from './Recipes';
import RecipeDetail from './RecipeDetail';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      view: 'home',
      selectedRecipe: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleSelectedRecipe = this.handleSelectedRecipe.bind(this);
  }

  async componentDidMount() {
    try {
      const recipes = (await axios.get('/api/recipes')).data;
      this.setState({ recipes: recipes });
    } catch (err) {
      console.error(err);
    }
  }

  handleClick(view) {
    this.setState({ view: view, selectedRecipe: {} });
  }

  handleSelectedRecipe(recipe) {
    this.setState({ selectedRecipe: recipe });
  }

  render() {
    const { recipes, view, selectedRecipe } = this.state;
    const { handleClick, handleSelectedRecipe } = this;

    let componentView;
    if (view === 'recipes') {
      componentView = (
        <Recipes
          recipes={recipes}
          handleSelectedRecipe={handleSelectedRecipe}
        />
      );
    } else if (view === 'vegetarian') {
      componentView = (
        <Recipes
          recipes={recipes.filter(
            (recipe) => recipe.vegOrMeat === 'vegetarian'
          )}
          handleSelectedRecipe={handleSelectedRecipe}
        />
      );
    } else if (view === 'meat') {
      componentView = (
        <Recipes
          recipes={recipes.filter((recipe) => recipe.vegOrMeat === 'meat')}
          handleSelectedRecipe={handleSelectedRecipe}
        />
      );
    } else {
      componentView = <Home />;
    }

    return (
      <div id='container'>
        <Nav handleClick={handleClick} />
        <h1>You Don't Need a Recipe</h1>
        {componentView}
        {selectedRecipe.id ? (
          <RecipeDetail selectedRecipe={selectedRecipe} />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
