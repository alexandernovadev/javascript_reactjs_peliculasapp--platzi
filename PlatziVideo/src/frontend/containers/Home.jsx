import React from 'react'
import Search from '../components/Search'
import Header from '../components/Header'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import Carouselitem from '../components/Carouselitem'
import '../assets/styles/App.scss'

// Ya no estoy utilizando esta libreria de hooks
// import useInitialState from '../hooks/useInitialState'

// Importar connect de rudux
import { connect } from 'react-redux'


// UseState: Maneja el estado(datos) de nuestra app
// useEffects : Permite hacer peticiones a Una Api escuchador
// const API = 'http://localhost:3000/initalState'
const Home = ({ mylist, trends, originals }) => {

    //IMPROTE EL CUSTOM HOOK

    // Yo no se va utilizar la fake api
    // const initialState = useInitialState(API)
    // console.log("VIDEOS => ",videos);


    const lists = [mylist, trends, originals];
    const categories = ["Mi Lista", "Tendencias", "Originales de PlatziVideo"];

    return (
        <>
            <Header/>
            <Search />
            {categories.map((category, i) => (
                lists[i].length > 0 && (
                    <Categories key={category} title={category}>
                        <Carousel>
                            {lists[i].map((item) => (
                                <Carouselitem 
                                key={item.id}
                                isList={i==0 ? true: false}
                                 {...item} />
                                 // isList: Es para saber que es un lista
                            ))}
                        </Carousel>
                    </Categories>
                )))}
        </>
    )



    /* QUE MINIFIICACION ABOVE*/

    // return (
	// 	<>
	// 		<Search /> 

	// 		{mylist.length > 0 && (
	// 			<Categories title='Mi Lista'>
	// 				<Carousel>
	// 					{mylist.map((item) => (
	// 						<Carouselitem key={item.id} {...item}  />
	// 					))}
	// 				</Carousel>
	// 			</Categories>
	// 		)}

	// 		<Categories title='Tendencias'>
	// 			<Carousel>
	// 				{trends.map((item) => (
	// 					<Carouselitem key={item.id} {...item} />
	// 				))}
	// 			</Carousel>
	// 		</Categories>

	// 		<Categories title='Originales de Platzi Video'>
	// 			<Carousel>
	// 				{originals.map((item) => (
	// 					<Carouselitem key={item.id} {...item} />
	// 				))}
	// 			</Carousel>
	// 		</Categories>
	// 	</>
	// )
}
// Aqui se conecta con redux

// export default Home
// Connect recibe dos parametros
//1. Mapeo de nuestros props
//2. El dispach-> el elemtos que se dispara por medio de los actions
// El otro parentesis seria el componente que se va a inyectar
// export default connect( props, dispach)(Home)

// crear la funcion mapStateToProps
const mapStateToProps = state => {

    // Solo traer los elementos que necesito
    // en este caso mylist, orginal y trensa
    return {
        mylist: state.mylist,
        trends: state.trends,
        originals: state.originals,
    }
}
export default connect(mapStateToProps, null)(Home)


