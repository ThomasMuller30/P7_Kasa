import '../styles/Home.css'
import banniereAccueil from '../assets/banniere-accueil.svg'

const Home = () => {
    return (
        <main>
            <div id="banniereAccueil">
                <h1 id="titreAccueil">Chez vous, partout et ailleurs</h1>
                <img id="fondBanniere" src={banniereAccueil} alt="Paysage montagneux en bord de mer" />
            </div>
            <div className="gallery">
                <div className="locations">
                    <p className="titleLocation">Titre de la location</p>
                </div>
                <div className="locations">
                    <p className="titleLocation">Titre de la location</p>
                </div>
                <div className="locations">
                    <p className="titleLocation">Titre de la location</p>
                </div>
                <div className="locations">
                    <p className="titleLocation">Titre de la location</p>
                </div>
                <div className="locations">
                    <p className="titleLocation">Titre de la location</p>
                </div>
                <div className="locations">
                    <p className="titleLocation">Titre de la location</p>
                </div>
            </div>
        </main>
    )
}

export default Home