import './CartItem.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'

const CartItem = ({ item, quantity }) => {
    const { removeItem } = useContext(CartContext) 

    const subtotal = item.precio * quantity
    return (
        <tr key={item.id}>
            <td><img src={item.url}></img></td>
            <td>{item.name}</td>
            <td>{item.precio}$</td>
            <td>{quantity}</td>
            <td>{subtotal}$</td>
            <td><button onClick={() => removeItem(item.id)} className='eliminar'>x</button></td>
        </tr> 
    )
}

export default CartItem