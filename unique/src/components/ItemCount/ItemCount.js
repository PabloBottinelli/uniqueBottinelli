import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({onConfirm, maxQuantity, product}) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < maxQuantity) {
            setCount(count + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }

    return(
        <div className="container">
            <div className="h3Container">
                <h3>Cantidad</h3>
            </div>
            <div className="contador">
                <div className="btnContainer">
                    <button onClick={decrement}>-</button>
                    {maxQuantity === 0 ? <span>0</span> : <span>{count}</span>}
                    <button onClick={increment}>+</button>
                </div>
            </div>
            <div className="h4Container">
                {maxQuantity === 0 ? <button className='nostock'>No hay stock!</button> : <button className='stock' onClick={() => onConfirm(count, product)}>Agregar al carrito</button>}
            </div>
        </div>
    )
}

export default ItemCount

