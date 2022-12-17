import React, {useState , useEffect} from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'
/*import ItemCount from '../ItemCount/ItemCount'*/
import getItems from '../../services/mockService'

let item = [];
export default function ItemListContainer() {

  const [items,setItems] = useState([]);

  useEffect(()=>{
    getItems().then((respuesta)=> setItems(respuesta))

  })
  return (
    <div className='totalCards'>
      
          { items.map(item=>{
            return <ItemList 
            title= {item.title} 
            imgProduct={item.imgProduct} 
            descriptionProduct= {item.descriptionProduct} 
            priceProduct={item.priceProduct}
            stock={item.stock}/>
          }) }
    </div>
  )
}
