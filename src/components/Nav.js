import React from 'react';

const Nav = ({ handleClick }) => (
  <nav>
    <a href='/' onClick={() => handleClick('home')}>
      Home
    </a>
    <a href='/#all-recipes' onClick={() => handleClick('recipes')}>
      Show All
    </a>
    <a href='/#vegetarian' onClick={() => handleClick('vegetarian')}>
      Vegetarian
    </a>
    <a href='/#meat' onClick={() => handleClick('meat')}>
      Meat
    </a>
    <a href='/#addRecipe' onClick={() => handleClick('uploadRecipe')}>
      Add a "No-Recipe"
    </a>
  </nav>
);

export default Nav;
