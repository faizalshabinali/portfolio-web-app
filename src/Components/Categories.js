import React from 'react';
import { NavLink } from 'react-router-dom';

function Categories({ filter, categories }) {
  return (
    <div className='buttons-portfolio'>
      {categories.map((cat, i) => {
        return (
          <button
            className='btn-portfolio-categories'
            type='button'
            key={i}
            onClick={() => filter(cat)}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
