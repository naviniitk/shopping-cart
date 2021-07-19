import React from 'react';

const Cart = (props) => {
  return (
    <div>
      <div id="cart-grid">{props.cartItems}</div>
      <div>Checkout</div>
    </div>
  );
};

export default Cart;
