import React, { createContext, useEffect, useState } from 'react'
import { API_URL } from '../config'

export const GlobalContext = createContext(null)

const AppContext = ({ children }) => {

    const [store, setStore] = useState({
        todos: [
            'Comprar Pan', 'Estudiar React', 'Practicar React'
        ],
        character: null,
        single_character: null
    })

    const [actions] = useState({
        addTask: (task) => setStore((store) => ({ ...store, todos: store.todos.concat(task) })),
        removeTask: (pos) => setStore((store) => ({ ...store, todos: store.todos.filter((_, index) => index !== pos) })),
        getCharacters: (
            url = "",
            options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }
        ) => {
            console.log(url)
            fetch(url, options)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    setStore((store) => ({ ...store, character: responseJson}))
                })
                .catch((error) => console.log(error.message))
        },
        getCharacterById: (
            url = "",
            options = { method: 'GET', headers: { 'Content-Type': 'application/json' } }
        ) => {
            console.log(url)
            fetch(url, options)
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log(responseJson)
                    setStore((store) => ({ ...store, single_character: responseJson}))
                })
                .catch((error) => console.log(error.message))
        },
    })

    useEffect(() => {
        // actions a ejecutar al iniciar o recargar el sitio web
        actions.getCharacters(`${API_URL}/api/character?page=1`)
    }, [])

    return (
        <GlobalContext.Provider value={{ store, actions }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext