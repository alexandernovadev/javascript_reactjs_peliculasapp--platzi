import React from 'react'
import '../assets/styles/components/Categories.scss'

const Categories = ({ children, title })=>(
    <div className="categories">
        <h3 className="categories__title">{title}</h3>
        {/* vamos a insertat un elemento hijo con props ?? */}
        {children}
    </div>  
)

export default  Categories 