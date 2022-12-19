import logo from "../assets/logo.svg"
import '../styles/Header.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

    return (
        <header>
            <img id="logoHeader" src={logo} alt="Kasa" />
            <nav>
                <NavLink to='' activeClassName="active" id="navAccueil" >Accueil</NavLink>
                <NavLink to='/about' activeClassName="active" id="navAbout" >A propos</NavLink>
            </nav>
        </header>
    )
}

export default Header
