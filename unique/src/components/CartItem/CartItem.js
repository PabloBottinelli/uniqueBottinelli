import './CartItem.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'

const CartItem = ({ item, quantity }) => {
    const { removeItem, setCart } = useContext(CartContext) 
    const subtotal = item.precio * quantity

    const increment = () => {
        if(quantity <= item.stock){
            quantity = quantity +1
            setCart(quantity, item)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            quantity = quantity - 1
            setCart(quantity, item)
        }
    }
    return (
        <tr key={item.id}>
            <td><img src={item.url}></img></td>
            <td>{item.name}</td>
            <td>{item.precio}$</td>
            <td>
                <button onClick={decrement}>-</button>
                <span>{quantity}</span>
                <button onClick={increment}>+</button>
            </td>
            <td>{subtotal}$</td>
            <td><button onClick={() => removeItem(item.id)} className='eliminar'>x</button></td>
        </tr> 
    )
}

export default CartItem