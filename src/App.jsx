import { useState } from 'react'
import AppClima from './components/AppClima'
import { ClimaProvider } from './context/ClimaProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ClimaProvider>
      <header>
        <h1>Buscador de Clima</h1>
      </header>
      <AppClima></AppClima>
    </ClimaProvider>
  )
}

export default App
