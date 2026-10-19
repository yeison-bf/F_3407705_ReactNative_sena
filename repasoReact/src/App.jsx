import { useState } from 'react'
import './App.css'
import { RoutesApp } from './routes/routesApp'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      {/* <RoutesApp/> */}
      <h2>YEISON BARRIOS</h2>
      <h1>{count}</h1>
      <button onClick={() => setCount(count+1)} >SUMAR</button>
      <button onClick={() => setCount(0)} >REINICIAR</button>
    </>
  )
}

export default App
