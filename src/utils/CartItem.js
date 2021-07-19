import React from 'react';

const CartItem = ({ img, index, name, price, quantity, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={img} alt=""></img>
      <div style={{ verticalAlign: 'center', lineHeight: '100px' }}>{name}</div>
      <div style={{ verticalAlign: 'center', lineHeight: '100px' }}>
        Price: {price}
      </div>
      <div>Quantity: {quantity || 1}</div>
      <button className="remove-btn" onClick={() => onRemove(index)}>Remove</button>
    </div>
  );
};

export default CartItem;
