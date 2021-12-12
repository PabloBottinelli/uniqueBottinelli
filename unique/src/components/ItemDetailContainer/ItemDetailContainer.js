import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.css'
import { getProductById } from '../../products'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = ()=> {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProductById(id).then(item => {
            setProduct(item)
        }).catch(err  => {
            console.log(err)
        })

        return (() => {
            setProduct()
        })

    }, [id])


    return (
        <div className="ItemDetailContainer" >
            <ItemDetail  product={product}/>
        </div>
    )    
    
}

export default ItemDetailContainer

