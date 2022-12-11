import React, { useState } from 'react';
import './ItemListContainer.css';

export default function ItemList(props) {

  let [boleanFavorite, setBoleanFavorite]= useState(false)
  function handleFavorite(){
    setBoleanFavorite(!boleanFavorite)
  }
  return (
    <div className='cardUnidad'>
        <img className='imgProduct' src={props.imgProduct} alt="product" />
        <p className='titleProduct'>{props.titleProduct}</p>
        <button onClick={handleFavorite} style={{backgroundColor: boleanFavorite===true? "red" : "beige"}}>❤</button>
        <p className='descriptionProduct'>{props.descriptionProduct}</p>
        <p className='priceProduct'>{props.priceProduct}</p>
    </div>
  )
}
