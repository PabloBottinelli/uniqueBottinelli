import './ItemDetailContainer.css'
import ItemDetail from '../ItemDetail/ItemDetail';
import  { useState, useEffect } from 'react' 

const products = [
    {
        id:'1',
        name:'Remera 1',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        precio: 150,
        url: './assets/remera.jpg',
        talle: 'M'
      },
      {
        id:'2',
        name:'Remera 2',
        description:'Remera 2',
        precio: 250,
        url: './assets/remera.jpg'
      },
      {
        id:'3',
        name:'Remera 3',
        description:'Remera 3',
        precio: 350,
        url: './assets/remera.jpg'
      },
      {
        id:'4',
        name:'Remera 4',
        description:'Remera 4',
        precio: 450,
        url: './assets/remera.jpg'
      },
      {
        id:'5',
        name:'Remera 5',
        description:'Remera 5',
        precio: 550,
        url: './assets/remera.jpg'
      }
]

function getItem(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => resolve(products[0]), 2000 )
    })
}
  
const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
  
    useEffect(() => {
      const producto = getItem()
  
      producto.then(response => {
        setProduct(response)
      })
    }, [])

    return(
        <div className='detailContainer'>
            <ItemDetail id={product.id}  name={product.name} description={product.description} precio={product.precio} url={product.url} talle={product.talle}/>
        </div>
    )
}

export default ItemDetailContainer
