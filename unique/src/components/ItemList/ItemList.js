import './ItemList.css'
import Item from '../Item/Item';

const ItemList = ({items}) => {
    return (
      <div className="itemlist">
        {items.map(i => <Item id={i.id} name={i.name} description={i.description} precio={i.precio} url={i.url}/>)}
      </div>
    )
}

export default ItemList