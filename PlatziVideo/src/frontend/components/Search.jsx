import React,{useState} from 'react'

import '../assets/styles/components/Search.scss'
import { withRouter } from 'react-router-dom'



const Search = (props) => {
  const [form, setValues] = useState({

	})

	const handleInput = (event) => {
		setValues({
			...form,
			[event.target.name]: event.target.value,
		});
	}

  const handleSearch = (e)=>{
    if(e.charCode == 13){
      props.history.push(`search/${form.searh}`)
    }
  }

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input type="text"
             name="searh"
             onChange={handleInput}
             onKeyPress={handleSearch}
             className="input main__input" 
             placeholder="Buscar..." />
    </section>
  )
}

export default withRouter(Search) 