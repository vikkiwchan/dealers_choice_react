import React from 'react';

const UploadRecipe = () => {
  return (
    <div id='upload-recipe' action='/recipes'>
      <h3>but you can spread ideas!</h3>
      <form method='POST'>
        <label htmlFor='title'>Title:</label>
        <input name='title' type='text' />

        <label htmlFor='author'>Author:</label>
        <input name='author' type='text' />

        <label htmlFor='vegOrMeat'>Vegetarian or Meat:</label>
        <input name='vegOrMeat' type='text' />

        <label htmlFor='imageUrl'>Image URL:</label>
        <input name='imageUrl' type='text' />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UploadRecipe;
