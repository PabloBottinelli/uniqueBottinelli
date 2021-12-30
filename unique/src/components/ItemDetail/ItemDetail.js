import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import CartContext from '../../context/CartContext'

const ItemDetail = ({ product }) => {
    const [onAdd, setCount] = useState()

    const { setCart, cart } = useContext(CartContext) 

    const filtro = cart.product.filter((p) => p.id === product.id)
    console.log(filtro)

    const addToCart = (count, product) => {
        setCount(count)
        setCart(count, product)
    }

    return (
        <div key={product.id} className="itemDetail-ctn">
            <div className='imagen'>
                <img src={product.url} alt='imagen-item'></img>
            </div>
            <div className='detalles'>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <h5>{product.precio}$</h5>
                <h6>Ubicación del vendedor: {product.ubicacion}</h6>
                <h6>Hasta 6 cuotas sin interes con tarjeta de debito</h6>
            </div>
            <div className='botones'>
                {onAdd ? undefined : 
                    filtro.length === 0 ? 
                    <ItemCount onConfirm={addToCart} maxQuantity={product.stock} product={product} valorCount={1}/> : 
                    <ItemCount onConfirm={addToCart} maxQuantity={product.stock} product={product} valorCount={filtro[0].quantity}/>
                }
                <Link to={'/cart'} className='agregar-carrito'>Terminar Compra</Link>
            </div>
        </div>
    )
}
export default ItemDetail