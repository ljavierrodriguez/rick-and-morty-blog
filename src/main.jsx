import React from 'react'
import ReactDOM from 'react-dom/client'

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './styles/global.css'

import Layout from './Layout'
import AppContext from './context/AppContext'

ReactDOM.createRoot(document.querySelector('#root')).render(
    <AppContext>
        <Layout />
    </AppContext>
)