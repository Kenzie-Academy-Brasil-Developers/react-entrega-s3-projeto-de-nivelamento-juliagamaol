import React, { useState } from 'react'
import Carrinho from '../Carrinho';
import Formulario from '../Formulario';
import ProductCard from '../ProductCard'

export default function Produtos() {

    const [products, setProducts] = useState([
        {
          code: 10,
          name: "Smart TV Led 50 Semp",
          description:
            "SK8300 4K HDR Android Wi-Fi 3 HDMI 2 USB Controle Remoto com atalhos Chromecast Integrado",
          price: 2299.99,
          discount: 190.99,
        },
        {
          code: 11,
          name: "Smartphone Samsung Galaxy A72 128GB",
          description:
            "4G Wi-Fi Tela 6.7 Dual Chip 6GB RAM Câmera Quádrupla + Selfie 32MP - Preto",
          price: 1988.4,
          discount: 87.89,
        },
        {
          code: 12,
          name: "Smartwatch Samsung Galaxy Watch Active",
          description:
            "4O Galaxy Watch Active é o smartwatch ideal para quem tem um estilo de vida ativo e saudável. Ele é leve, confortável e monitora diariamente suas atividades físicas, e os comportamentos de nível de stress e sono",
          price: 678.6,
          discount: 110.19,
        },
      ]);
    const[currentSale, setCurrentSale] = useState([])

    const novoProduct = newProduct =>{
      setProducts([...products,newProduct])
    }
    const handleClick = (productName) =>{
        let filtred = products.filter((item)=>item.name === productName)
        setCurrentSale([...currentSale,filtred])
    }

    return (
        <div>
            <Carrinho currentSale={currentSale}/>
            <Formulario novoProduct={novoProduct}/>
        <div>
            {products.map(item=>(
               <ProductCard 
               item={item}
               handleClick={handleClick}
               />
            ))}
        </div>
    </div>
    )
}
