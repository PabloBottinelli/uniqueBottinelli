import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {
    return(
        <div>
            <h2>Unique: donde todo lo que compres es unico</h2>
            <ItemCount stock={5} initial={1}/>
        </div>
    )
}

export default ItemListContainer