import React from 'react'

export default function ProductCard({item:{name,price},handleClick}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Preço: R${price}</p>
            <button onClick={()=>handleClick(name)}>Adicionar no carrinho</button>
        </div>
    )
}
