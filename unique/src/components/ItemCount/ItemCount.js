import { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({onConfirm, maxQuantity}) => {
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
                    <button onClick={decrement} >-</button>
                    <span>{count}</span>
                    <button onClick={increment}>+</button>
                </div>
            </div>
            <div className="h4Container">
                <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

