import './Item.css'
import {Link} from 'react-router-dom'
const Item = ({ item }) => {
    return (
        <div key={item.id} className="item-ctn">
            <img src={item.url}></img>
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <h5>{item.precio}$</h5>
            <Link to={`/detail/${item.id}`}>Ver más</Link>
        </div>
    )
}

export default Item