import React from 'react';

const RecipeDetail = ({ selectedRecipe }) => {
  return (
    <div id='recipe-detail'>
      <img src={selectedRecipe.imgUrl} width='500' />
      <h3>{selectedRecipe.title}</h3>
      <p>{selectedRecipe.detail}</p>
    </div>
  );
};

export default RecipeDetail;
