import { useState } from 'react'
import './ItemCount.css'

function ItemCount({stock, initial}){
    const [count, setCount] = useState(initial);
    return(
        <div className="container">
            <div className="h3Container">
                <h3>Camisa Tiger</h3>
            </div>
            <div className="contador">
                <div className="btnContainer">
                    <button onClick={() => setCount(count - 1)} disabled={count === initial ? 'disabled' : null} >-</button>
                    <span>{count}</span>
                    <button onClick={() => setCount(count + 1)} disabled={count === stock ? 'disabled' : null}>+</button>
                </div>
            </div>
            <div className="h4Container">
                <button>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount

