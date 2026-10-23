import { useAuth } from './contexts/AuthContext'
import { Home } from './pages/home/Home'
import { CrearProducto } from './pages/crearProducto/CrearProducto'

import { Login } from './pages/login/Login'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RutaPrivada } from './routes/RutaPrivada'

function App() {

  const { usuario } = useAuth()

  return (
    <Routes>

      <Route path='/login' element={usuario ? <Navigate to="/home" replace /> : <Login />} />


      <Route element={<RutaPrivada />}>

        <Route path='/home' element={<Home />} />
        <Route path='/crear-producto' element={<CrearProducto />} />
      </Route>




    </Routes>

  )
}

export default App
