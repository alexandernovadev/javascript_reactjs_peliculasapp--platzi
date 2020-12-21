import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import React from 'react'
import ReactDOM from 'react-dom'
import App from './routes/App'

// Importar reducer
import reducer from './reducers'

// Redux
import {Provider} from 'react-redux'

// Compose sirve para debuggear redux en el navegador
import {createStore, compose } from 'redux'
import {data} from '../../data'

const initialState = {
  user: {},
  playing:{},
  busqueda: [],
  mylist: data.mylist,
  trends : data.trends,
  originals:  data.originals
}

// console.log("datae ? ", initialState);

// Render recibe dos paramatros, 
// el componente(con etiqutas html) y a donde voy a empujar el componente

// Redux se instala y se envulve la etiqueta APP en redux
// Encapsula redux en estos componentes

// before
// ReactDOM.render(<App/>,document.getElementById('app'))

// After

// hay que crear un store, que es donde se save the information
// crate recibe dos parametros, el reducer que esta en la carpeta reducers
// y el data inicial

// El provider tiene una prop que es el store
// const store =  createStore(reducer, initialState)

// PARA DEDUB

  const history = createBrowserHistory();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());
console.log("strire ", store);
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
