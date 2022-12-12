import '../styles/Home.css'
import banniereAccueil from '../assets/banniere-accueil.svg'
import { Link } from 'react-router-dom'

const Home = ({ logements }) => {
    return (
        <main>
            <div id="banniereAccueil">
                <h1 id="titreAccueil">Chez vous, partout et ailleurs</h1>
                <img id="fondBanniere" src={banniereAccueil} alt="Paysage montagneux en bord de mer" />
            </div>
            <div className="gallery">
                {logements.map((logement) => (
                                <Link to={logement.id} className="link">
                                    <div className="locations">
                                        <img src={logement.cover} alt={"Photo de " + logement.title} />
                                        <p className="titleLocation">{logement.title}</p>
                                    </div>
                                </Link>
                ))}
            </div>
        </main>
    )
}

export default Home