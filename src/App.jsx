import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import ShowList from './components/showlist/ShowList';
import GetPaid from './components/getPaid/GetPaid';
import Analytics from './components/analytics/Analytics';
import Showanalytics from './components/analytics/Showanalytics';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/showlist/:offer" element={<ShowList />} />
        <Route path="/getpaid" element={<GetPaid />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/analytics/:offer" element={<Showanalytics />} />
      </Routes>
    </Router>
  )
}

export default App