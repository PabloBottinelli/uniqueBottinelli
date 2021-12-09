import './ItemDetail.css'

const ItemDetail = ({ product }) => {
    return (
        <div key={product.id} className="itemDetail-ctn">
            <div className='imagen'>
                <img src={product.url}></img>
            </div>
            <div className='detalles'>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <h5>{product.precio}$</h5>
            </div>
        </div>
    )
}

export default ItemDetail