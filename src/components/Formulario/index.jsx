import React from 'react'
import { useState } from 'react'

export default function Formulario({novoProduct}) {
    const[code, setCode] = useState('')
    const[name, setName] = useState('')
    const[description, setDescription] = useState('')
    const[price, setPrice] = useState('')
    const[discount, setDiscount] = useState('')
    
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
        novoProduct(product)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
               <input placeholder="Código do produto"value={code} onChange={(e=>setCode(e.target.value))}/> 
               <input placeholder="Nome do produto"value={name}onChange={(e=>setName(e.target.value))}/> 
               <input placeholder="Preço"value={price}onChange={(e=>setPrice(e.target.value))}/> 
               <input placeholder="Descrição do produto"value={description}onChange={(e=>setDescription(e.target.value))}/> 
               <input placeholder="Valor de desconto"value={discount} onChange={(e=>setDiscount(e.target.value))}/> 
               <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
