import React from 'react';
import Porto_cards from '../porto_cards/page';
import PortoCards from '../porto_cards/page';
 // Assuming Card.js is in the same directory

function CardsPortofolio() {
  const cardData = {
    imageUrl: 'https://plus.unsplash.com/premium_photo-1684529264862-057f43999345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmlkZW98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
    title: 'Sample Card Title',
    description: 'This is a sample description for the card.',
    categories: 'Category 1',
  };

  return (
    <div className="mx-24 flex flex-wrap justify-center p-8">
      <Porto_cards {...cardData} />
      <Porto_cards {...cardData} />
      <Porto_cards {...cardData} />
      <Porto_cards {...cardData} />
      <Porto_cards {...cardData} />
      <Porto_cards {...cardData} />
    </div>
  );
}

export default CardsPortofolio;
