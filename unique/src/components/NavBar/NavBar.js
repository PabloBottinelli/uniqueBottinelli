import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return(
        <nav className='nav'>
            <h1>UNIQUE</h1>
            <a href='artesanias'>Artesanías</a>
            <a href='joyas'>Joyas</a>
            <a href='muebles'>Muebles</a>
            <a href='3d'>3D</a>
            <a href='otros'>Otros</a>
            <CartWidget/>
        </nav>
    )
}

export default NavBar