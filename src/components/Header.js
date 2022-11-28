import logo from "../assets/logo.svg"
import '../styles/Header.css'

const Header = () => {
    return (
        <header>
            <img id="logoHeader" src={logo} alt="Kasa" />
            <nav>
                <a href="#" className="navPrincipale" id="navAccueil">Accueil</a>
                <a href="#" className="navPrincipale" id="navAbout">A propos</a>
            </nav>
        </header>
    )
}

export default Header
