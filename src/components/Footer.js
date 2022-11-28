import logoFooter from "../assets/logo-footer.svg"
import "../styles/Footer.css"

const Footer = () => {
    return (
        <footer>
            <img src={logoFooter} alt="logo kasa blanc" />
            <p id="copyright">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer