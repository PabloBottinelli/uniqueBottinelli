import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='nav'>
            <Link to={`/`}><h1>UNIQUE</h1></Link>
            <Link to={'/category/1'}>Artesanías</Link>
            <Link to={'/category/2'}>Joyas</Link>
            <Link to={'/category/3'}>Muebles</Link>
            <Link to={'/category/4'}>3D</Link>
            <Link to={'/category/5'}>Otros</Link>
            <CartWidget/>
        </nav>
    )
}

export default NavBar