// Recbibe el type y cambia el estado
// action.type -> mire que es lo que tiene que hacer
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE':

      // console.log("QUE ES ->", state);

      if (state.mylist.filter(items => items.id === action.payload.id).length === 0) {
        return {
          ...state,
          mylist: [...state.mylist, action.payload],
        }
      } else {
        return {
          ...state,
        }
      }

    // Otra solucion mas recudida, pero menos legible
    // [...state.myList].find((item) => item.id === action.payload.id) ? state.myList : 
    // [...state.myList, action.payload],


    // return {
    //   // Primero traigo el estado que ya tengo
    //   // Despues le digo que se se actualiza
    //   // en este caso es mylist, le agrego lo que tengo en mylist
    //   // y action.payload, que seria el objeto de recibe

    //   ...state,
    //   mylist: [...state.mylist, action.payload]
    // }
    case 'DELETE_FAVORITE':
      // vamos a hacer un filter
      // retorna todos menos el que coincida con el id
      return {
        ...state,
        mylist: state.mylist.filter(items => items.id !== action.payload)
      }

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      }

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      }

    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        playing:
          state.trends.find((item) => item.id === Number(action.payload)) ||
          state.originals.find((item) => item.id === Number(action.payload)) ||
          [],
      }

    case 'SEARCH_VIDEOS':
      return {
        ...state,
        busqueda:
          state.trends.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase())) ||
          state.originals.filter((item) =>  item.title.toLowerCase().includes(action.payload.toLowerCase())) ||
          [],
      }
    default:
      return state
  }
}

export default reducer