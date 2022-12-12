import Header from "./components/Header"
import Footer from "./components/Footer"
import Error from "./components/Error"
import About from "./components/About"
import Home from "./components/Home"
import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  const [logements, setLogements] = useState([])

  useEffect ( () => {
    fetch('/logements.json')
      .then( (response) => response.json() )
      .then( (logements) => {setLogements(logements)} )
  }, [] )

  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='' element={<Home logements={logements} />} />
        <Route path='/:id' />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
      </Router>
    </>
  );
}

export default App;
