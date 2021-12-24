import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductById } from '../../products'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../service/firebase/firebase'

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { paramId } = useParams()

    useEffect(() => {
        setLoading(true)

        getDoc(doc(db, 'items', paramId)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data() }
            setProduct(product)
        }).catch((error) => {
            console.log('Error searching item', error)
        }).finally(() => {
            setLoading(false)
        })
    }, [paramId])

    if(loading){
        return <div className="loader"></div>
    }

    return (
        <div className="ItemDetailContainer" >
            <ItemDetail  product={product}/>
        </div>
    )    
    
}

export default ItemDetailContainer

