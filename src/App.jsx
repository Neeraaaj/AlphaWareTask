import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './app.css'
import Products from './components/Products';
import Navbar from './components/Navbar';
import CartPopup from './components/CartPopup';

const App = () => {
  const [products, setProducts] = useState([]);
  const[cart, setCart] = useState([]);
const[popup, setPopup] = useState(false)
  useEffect(() => {
    fetchProductList().then(data => setProducts(data));
  }, []);

  useEffect(() => {
    console.log("cart: ", cart)
  }, [cart])

  const fetchProductList = async () => {
    const url = "http://3.7.252.58:4001/product/getAllProduct";
    const headers = {'Content-Type': 'application/json'};
    const cookie = {'connect.sid': 's%253AC9UlQ9M1W1aslddIqBNrrk68Yx4GleaF.OyLqPkC%252FpbJKf070EG6KIJoS70bHaP5GOYxBXBV6hG8'};
    const data = {"limit": 100, "page": 0, "search": ""};
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      cookie: cookie,
      body: JSON.stringify(data)
    });

    if (response.status === 200) {
      const productList = await response.json();
      return productList;
    } else {
      throw new Error('Failed to fetch product list');
    }
  };

  return (
    <div className='container' style={{position: "relative"}}>
      <Navbar cart={cart} setPopup= {setPopup}/>
      {products.map(product => (
        <Products product = {product} setCart = {setCart} cart={cart} />
      ))}
      {
        popup ? 
        <CartPopup cart={cart} setPopup={setPopup} setCart = {setCart}/>
        : 
        <></>
      }
    </div>
  );
};

export default App;