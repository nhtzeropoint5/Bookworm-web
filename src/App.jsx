import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <ToastContainer />
    </>
  )
}

export default App
