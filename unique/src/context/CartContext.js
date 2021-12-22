import React, { useState } from 'react'

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [product, setProducts] = useState([])
    const [productQuantity, setProductQuantity] = useState([])

    const contador = count
    const producto = product

    const setCart = (count, product) => {
        const isInCart = (id) => {
            const filtro = producto.filter((product) => product.id == id)
            if(filtro.length == 0){
                const newQuantity = {
                    id: product.id,
                    quantity: count
                }
                setProductQuantity([...productQuantity, newQuantity])
                setCount(count + contador)
                setProducts([...producto, product])
            }else{
                const actualizarQuantity = (id) => {
                    const encontrar = productQuantity.filter((product) => product.id == id)
                    const cuenta = encontrar[0].quantity + count
                    const eliminarQuantity = (id) => {
                        const sinElProducto = productQuantity.filter((product) => product.id !== id)
                        const newQuantity = {
                            id: filtro[0].id,
                            quantity: cuenta
                        }
                        setProductQuantity([...sinElProducto, newQuantity])
                    }
                    eliminarQuantity(filtro[0].id)
                }               
                actualizarQuantity(filtro[0].id)
                setCount(count + contador)
            }
        }
        isInCart(product.id)
    }
    // console.log(product)
    // console.log(productQuantity)

    const removeItem = (id) => {
        const filtro = producto.filter((product) => product.id !== id)
        const encontrar = productQuantity.filter((product) => product.id == id)
        const eliminarQuantity = productQuantity.filter((product) => product.id !== id)
        const cuenta = count - encontrar[0].quantity
        setProducts(filtro)
        setProductQuantity(eliminarQuantity)
        setCount(cuenta)
    }

    const Clear = () => {
        setProducts([])
        setProductQuantity([])
        setCount(0)
    }

    return (
        <Context.Provider value={{
            cart: {
                count,
                product,
                productQuantity
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