// ItemCard.jsx
import React from 'react';
import Header from './Header';
import '../../assets/css/ItemCard.css';
function ItemCard() {
  const items = [
    { name: "Product 1", image: "https://i.pinimg.com/564x/4f/3f/ac/4f3facf5ffc99dbed7542f1d587dbade.jpg", price: 20 },
    { name: "Product 2", image: "https://i.pinimg.com/736x/74/00/32/74003268135b040e3c6042dc89244dbf.jpg", price: 25 },
    // Add more items as needed
  ];

  return (
    <div className='view'>
      <Header />
    <div className="container">
      {items.map((item, index) => (
        <div className="item-card" key={index}>
          <img src={item.image} alt={item.name} />
          <div className="item-name">{item.name}</div>
          <div className="item-price">${item.price}</div>
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      ))}
    </div>
    </div>
  );
}

export default ItemCard;
