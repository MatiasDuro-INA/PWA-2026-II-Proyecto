import { createContext, useContext, useState } from "react";


//1- CREAMOS EL CONTEXTO
// createContext crea una caja vacia que todavia no tiene nada

export const AuthContext = createContext()


export const useAuth = () => useContext(AuthContext)


//2- Crear el Provider 
// PROVIDER = El encargado de Proveer el contexto a la aplicacion
// EL provider, es un componente comun y corriente
// pero que se encarga de hacer un pase de manos
// Le pasa el contexto a todos los otros componentes

export const AuthProvider = ({ children }) => {

    const [usuario, setUsuario] = useState(null)


    const consultarBase = async () => {
        const response = await fetch("https://6ad158aaaddc5b5cb142f749.mockapi.io/usuarios")
        const data = await response.json()
        return data
    }



    const login = async (email, password) => {

        const usuarios = await consultarBase()

        const encontrado = usuarios.find(user => user.email === email && user.password === password)

        if (encontrado) {
            console.log("Login exitoso");
            setUsuario(encontrado)
        } else {
            setUsuario(null)
            console.log("datos incorrectos");
        }
    }

    const logout = () => {
        setUsuario(null)
    }


    return (
        <AuthContext.Provider value={{ login, usuario, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
