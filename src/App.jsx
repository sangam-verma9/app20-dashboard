import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import ShowList from './components/ShowList/ShowList';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showlist" element={<ShowList />} />
      </Routes>
    </Router>
  )
}

export default App