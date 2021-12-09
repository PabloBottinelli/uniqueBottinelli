import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts } from '../../products'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
      const list = getProducts()
      
      list.then(item => {
          setProducts(item)
      }).catch(err  => {
          console.log(err)
      })

      return (() => {
          setProducts([])
      })

  }, [])

    return(
        <div>
            <ItemList items={products}/>
        </div>
    )
}

export default ItemListContainer
