import '../styles/Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <>
            <div className="error">
                <p id="numberError">404</p>
                <p id="oups">Oups ! La page que vous demandez n'existe pas.</p>
            </div>
            <div class="backHome">
                <Link id='backToHome' to=''>Retourner sur la page d'accueil</Link>
            </div>
        </>
    )
}

export default Error