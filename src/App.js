import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/home/HomePage.js'
import Header from './components/common/Header.js'
import PageNotFound from './components/PageNotFound.js'
import SpellList from './components/spell/SpellList.js'
import SpellDetail from './components/spell/SpellDetail.js'
import FavoriteSpells from './components/spell/FavoriteSpells.js'

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
