import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({items}) => {
    return (
      <div className="itemlist">
        {items.map(i => <Item key={i.id} item={i}/>)}
      </div>
    )
}

export default ItemList