import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import Header from './pages/common/Header'
import PageNotFound from './pages/common/PageNotFound'
import SpellList from './components/spell/SpellList'
import SpellDetail from './components/spell/SpellDetail'
import FavoriteSpells from './components/spell/FavoriteSpells'

function App () {
  return (<div className="container-fluid">
        <Header/>
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/spells" element={<SpellList/>}/>
            <Route path="/details/:index" element={<SpellDetail/>}/>
            <Route exact path="/favs" element={<FavoriteSpells/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </div>)
}

export default App
