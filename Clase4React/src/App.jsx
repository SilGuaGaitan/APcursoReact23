import { useState } from 'react'
import './App.css'

function App() {

  return (
  <>
  <div className="cuerpo">
  <h1>Boca de Urna</h1>
  <div className="card">
    <h2>Candidato 1</h2>
    
    <Contar></Contar>
  </div>
  <div className="card">
    <h2>Candidato 2</h2>
    <Contar></Contar>
  </div>
  </div>
  </>
  )
function Contar(){
    const [count, setCount] = useState(0);

 const incrementCount = () => {
    setCount(count + 1);
 };

 const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
 };

 return (
    <div>
     <span>{count}</span>
      <div div className="card2">
        <button  onClick={incrementCount}>+</button>
      </div>
      <div div className="card2">
        <button onClick={decrementCount}>-</button>
      </div>
    </div>
    );
  }

}
  


export default App
