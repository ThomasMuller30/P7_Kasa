import Header from "./components/Header"
import Footer from "./components/Footer"
// import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from "./components/Error"

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        {/* <Route path='' element={<Home />} />
        <Route path='' element={} />
        <Route path='' element={} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
