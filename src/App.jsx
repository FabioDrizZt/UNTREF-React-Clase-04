import { useState } from "react"

function App() {
  const [fondo, setFondo] = useState('black')

  const manejadorDeSustos = () => alert('¡Boo! Te asustaste 👻')
  const manejadorDeEnvio = (event) => {
    event.preventDefault()
    alert('Formulario de Halloween enviado sin redireccionar 🕸️')
  }

  return (
    <main style={{
      backgroundColor: fondo,
      padding: '50px',
      color: 'white'
    }}
    onMouseEnter={()=> setFondo('orange')}
    onMouseLeave={()=> setFondo('black')}
    >
      <h1>👻 Bienvenido a la Fiesta de Halloween 👻</h1>
      <button onClick={manejadorDeSustos} >¡Haz clic si te atreves! 🕸️</button>

      <form onSubmit={manejadorDeEnvio}>
        <input type="text" name="nombre" id="nombre"  placeholder="nombre"/>
        <button type="submit">Enviar 🎃</button>
      </form>
    </main>
  )
}

export default App
