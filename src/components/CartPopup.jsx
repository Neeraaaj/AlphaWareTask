import React, { useState } from 'react'

const CartPopup= ({cart, setPopup, setCart}) => {

  const [active, setActive] = useState(cart.isActive);

  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((item) => item !== productToRemove);
    setCart(updatedCart);
  };

  return (
    <div style={{position: "absolute", top: "50px", left: "10%", background: "white", width: "500px", height: "fit-content"}}>
      {cart.map((item) => {
        return  (
          <div className='container'>
            {active !== false ? 
              <div id='container2' key={cart._id}>
                <img src={item.imageUrl}  style={{width: "100px", height: "100px"}} />
                <h2>Name: {item.name}</h2>
                <p>Description: {item.description}</p>
                <small>Price: {item.price}</small>
                <button className='btn btn-danger' style={{width: "100px", height: "50px", marginLeft: "20px"}} onClick={() => removeFromCart(item)}>Remove</button>
              </div>  
            :
              <p>No items</p>
            }
          </div>
        )
      })}
      <button className='btn btn-primary' style={{width: "100px", height: "50px"}}
        onClick={() => setPopup(false)}
      >Close</button>
      <button className='btn btn-warning'style={{width: "100px", height: "50px"}} onClick={() => alert("Thank you!")}>Checkout</button>
    </div>
  )
}

export default CartPopup