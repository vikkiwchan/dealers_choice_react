import React from 'react';
import SingleRecipe from './SingleRecipe';

const Recipes = ({ recipes }) => {
  return (
    <div id='recipes'>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>The "No-Recipe" Recipe</th>
            <th>Remove</th>
          </tr>
          {recipes.map((recipe) => (
            <SingleRecipe key={recipe.id} recipe={recipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipes;
