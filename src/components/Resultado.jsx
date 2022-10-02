import React from 'react'
import useClima from '../hooks/useClima'

const Resultado = () => {

    const {resultado} = useClima()
    //console.log(resultado)

    const {name, main} = resultado

    //Grados Kelvin
    const Kelvin = 273.15

  return (
    <div className='contenedor clima'>
      <h2>El Clima de {name} es: </h2>

      <p> {parseInt(main.temp - Kelvin)} <span>&#x2103;</span> </p>
      <div className='tem_min_max'>
        <p>Minima: {parseInt(main.temp_min - Kelvin)} <span>&#x2103;</span> </p>
        <p>Maxima: {parseInt(main.temp_max - Kelvin)} <span>&#x2103;</span> </p>
      </div>
      
    </div>
  )
}

export default Resultado
