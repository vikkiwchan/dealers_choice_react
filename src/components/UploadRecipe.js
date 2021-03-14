import React from 'react';

const UploadRecipe = () => {
  return (
    <div id='upload-recipe'>
      <h3>but you can spread ideas!</h3>
      <form method='POST' action='/api/recipes'>
        <label htmlFor='title'>Title</label>
        <input name='title' type='text' />

        <label htmlFor='author'>Author</label>
        <input name='author' type='text' />

        <label htmlFor='vegOrMeat'>Use 'vegetarian' or 'meat' for type</label>
        <input name='vegOrMeat' type='text' />

        <label htmlFor='detail'>How-to</label>
        <input name='detail' type='text' />

        <label htmlFor='imageUrl'>Image URL</label>
        <input name='imageUrl' type='text' />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UploadRecipe;
