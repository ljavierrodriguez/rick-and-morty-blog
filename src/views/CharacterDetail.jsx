import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/AppContext'
import { API_URL } from '../config'

const CharacterDetail = () => {

    const { id } = useParams()
    const { store, actions } = useContext(GlobalContext)
    const navigate = useNavigate()

    useEffect(() => {
        actions.getCharacterById(`${API_URL}/api/character/${id}`)
    }, [id])

    return (
        <div className="container px-4 px-lg-5 my-5">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='text-center'>Blog Rick and Morty with React</h1>
                </div>
            </div>
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-md-6">
                    <img src={store.single_character?.image} className='card-img-top mb-5 mb-md-0' alt="" />
                </div>
                <div className="col-md-6">
                    <div className="small mb-1">{store.single_character?.species}</div>
                    <h1 className='display-5 fw-bolder'>{store.single_character?.name}</h1>
                    <p className='text-muted'>Gender: {store.single_character?.gender} / Origin: {store.single_character?.origin?.name}</p>
                </div>
                <div className="col-md-12 text-center py-3">
                    <button className='btn btn-warning btn-sm'
                        onClick={() => navigate(-1)}>
                        <i class="bi bi-arrow-return-left mx-1"></i>
                        Return page back
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CharacterDetail