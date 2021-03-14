import React from 'react';

const SingleRecipe = ({ recipe, handleSelectedRecipe }) => {
  return (
    <tr key={recipe.id}>
      <td>{recipe.title}</td>
      <td>{recipe.vegOrMeat[0].toUpperCase() + recipe.vegOrMeat.slice(1)}</td>
      <td>
        <button onClick={() => handleSelectedRecipe(recipe)}>Details</button>
      </td>
      <td>
        <button>x</button>
      </td>
    </tr>
  );
};

export default SingleRecipe;
