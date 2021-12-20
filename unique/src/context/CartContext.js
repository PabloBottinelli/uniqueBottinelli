import React, { useState } from 'react'

const Context = React.createContext()

export const CartContextProvider = ({children}) => {
    const [count, setCount] = useState(0)
    const [product, setProducts] = useState([{}])
    
    const productos = []
    const contador = count

    const setCart = (count, product) => {
        const prod = productos.concat(product)
        console.log(prod)
        setCount(count + contador)
        setProducts(prod)
        console.log(product)
    }

    return (
        <Context.Provider value={{
            cart: {
                count,
                product,
            },
            setCart
        }}>
            {children}
        </Context.Provider>
    )
}

export default Context