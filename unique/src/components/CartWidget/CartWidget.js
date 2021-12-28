import './CartWidget.css'
import { useContext } from "react"
import CartContext from '../../context/CartContext'
import {Link} from 'react-router-dom';

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    return(
        <div>
            {cart.count === 0 ? undefined : <Link to={'/cart'} className='carrito'><img src='../assets/shopping-cart.svg'></img><span>{cart.count}</span></Link>}
        </div>
    )
}

export default CartWidget