import React, { Fragment } from 'react'
import Formulario from './Formulario'
import Resultado from './Resultado'
import useClima from '../hooks/useClima'
import Spinner from './Spinner'

const AppClima = () => {

  const {resultado, cargando, noResultado} = useClima()

  return (
    <Fragment>
      <main className='dos-columnas'>
        <Formulario></Formulario>

        {
          cargando ? <Spinner/> :
          resultado?.name ? <Resultado/> :
          noResultado ? <p className='alerta'> {noResultado} </p> :
          <p className='alerta-result'>El Clima no se va a mostrar aqui</p>
        }
        
      </main>
    </Fragment>
  )
}

export default AppClima
