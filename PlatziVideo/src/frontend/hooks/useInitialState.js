import { useState, useEffect } from 'react'

// useState recibe un parametro, que es como se inicializar
// el estado, en este caso un arreglo vacio
// podemos inicizalizar en cualqir tipo de dato int, string ,booll etc

const useInitialState = (API) => {

    const [videos, setVideos] = useState([])

    // COMANDO PARA INICIAR FAKe API: json-server initialState.json

    // useEffect De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
        // Fetch tiene dos then, uno convierte a JSON y el otro envia 
        // la data a setVideos
        fetch(API)
            .then(res => res.json())
            .then(data => setVideos(data))

        // useEffect recibe otro parametro, que voy a seguir actualizando ???
        // pero como solo lo quiero una vez, le paso parametros un arreglo vacio
    }, [])

    return videos
}
 export default useInitialState