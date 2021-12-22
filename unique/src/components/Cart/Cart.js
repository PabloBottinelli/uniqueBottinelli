import './Cart.css';
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem';
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const Cart = () => {
    const { cart, setCart } = useContext(CartContext)
    const { Clear } = useContext(CartContext) 
    
    const getQuantity = (id) => {
        const cantidades = cart.productQuantity
        const cantidad = cantidades.filter((product) => product.id == id)
        return cantidad[0].quantity
    }

    const total = (carrito) => {
        const subtotales = carrito.product.map(i => i.precio*getQuantity(i.id))
        return subtotales.reduce((a, b) => a + b, 0)
    }

    return(
        <div className='cart'>
            <h1>Carrito de compras</h1>
            {cart.count === 0 ? 
            <div>
                <h9 className='total'>Carrito Vacio</h9>
                <Link to={'/'} className='vaciar'>Ir a Comprar</Link>
            </div>
            :<div> 
                <table>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Subtotal</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.product.map(i => <CartItem item={i} quantity={getQuantity(i.id)}/>)}         
                    </tbody>
                </table>
                <h9 className='total'>Total: {total(cart)}$</h9>
                <button onClick={() => Clear()} className='vaciar'>Vaciar Carrito</button></div>
            }   
        </div>
    )
}

export default Cart