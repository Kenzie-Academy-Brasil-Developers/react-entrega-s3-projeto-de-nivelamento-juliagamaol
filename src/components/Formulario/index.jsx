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
            code:code,
            name:name,
            description:description,
            price:price,
            discount:discount
        }
        novoProduct(product)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
               <input type="number" placeholder="Código do produto"value={code} onChange={(e=>setCode(e.target.value))}/> 
               <input placeholder="Nome do produto"value={name}onChange={(e=>setName(e.target.value))}/> 
               <input type="number" placeholder="Preço"value={price}onChange={(e=>setPrice(e.target.value))}/> 
               <input placeholder="Descrição do produto"value={description}onChange={(e=>setDescription(e.target.value))}/> 
               <input type="number" placeholder="Valor de desconto"value={discount} onChange={(e=>setDiscount(e.target.value))}/> 
               <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}
