import React from 'react';

function MenuItems({ menuItem }) {
  return (
    <div className='portfolios'>
      {menuItem.map((item) => {
        return (
          <div key={item.id} className='portfolio'>
            <div className='image-data'>
              <img src={item.image} alt='' />
              <ul className='hover-items'>
                <li>
                  <a href={item.icon1}>{item.icon1}</a>
                  <a href={item.icon2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>{item.title}</h5>
            <p>placeholder</p>
          </div>
        );
      })}
    </div>
  );
}

export default MenuItems;
