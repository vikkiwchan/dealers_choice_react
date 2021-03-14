import React, { Component } from 'react';
import RecipeDetail from './RecipeDetail';

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: {},
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(recipe) {
    console.log(recipe);
    this.setState({ selectedRecipe: recipe });
  }

  render() {
    const { recipe } = this.props;
    const componentView = this.state.selectedRecipe.id ? (
      <RecipeDetail recipe={recipe} />
    ) : (
      <></>
    );
    const { handleClick } = this;
    return (
      <>
        <tr key={recipe.id}>
          <td>{recipe.title}</td>
          <td>
            {recipe.vegOrMeat[0].toUpperCase() + recipe.vegOrMeat.slice(1)}
          </td>
          <td>
            <a onClick={() => handleClick(recipe)}>Detail</a>
          </td>
          <td>
            <button>x</button>
          </td>
        </tr>
        {componentView}
      </>
    );
  }
}

export default SingleRecipe;
