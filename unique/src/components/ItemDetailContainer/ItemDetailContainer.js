import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductById } from '../../products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState([])
    const { paramId } = useParams()
    console.log(paramId)
    useEffect(() => {
        getProductById(paramId).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })

    }, [paramId])


    return (
        <div className="ItemDetailContainer" >
            <ItemDetail  product={product}/>
        </div>
    )    
    
}

export default ItemDetailContainer

