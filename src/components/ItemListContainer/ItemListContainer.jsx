import React from 'react'
import './ItemListContainer.css'
import ItemList from './ItemList'

export default function ItemListContainer() {
  return (
    <div className='totalCards'>
        <ItemList 
        imgProduct="https://www.pcspeed.com.pe/wp-content/uploads/2021/09/2.jpg" 
        titleProduct="PC STARTER AMD RYZEN 5 5600G"
        descriptionProduct="lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu"
        priceProduct="$ 5800"
        />
        <ItemList 
        imgProduct="https://d598hd2wips7r.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/4/C/4C9A7LT-1_T1656528063.png" 
        titleProduct="Laptop HP ProBook 440 G8"
        descriptionProduct="lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu"
        priceProduct="$ 3400"
        />
        <ItemList 
        imgProduct="https://http2.mlstatic.com/D_NQ_NP_810141-MPE49141021704_022022-O.jpg" 
        titleProduct="Muebles Sala (one Stars Precio Increible)"
        descriptionProduct="lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu"
        priceProduct="$ 7400"
        />
        <ItemList 
        imgProduct="https://img.clasf.pe/2019/09/25/Zapatillas-Nike-Air-Jordan-4-Retro-Bred-2019-20190925120059.6880690015.jpg" 
        titleProduct="ZAPATILLAS NIKE AIR JORDAN 4 RETRO BRED"
        descriptionProduct="lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu lorem impsu"
        priceProduct="$ 2000"
        />
    </div>
  )
}
