import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/home/HomePage'
import Header from './components/common/Header'
import PageNotFound from './components/PageNotFound'
import SpellList from './components/spell/SpellList'
import SpellDetail from './components/spell/SpellDetail'

function App () {
  return (<div className="container-fluid">
        <Header/>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/spells" element={<SpellList/>}/>
            <Route path="/details/:index" element={<SpellDetail/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>)
}

export default App
