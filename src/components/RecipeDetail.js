import React from 'react';

const RecipeDetail = ({ recipe }) => {
  return (
    <div id='recipe-detail'>
      <img src={recipe.imgUrl} width='500' />
      <h3>{recipe.title}</h3>
      <p>{recipe.detail}</p>
    </div>
  );
};

export default RecipeDetail;
