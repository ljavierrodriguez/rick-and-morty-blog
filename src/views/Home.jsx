import React, { useContext } from 'react'
import { GlobalContext } from '../context/AppContext'
import CharacterCard from '../components/CharacterCard'

const Home = () => {

    const { store, actions } = useContext(GlobalContext)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='text-center'>Blog Rick and Morty with React</h1>
                </div>
            </div>
            <div className="row">
                {
                    !!store.character &&
                    store.character.results.length > 0 &&
                    store.character.results.map((character, pos) => (
                        <div className="col-md-6" key={pos}>
                            <CharacterCard {...character} />
                        </div>
                    ))
                }
            </div>
            <div className="row">
                <div className="col-md-12 pb-4 text-center">
                    <button className='btn btn-primary btn-sm mx-1'
                        disabled={(store.character?.info?.prev === null ? true : false)}
                        onClick={() => actions.getCharacters(store.character?.info?.prev)}
                    >Prev</button>
                    <button className='btn btn-primary btn-sm mx-1'
                        disabled={(store.character?.info?.next === null ? true : false)}
                        onClick={() => actions.getCharacters(store.character?.info?.next)}
                    >Next</button>
                </div>
            </div>
        </div>
    )
}

export default Home