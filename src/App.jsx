import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import ShowList from './components/ShowList/ShowList';
import GetPaid from './components/getPaid/GetPaid';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showlist/:offer" element={<ShowList />} />
        <Route path="/getpaid" element={<GetPaid />} />
      </Routes>
    </Router>
  )
}

export default App