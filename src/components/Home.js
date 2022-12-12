import '../styles/Home.css'
import banniereAccueil from '../assets/banniere-accueil.svg'

const Home = ({ logements }) => {
    return (
        <main>
            <div id="banniereAccueil">
                <h1 id="titreAccueil">Chez vous, partout et ailleurs</h1>
                <img id="fondBanniere" src={banniereAccueil} alt="Paysage montagneux en bord de mer" />
            </div>
            <div className="gallery">
                {logements.map((logement) => (
                    <div className="locations">
                        <p className="titleLocation">{logement.title}</p>
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Home