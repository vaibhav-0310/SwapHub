import React, { useState } from 'react';
import Bentogrid from '../components/Bentogrid';

const categories = [
  {
    id: 'donate',
    name: 'Donate',
    blogs: [
      { id: 1, title: 'Donate Used Clothes', image: 'https://picsum.photos/seed/1/600/400' },
      { id: 2, title: 'Donate Books', image: 'https://picsum.photos/seed/2/600/400' },
      { id: 3, title: 'Donate Toys', image: 'https://picsum.photos/seed/3/600/400' },
      { id: 4, title: 'Donate stuff', image: 'https://picsum.photos/seed/3/600/400' },
      { id: 5, title: 'Donate stationary', image: 'https://picsum.photos/seed/3/600/400' },


    ],
  },
  {
    id: 'buy',
    name: 'Buy',
    blogs: [
      { id: 1, title: 'Buy Laptops', image: 'https://picsum.photos/seed/4/600/400' },
      { id: 2, title: 'Buy Phones', image: 'https://picsum.photos/seed/5/600/400' },
      { id: 3, title: 'Buy Clothes', image: 'https://picsum.photos/seed/4/600/400' },
      { id: 4, title: 'Buy Medicines', image: 'https://picsum.photos/seed/5/600/400' },
      { id: 5, title: 'Protien ', image: 'https://picsum.photos/seed/5/600/400' },

    ],
  },
  {
    id: 'sell',
    name: 'Sell',
    blogs: [
      { id: 1, title: 'Sell Your Old Gadgets', image: 'https://picsum.photos/seed/6/600/400' },
      { id: 2, title: 'Sell Chargers', image: 'https://picsum.photos/seed/5/600/400' },
      { id: 3, title: 'Sell Clothes', image: 'https://picsum.photos/seed/4/600/400' },
      { id: 4, title: 'Sell Foods', image: 'https://picsum.photos/seed/5/600/400' },
      { id: 5, title: 'Sell Protien ', image: 'https://picsum.photos/seed/5/600/400' },

    ],
  },
  {
    id: 'rent',
    name: 'Rent',
    blogs: [
      { id: 1, title: 'Rent Furniture', image: 'https://picsum.photos/seed/7/600/400' },
      { id: 2, title: 'Rent Cycles', image: 'https://picsum.photos/seed/5/600/400' },
      { id: 3, title: 'Rent Flats', image: 'https://picsum.photos/seed/4/600/400' },
      { id: 4, title: 'Rent id cards', image: 'https://picsum.photos/seed/5/600/400' },
      { id: 5, title: 'Rent  ', image: 'https://picsum.photos/seed/5/600/400' },

    ],
  },
];

const CategoryCarousel = () => {
  const [currentCategory, setCurrentCategory] = useState('donate');

  const handlePrev = () => {
    const currentIndex = categories.findIndex((category) => category.id === currentCategory);
    const prevCategory = categories[(currentIndex - 1 + categories.length) % categories.length];
    setCurrentCategory(prevCategory.id);
  };

  const handleNext = () => {
    const currentIndex = categories.findIndex((category) => category.id === currentCategory);
    const nextCategory = categories[(currentIndex + 1) % categories.length];
    setCurrentCategory(nextCategory.id);
  };

  const currentCategoryData = categories.find((category) => category.id === currentCategory);

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &lt;
      </button>

      {/* Bento Grid */}
      <div className="flex justify-center items-center">
        <Bentogrid
          categoryName={currentCategoryData.name}
          blogs={currentCategoryData.blogs}
        />
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default CategoryCarousel;
