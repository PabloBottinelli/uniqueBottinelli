import React, { useState } from 'react'

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [product, setProducts] = useState([])

    const contador = count
    const producto = product

    const setCart = (count, product) => {
        const isInCart = (id) => {
            const filtro = producto.filter((product) => product.id === id)
            if(filtro.length === 0){
                product.quantity = count    
                setCount(count + contador)
                setProducts([...producto, product])
            }else{
                const actualizarQuantity = (id) => {
                    setCount(contador - filtro[0].quantity + count)
                    product.quantity = count
                    const eliminarQuantity = (id) => {
                        const sinElProducto = producto.filter((p) => p.id !== id)
                        setProducts([...sinElProducto, product])
                    }
                    eliminarQuantity(filtro[0].id)
                }               
                actualizarQuantity(filtro[0].id)
            }
        }
        isInCart(product.id)
    }

    const removeItem = (id) => {
        const filtro = producto.filter((product) => product.id !== id)
        const productoAEliminar = producto.filter((product) => product.id === id)
        const cuenta = count - productoAEliminar[0].quantity
        setProducts(filtro)
        setCount(cuenta)
    }

    const Clear = () => {
        setProducts([])
        setCount(0)
    }

    return (
        <Context.Provider value={{
            cart: {
                count,
                product
            },
            setCart,
            removeItem,
            Clear
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context