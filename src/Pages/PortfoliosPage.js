import React from 'react';
import Title from '../Components/Title';
import MenuItems from '../Components/MenuItems';
import Categories from '../Components/Categories';
import { useState } from 'react';
import portfolios from '../Components/allportfolio';

const allCategories = [
  'All',
  ...new Set(portfolios.map((item) => item.category)),
];
function PortfoliosPage() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === 'All') {
      setMenuItems(portfolios);
      return;
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className='PortfoliosPage'>
      <div className='portfolio-title'>
        <Title title={'Portfolios'} span={'Portfolios'} />
      </div>
      <div className='portfolios-data'>
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default PortfoliosPage;
