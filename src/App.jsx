
import { useEffect, useState } from 'react';
import './App.css';
import AdicionarConta from './components/AdicionarConta';
import {db} from './firebase-config'
import { collection, getDocs } from 'firebase/firestore';

function App() {

  const [payments, setPayments] = useState([]);
  const paymentRef = collection(db, "payment");


  useEffect(() => {

      const getPayment = async () => {
        const data = await getDocs(paymentRef);
        const filteredData = await data.docs.map(doc =>
              ({...doc.data(), id: doc.id})
        )
        setPayments(filteredData);
      }

      getPayment()
  },[])


  const updatePayment = async (id, paymentObj) => {

  }


  return (
    <div className="App">
      <AdicionarConta reference={paymentRef}/>

      <div style={{marginTop: '1rem'}}>
        {payments.map(payment => {
          return (
            <div key={payment.id}>
              <hr/>
              <p>Titulo da conta: <strong>{payment.title}</strong></p>
              <p>Descrição da conta: <strong>{payment.description}</strong></p>
              <p>Tipo da conta: <strong>contas a {payment.type}</strong></p>
              <p>Valor total da conta: <strong>{payment.value}</strong></p>
              <p>Parcelas: <strong>{payment.parcels}</strong></p>
              <p>Valor de parcelas: <strong>{payment.parcels_value}</strong></p>
              <button onClick={() => {updatePayment(payment.id, )}} style={{width: "5rem"}}>Editar</button>
              <hr/>
            </div>
            )
        })}
      </div>
    </div>
  );
}

export default App;
