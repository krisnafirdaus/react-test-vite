import { useState } from 'react'
import Homepage from './pages/Homepage/Homepage'
import Detail from './pages/Detail/Detail'
import Login from './pages/Login/Login'
import { Routes, Route,  } from 'react-router-dom'
import './App.css'

function App() {
  // const [count, setCount] = useState(1)

  return (
    <>
			<Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
          <Route path="detail" element={<Detail />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
