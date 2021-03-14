import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import Home from './Home';
import Recipes from './Recipes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: [],
      view: 'home',
    };
    this.handleClick = this.handleClick.bind(this);
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
    // console.log(view);
    this.setState({ view: view });
  }

  render() {
    //console.log(this.state.view);
    const { recipes, view } = this.state;
    const { handleClick } = this;

    let componentView;
    if (view === 'recipes') {
      componentView = <Recipes recipes={recipes} />;
    } else if (view === 'vegetarian') {
      componentView = (
        <Recipes
          recipes={recipes.filter(
            (recipe) => recipe.vegOrMeat === 'vegetarian'
          )}
        />
      );
    } else if (view === 'meat') {
      componentView = (
        <Recipes
          recipes={recipes.filter((recipe) => recipe.vegOrMeat === 'meat')}
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
      </div>
    );
  }
}

export default App;
