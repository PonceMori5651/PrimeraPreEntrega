import React from 'react'
import './ItemListContainer.css'

export default function ItemList(props) {
  return (
    <div className='cardUnidad'>
        <img className='imgProduct' src={props.imgProduct} alt="product" />
        <p className='titleProduct'>{props.titleProduct}</p>
        <p className='descriptionProduct'>{props.descriptionProduct}</p>
        <p className='priceProduct'>{props.priceProduct}</p>
    </div>
  )
}
