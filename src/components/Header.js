import logo from "../assets/logo.svg"
import '../styles/Header.css'

const Header = () => {
    return (
        <header>
            <img id="logoHeader" src={logo} alt="Kasa" />
            <nav>
                <p class="navPrincipale" id="navAccueil">Accueil</p>
                <p class="navPrincipale" id="navAbout">A propos</p>
            </nav>
        </header>
    )
}

export default Header
