import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import {Link} from 'react-router-dom';
import { db } from '../../service/firebase/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore' 
import { useState, useEffect } from 'react'

const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getDocs(collection(db, 'categorias')).then((querySnapshot) => {
            const categorias = querySnapshot.docs.map(doc => {
              return { id: doc.id, ...doc.data() }
            })
            setCategories(categorias)
          }).catch((error) => {
            console.log('Error searching categories', error)
          })
    },[])

    return(
        <nav className='nav'>
            <Link to={`/`}><h1>UNIQUE</h1></Link>
            {categories.map(cat => <Link key={cat.id} className='Option' to={`/category/${cat.nombre}`}>{cat.nombre}</Link>)}
            <CartWidget/>
        </nav>
    )
}

export default NavBar
