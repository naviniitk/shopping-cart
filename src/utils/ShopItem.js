import React from 'react';

const ShopItem = (props) => {
  return (
    <div className="shop-item">
      <img src={props.img} alt=""></img>
      <div>{props.name}</div>
      <div>{props.price}</div>
      <button
        type="button"
        className="cart-btn"
        onClick={() => props.onClick(props.index)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ShopItem;
