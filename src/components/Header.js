import logo from "../assets/logo.svg"
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <img id="logoHeader" src={logo} alt="Kasa" />
            <nav>
                <Link to='' className="navPrincipale" id="navAccueil">Accueil</Link>
                <Link to='/about' className="navPrincipale" id="navAbout">A propos</Link>
            </nav>
        </header>
    )
}

export default Header
