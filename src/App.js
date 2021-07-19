import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Home from './components/Home';
import ImportAll from './utils/ImportAll';
import ShopItem from './utils/ShopItem';
import CartItem from './utils/CartItem';

const App = () => {
  const images = ImportAll(
    require.context('./utils/images', false, /\.(png|jpe?g|svg)$/)
  );

  const [cartItems, setCartItems] = useState([]);
  const [indexArray, setIndexArray] = useState({});

  const removeFromCart = (index) => {
    setCartItems((prevState) => prevState.filter((_, i) => i !== index));
    setIndexArray((prevState) => ({
      ...prevState,
      [index]: 2,
    }));
  }

  const addToCart = (index) => {
    if (index in indexArray) {
      setIndexArray((prevState) => ({
        ...prevState,
        [index]: prevState[index] + 1,
      }));

      cartItems.splice(index, 1);

      setCartItems(() => [
        ...cartItems,
        <CartItem
          img={images[Object.keys(images)[index]].default}
          index={index}
          name={Object.keys(images)[index].slice(0, -5)}
          price={(index + 1) * 10}
          quantity={indexArray[index]}
          onRemove={removeFromCart}
        />,
      ]);
    } else {
      setIndexArray((prevState) => ({
        ...prevState,
        [index]: 2,
      }));

      setCartItems(() => [
        ...cartItems,
        <CartItem
          img={images[Object.keys(images)[index]].default}
          index={index}
          name={Object.keys(images)[index].slice(0, -5)}
          price={(index + 1) * 10}
          quantity={indexArray[index]}
          onRemove={removeFromCart}
        />,
      ]);
    }
  };

  const shopItems = Object.keys(images).map((key, index) => (
    <ShopItem
      img={images[key].default}
      name={key.slice(0, -5)}
      index={index}
      price={(index + 1) * 10}
      onClick={addToCart}
    />
  ));

  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/shop">
              <Shop shopItems={shopItems} />
            </Route>
            <Route path="/cart">
              <Cart cartItems={cartItems} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
