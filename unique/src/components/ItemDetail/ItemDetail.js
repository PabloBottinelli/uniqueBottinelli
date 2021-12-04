import './ItemDetail.css'

const ItemDetail = ({id, name, description, precio, url, talle}) => {
    return (
        <div key={id} className="itemDetail-ctn">
            <div className='imagen'>
                <img src={url}></img>
            </div>
            <div className='detalles'>
                <h4>{name}</h4>
                <p>{description}</p>
                <h5>{precio}$</h5>
                <span>Talle: {talle}</span>
            </div>
        </div>
    )
}

export default ItemDetail