import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts } from '../../products'
import { getProductsByCategoryId } from '../../products'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { id } = useParams()
  useEffect(() => {
    if(id){
      const list = getProductsByCategoryId(id)
      list.then(item => {
        setProducts(item)
      }).catch(err  => {
        console.log(err)
      })
      return (() => {
        setProducts([])
      })
    }else{
      const list = getProducts()
      list.then(item => {
        setProducts(item)
      }).catch(err  => {
        console.log(err)
      })
      return (() => {
        setProducts([])
      })
    }
  }, [id])

    return(
      <div>
        <ItemList items={products}/>
      </div>
    )    
}

export default ItemListContainer
