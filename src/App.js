import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import PageNotFound from './pages/PageNotFound'
import SpellList from './pages/SpellList'
import SpellDetail from './pages/SpellDetail'
import FavouriteSpells from './pages/FavouriteSpells'

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Routes>
        <Route exact path="/" element={<SpellList />} />
        <Route path="/details/:index" element={<SpellDetail />} />
        <Route exact path="/favs" element={<FavouriteSpells />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
