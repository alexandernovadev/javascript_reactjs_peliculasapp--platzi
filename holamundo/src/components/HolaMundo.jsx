import React from 'react'

const HolaMundo = ()=>{

    const Hello = 'Hola Marte'
    const isTrue = true
    return(
        <div className="HolaMundo">
            <h1>{Hello}</h1>
            <h2>Curso Esencial de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>

            {isTrue ? <h4>Es True</h4>: <h5>Es False</h5> }

            {isTrue && <h4>Es verdadero de othe manera</h4>}
        </div>
    )
}

export default HolaMundo