import React from 'react'
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProducts } from '../../products'
import { getProductsByCategoryId } from '../../products'
import { useParams } from 'react-router-dom'
import { db } from '../../service/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore' 

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    setLoading(true)
    if(id){
      setLoading(true)
      getDocs(query(collection(db, 'items'), where('categoryID', '==', id))).then((querySnapshot) => {
        console.log(querySnapshot)
        const products = querySnapshot.docs.map(doc => {
          console.log(doc)
          return { id: doc.id, ...doc.data() }
        })
        setProducts(products)
      }).catch((error) => {
        console.log('Error searching items', error)
      }).finally(() => {
        setLoading(false)
      })
    }else{
      getDocs(collection(db, 'items')).then((querySnapshot) => {
        console.log(querySnapshot)
        const products = querySnapshot.docs.map(doc => {
          console.log(doc)
          return { id: doc.id, ...doc.data() }
        })
        setProducts(products)
      }).catch((error) => {
        console.log('Error searching items', error)
      }).finally(() => {
        setLoading(false)
      })
    }
  }, [id])

  if(loading){
    return <div className="loader"></div>
  }

  return(
    <div>
      <ItemList items={products}/>
    </div>
  )    
}

export default ItemListContainer
