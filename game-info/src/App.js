import React, { useEffect } from 'react'
//components and pages
import Home from './pages/Home'
import Nav from './components/Nav';
import GlobalStyles from './components/GlobalStyles'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import GameDetail from './components/GameDetail';



const App = () => {
  return (
    <>
      <GlobalStyles />
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/game/:id" element={<Home/>} />
      </Routes>

    </>
  )
}

export default App
