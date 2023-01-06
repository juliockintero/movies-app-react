import React from 'react'
import { useParams } from 'react-router-dom'

const Ejemplo = () => {

    let genre = useParams()

    console.log('genero' + genre.id)
    return (
        <div className='italic text-orange-400'>ejemplo</div>
    )
}

export default Ejemplo
