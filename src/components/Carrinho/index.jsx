import React from 'react'

export default function Carrinho({currentSale}) {
    const purchase = currentSale.reduce((a,b)=>a+(b[0].price*1),0)//
    const disc = currentSale.reduce((a,b)=>a+(b[0].discount*1),0)
    return (
        <div>
            <p>Valor da compra: R${Math.round(purchase* 100) / 100}</p>
            <p>Cliente economizou: R${Math.round(disc* 100) / 100}</p>
        </div>
    )
}
