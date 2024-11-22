import React from 'react'
import { Link } from 'react-router-dom'

const CharacterCard = ({ id, name, species, image, gender,origin }) => {
    return (
        <div className='row g-0 border overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
            <div className='col p-4 d-flex flex-column position-static'>
                <strong className='d-inline-block mb-2 text-success-emphasis'>
                    {species}
                </strong>
                <h3 className='mb-0'>
                    {name}
                </h3>
                <span className='fs-7'>Gender: {gender} / Origin: {origin?.name} </span>
                <Link to={`${id}/details`} className='icon-link gap-1 icon-link-hover stretched-link'>
                    Read more
                </Link>
            </div>
            <div className='col-auto d-none d-lg-block'>
                <img src={image}
                    alt=""
                    className='photo-card' />
            </div>
        </div>
    )
}

export default CharacterCard