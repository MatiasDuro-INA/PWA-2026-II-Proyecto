import { useAuth } from './contexts/AuthContext'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'

function App() {

  const { usuario } = useAuth()

  return (
    <>
      { !usuario ? (<Login />) : <Home/>}
      
    </>

  )
}

export default App
