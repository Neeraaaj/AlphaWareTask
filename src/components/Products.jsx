import React from 'react'
import './products.css'
import { useState } from 'react'
import Navbar from './Navbar'

const Products = ({product,setCart, cart}) => {

  const AddtoCart = (product) => {
    const tempCart = cart.filter((item) => item._id !== product._id )
    setCart([...tempCart, product])
  }
  return (
    <section className="col-sm-12 cards flex-md-row">
        <div className="card col-lg-12">
          <div className="card__image-container">
            <img
              src={product.imageUrl}
            />
          </div>
          <div className="card__content">
            <p className=" col-sm-12 flex-row d-flex card__title text--hard">
              Name: {product.name}
            </p>
            <p className="card__title text--medium">
              Description: {product.description}
            </p>
            <div className="card__info">
              <p className="text--medium">Rating {product.rating}</p>
              <p className="card__price text--medium">₹ {product.price}</p>
            </div>
            <button className='btn btn-danger p-2' style={{cursor: "cell"}} onClick={() => AddtoCart(product)}>Add to cart    
            </button>

          </div>
        </div>
    </section>    
  )
}

export default Products