import './Cart.css';
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem/CartItem';
import {Link} from 'react-router-dom'
import { addDoc, collection, writeBatch, getDoc, doc, Timestamp } from 'firebase/firestore';
import { db } from '../../service/firebase/firebase'
import { useState } from 'react'

const Cart = () => {
    const { cart, setCart, Clear } = useContext(CartContext)
    const [processingOrder, setProcessingOrder] = useState(true)
    const [orderId, setOrderId] = useState()

    const getQuantity = (id) => {
        const cantidades = cart.product
        const cantidad = cantidades.filter((product) => product.id == id)
        return cantidad[0].quantity
    }

    const total = (carrito) => {
        const subtotales = carrito.product.map(i => i.precio*i.quantity)
        return subtotales.reduce((a, b) => a + b, 0)
    }

    const confirmOrder = (e) => {
        setProcessingOrder(true)
        e.preventDefault()
        const form = document.forms[0];

        const objOrder = {
            buyer: form.querySelector('input[name="nombre"]').value,
            items: cart.product,
            total: total(cart),
            phone: form.querySelector('input[name="tel"]').value,
            mail: form.querySelector('input[name="mail"]').value,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const outOfStock = []

        objOrder.items.forEach((prod) => {
            getDoc(doc(db, 'items', prod.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= prod.quantity){
                    batch.update(doc(db, 'items', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.quantity
                    })
                }else{
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data() })
                }
            })
        })

        if(outOfStock.length === 0){
            addDoc(collection(db, 'orders'), objOrder).then(({ id }) => {
                batch.commit().then(() => {
                    setOrderId(id)
                })
                setTimeout(() => {
                    Clear()
                    setProcessingOrder(false)
                }, 1000)
            })
        }else{
            alert('No hay stock del producto tal, por favor modifique la cantidad')
        }
    }

    if(processingOrder){
        return(
            <div className='cart'>
                <h1>Carrito de compras</h1>
                {cart.count === 0 ? 
                <div>
                    <h5 className='total'>Carrito Vacio</h5>
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
                            {cart.product.map(i => <CartItem key={i.id} item={i} quantity={getQuantity(i.id)}/>)}         
                        </tbody>
                    </table>
                    <h5 className='total'>Total: {total(cart)}$</h5>
                    <button onClick={() => Clear()} className='vaciar'>Vaciar Carrito</button>
                    <form onSubmit={confirmOrder}>
                        <h5 className='total'>Completá tus datos para continuar con la compra</h5>
                        <input type='text' placeholder='Nombre' name='nombre' required/>
                        <input type='text' placeholder='Telefono' name='tel' required/>
                        <input type='text' placeholder='Mail' name='mail' required/>
                        <button type='submit' className='vaciar'>Finalizar Compra</button>
                    </form>
                </div>                
                }   
            </div>
        )
    }else{
        return <div><h1>Gracias!! El id de tu compra es {orderId}</h1></div>
    }
}

export default Cart