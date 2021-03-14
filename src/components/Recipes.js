import React from 'react';

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
            <tr key={recipe.id}>
              <td>{recipe.title}</td>
              <td>{recipe.vegOrMeat}</td>
              <td>
                <a href={`/#${recipe.id}`}>Detail</a>
              </td>
              <td>
                <button>x</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recipes;
