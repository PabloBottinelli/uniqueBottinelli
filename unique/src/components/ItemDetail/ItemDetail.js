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
                <h6>Ubicación del vendedor: {product.ubicacion}</h6>
                <h6>Hasta 6 cuotas sin interes con tarjeta de debito</h6>
                <button className='agregar-carrito'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemDetail