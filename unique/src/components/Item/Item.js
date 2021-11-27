import './Item.css'

const Item = ({id, name, description, precio, url}) => {
    return (
        <div key={id} className="item-ctn">
            <img src={url}></img>
            <h4>{name}</h4>
            <p>{description}</p>
            <h5>{precio}$</h5>
        </div>
    )
}

export default Item