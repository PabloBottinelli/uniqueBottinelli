import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import  { useState, useEffect } from 'react' 

function getItems(){
    return new Promise((resolve, reject) =>{
     const object = [
       {
         id:'1',
         name:'Remera 1',
         description:'Remera 1',
         precio: 150,
         url: 'https://blog.foto24.com/wp-content/uploads/2019/02/01-1.jpg'
       },
       {
         id:'2',
         name:'Remera 2',
         description:'Remera 2',
         precio: 250,
         url: 'https://blog.foto24.com/wp-content/uploads/2019/02/01-1.jpg'
       },
       {
         id:'3',
         name:'Remera 3',
         description:'Remera 3',
         precio: 350,
         url: 'https://blog.foto24.com/wp-content/uploads/2019/02/01-1.jpg'
       },
       {
         id:'4',
         name:'Remera 4',
         description:'Remera 4',
         precio: 450,
         url: 'https://blog.foto24.com/wp-content/uploads/2019/02/01-1.jpg'
       },
       {
         id:'5',
         name:'Remera 5',
         description:'Remera 5',
         precio: 550,
         url: 'https://blog.foto24.com/wp-content/uploads/2019/02/01-1.jpg'
       }
     ]
        setTimeout(() => resolve(object), 2000 )
  
    })
}
  
const ItemListContainer = () => {
    const [listProduct, setListProduct] = useState([])
  
    useEffect(() => {
      const list = getItems()
  
      list.then(response => {
        setListProduct(response)
      })
    }, [])

    return(
        <div>
            <ItemList items={listProduct}/>
            {/* <h2>Unique: donde todo lo que compres es unico</h2> */}
            {/* <ItemCount stock={5} initial={1}/> */}
        </div>
    )
}

export default ItemListContainer
