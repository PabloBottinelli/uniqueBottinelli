import './ItemDetail.css'
import { Link } from 'react-router-dom'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'

const ItemDetail = ({ product }) => {
    const [onAdd, setCount] = useState()

    const addToCart = (count) => {
        setCount(count)
        console.log(onAdd)
    }

    return (
        <div key={product.id} className="itemDetail-ctn">
            <div className='imagen'>
                <img src={product.url}></img>
            </div>
            <div className='detalles'>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <h5>{product.precio}$</h5>
                <h6>Ubicación del vendedor: {product.ubicacion}</h6>
                <h6>Hasta 6 cuotas sin interes con tarjeta de debito</h6>
            </div>
            <div className='botones'>
                {onAdd ? undefined : <ItemCount onConfirm={addToCart} maxQuantity={product.stock}/>}
                <Link to={'/cart'} className='agregar-carrito'>Terminar Compra</Link>
            </div>
        </div>
    )
}
export default ItemDetail