import React, { useState } from 'react'

const Navbar = ({cart, setPopup}) => {
  return (
    <nav class="fixed navbar navbar-expand-lg navbar-light bg-light" style={{borderRadius: "20px"}}>
        <a class="navbar-brand" href="#">Store</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item" style={{display: "flex"}}>
                <button onClick={() => setPopup(true)}>show cart </button>
                <p className='nav-item' >Cart {cart.length}</p>
            </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar