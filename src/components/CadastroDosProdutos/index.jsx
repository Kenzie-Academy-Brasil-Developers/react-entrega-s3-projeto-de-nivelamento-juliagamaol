import React, { useState } from 'react'
import ProductList from '../ProductList'
export default function CadastroDosProdutos() {
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
    const[code, setCode] = useState('')
    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[price, setPrice] = useState('')
    const[discount, setDiscount] = useState('')
    const[currentSale, setCurrentSale] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        setCode('')
        setName('')
        setDescription('')
        setPrice('')
        setDiscount('')
        
        const product = {
            code:code*1,
            name:name,
            description:description,
            price:price*1,
            discount:discount*1
        }
        setProducts([...products,product])
        
    }
    const handleClick = (productName) =>{
        let filtred = products.filter((item)=>item.name === productName)
        setCurrentSale([...currentSale,filtred])
    }
    // const handleRemovedClick = (productCode) =>{
    //   console.log(currentSale.indexOf(productCode))
    // }
    const carrinho = currentSale.map(item=>(
        <div>
            <p>{item[0].name}</p>
        </div>
        
    ))
    const purchase = currentSale.reduce((a,b)=>a+b[0].price,0).toFixed(2)
    const disc = currentSale.reduce((a,b)=>a+b[0].discount,0).toFixed(2)
    return (
        <div>
            Carrinho: {carrinho}
            <p>Valor da compra: R${purchase}</p>
            <p>Cliente economizou: R${disc}</p>
            <form onSubmit={handleSubmit}>
               <input placeholder="Código do produto"value={code} onChange={(e=>setCode(e.target.value))}/> 
               <input placeholder="Nome do produto"value={name}onChange={(e=>setName(e.target.value))}/> 
               <input placeholder="Preço"value={price}onChange={(e=>setPrice(e.target.value))}/> 
               <input placeholder="Descrição do produto"value={description}onChange={(e=>setDescription(e.target.value))}/> 
               <input placeholder="Valor de desconto"value={discount} onChange={(e=>setDiscount(e.target.value))}/> 
               <button type="submit">Cadastrar</button>
            </form>
        <div>
            {products.map(item=>(
               <ProductList 
               item={item}
               handleClick={handleClick}
               />
            ))}
        </div>
    </div>
    )
}
