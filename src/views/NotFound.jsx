import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className='text-center'>Page Not Found (404)</h1>
                </div>
                <div className="col-md-12 text-center">
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

export default NotFound