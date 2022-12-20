import Header from "./Header"
import Footer from "./Footer"
import Error from "../pages/Error"
import About from "../pages/About"
import Home from "../pages/Home"
import Logement from "../pages/Logement"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const KasaRouter = ({ logements }) => {
 return (
    <Router>
      <Header />
      <Routes>
        <Route path='' element={<Home logements={logements} />} />
        <Route path='/logement/:id' element={<Logement logements={logements}/>} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
      </Router>
 )
}

export default KasaRouter