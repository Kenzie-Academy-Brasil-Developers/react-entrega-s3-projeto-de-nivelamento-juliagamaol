import React from 'react'

export default function Carrinho({currentSale}) {
    const purchase = currentSale.reduce((a,b)=>a+b[0].price,0).toFixed(2)
    const disc = currentSale.reduce((a,b)=>a+b[0].discount,0).toFixed(2)
    return (
        <div>
            <p>Valor da compra: R${purchase}</p>
            <p>Cliente economizou: R${disc}</p>
        </div>
    )
}
