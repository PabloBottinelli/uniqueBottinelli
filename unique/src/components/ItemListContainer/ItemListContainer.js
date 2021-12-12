import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts } from '../../products'
import { getProductsByCategoryId } from '../../products'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { paramId } = useParams()

  useEffect(() => {
      const list = getProductsByCategoryId()
      
      list.then(item => {
          setProducts(item)
      }).catch(err  => {
          console.log(err)
      })

      return (() => {
          setProducts([])
      })

  }, [paramId])

    return(
        <div>
            <ItemList items={products}/>
        </div>
    )    
}

export default ItemListContainer
