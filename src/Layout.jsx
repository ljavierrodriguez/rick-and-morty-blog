import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Tasks from './views/Tasks'
import NotFound from './views/NotFound'
import CharacterDetail from './views/CharacterDetail'
import Menu from './components/Menu'

const Layout = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/:id/details' element={<CharacterDetail />} />
                <Route path='/tasks' element={<Tasks />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Layout