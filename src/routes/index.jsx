import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'

export default function RoutesApp(){
  return(
    <Routes>
      <Route path='/' element={ <Home/> } />
    </Routes>
  )
}