import React, { useState, useContext } from 'react'

const CategoryContext = React.createContext()

export const CategoryProvider = (props) => {
    const [category, setCategory] = useState('')

    const onChangeCategory = (category) => {
        setCategory(category)
    }

    return (
        <CategoryContext.Provider value={{category, onChangeCategory}}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => {
    const context = useContext(CategoryContext)
    if(!context) {
        throw Error('useCategory must be used inside CategoryProvider')
    }

    return context
}

