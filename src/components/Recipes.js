import React from 'react';
import SingleRecipe from './SingleRecipe';

const Recipes = ({ recipes, handleSelectedRecipe }) => {
  return (
    <div id='recipes'>
      <table>
        <tbody>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>View</th>
            <th>Remove</th>
          </tr>
          {recipes.map((recipe) => (
            <SingleRecipe
              key={recipe.id}
              recipe={recipe}
              handleSelectedRecipe={handleSelectedRecipe}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipes;
