import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import About from "./components/About"
// import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        {/* <Route path='' element={<Home />} />
        <Route path='' element={} /> */}
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
