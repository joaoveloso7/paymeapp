import { useEffect, useState } from 'react'
import {Title} from './style'
import { addDoc } from 'firebase/firestore';

export default function AdicionarConta({reference}){

    const [paymentObj, setPaymentObj] = useState([]);

    const handleDataPayments = (e) => {
        const data = e.target.value && e.target.value;
        const name = e.target.name && e.target.name;
        setPaymentObj({...paymentObj, [name]: data})
    }
    
    const addPayment = async () => {
        await addDoc(reference,{
            title: paymentObj.title, 
            description: paymentObj.description, 
            type: paymentObj.type,
            value: paymentObj.value,
            parcels: paymentObj.parcels,
            parcels_value: paymentObj.parcels_value
        } )
    }



    return (
            <div>
                <div>
                    <label htmlFor="title">Título da Conta</label>
                    <input onChange={handleDataPayments} type="text" name='title' id='titulo-conta' placeholder='Digite o título da sua conta'/>
                </div>

                <div>
                    <label htmlFor="description">Descrição da Conta</label>
                    <textarea onChange={handleDataPayments}  name='description' id='descricao-conta' placeholder='Digite o título da sua conta'/>
                </div>

                <div>
                    <label htmlFor="type">Tipo da Conta</label>
                    <select onChange={handleDataPayments}  name='type' id='tipo-conta' >
                        <option  disabled selected>Selecione o tipo de conta</option>
                        <option value='pagar'>Conta a pagar</option>
                        <option value='receber'>Conta a receber</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="value">Valor Total da Conta</label>
                    <input onChange={handleDataPayments}  type="number" min={0} name='value' id='valor-conta' placeholder='Digite o valor total da conta'/>
                </div>

                <div>
                    <label htmlFor="parcels">Número de Parcelas</label>
                    <select onChange={handleDataPayments} name='parcels' id='parcelas-conta'>
                        <option value='1'>1x</option>
                        <option value='2'>2x</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="parcels_value">Valor Parcelas</label>
                    <input onChange={handleDataPayments}  type="number" name='parcels_value' id='valor-parcelas-conta' placeholder='Digite o valor total da conta'/>
                </div>

                <button onClick={addPayment}>Adicionar conta</button>
            </div>
    )    
}