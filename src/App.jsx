import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { add, diff, divided, divided as divs,  mult } from './Components/Mathematics/Math'

function App() {
  const [count, setCount] = useState(0)


  const sum = add(10,20)
  const sub = diff(100,20)
  const goonfal = mult(10,5)
  const vag = divided(20,20)
  const something = divs(100/200)
  console.log(sum,sub,goonfal,something,vag);










  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    

    </>
  )
}

export default App
