import React from 'react'

export default function ProductList({item:{name,price},handleClick}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Preço: R${price.toFixed(2)}</p>
            <button onClick={()=>handleClick(name)}>Adicionar no carrinho</button>
        </div>
    )
}
