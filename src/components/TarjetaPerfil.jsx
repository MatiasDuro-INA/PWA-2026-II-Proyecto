import { useAuth } from "../contexts/AuthContext"

function TarjetaPerfil() {
  // Acá solo necesitamos el usuario, no las funciones.
  const { usuario } = useAuth()

  return (
    <section className="perfil">
      {/* nombre[0] es la primera letra del nombre, la usamos como avatar */}
      <div className="perfil-avatar">{usuario.nombre}</div>
      <h2>¡Qué bueno verte, {usuario.nombre}!</h2>
      <p>Entraste con <strong>{usuario.email}</strong></p>
    </section>
  )
}

export default TarjetaPerfil
