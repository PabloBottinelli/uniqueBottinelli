import './CartWidget.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'

const CartWidget = () => {
    const { cart, setCart } = useContext(CartContext)

    return(
        <a href='carrito' className='carrito'><img src='shopping-cart.svg'></img><span>{cart.count}</span></a>
    )
}

export default CartWidget
