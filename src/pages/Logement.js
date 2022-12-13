import '../styles/Logement.css'
import fleche from '../assets/fleche.svg'
import carrousel from '../assets/carrousel.jpg'
import hostimg from '../assets/Hostimg.svg'

const Logement = ({ logements }) => {
    const str = window.location;
    const url = new URL(str);
    const id = url.searchParams.get("id");
    const host = "http:localhost:3000/";
    const objectUrl = host + id;
    console.log(url);
    console.log(id);
    console.log(objectUrl);

    return (
        <main>
            <div id="carrousel">
                <img src={carrousel} alt="test carrousel" />
                <div id="ath">
                    <img id="flecheGauche" src={fleche} alt="fleche qui pointe à Gauche" />
                    <img id="flecheDroite" src={fleche} alt="fleche qui pointe à Droite" />
                </div>
                <p id="numberCarrousel">1/4</p>
            </div>
            <div id="enteteLogement">
                <div id="leftSide">
                    <h1>Cozy loft on the Canal Saint-Martin</h1>
                    <p id="localisation">Paris, Île-de-France</p>
                    <div id="tags">
                        <div class="tag"><p>Cozy</p></div>
                        <div class="tag"><p>Canal</p></div>
                        <div class="tag"><p>Paris 10</p></div>
                    </div>
                </div>
                <div id="rightSide">
                    <div id="identite">
                        <p>Alexandre Dumas</p>
                        <img src={hostimg} alt="PP du propriétaire" />
                    </div>
                    <p>3 étoiles</p>
                </div>
            </div>
            <div id="contenu">
                <details>
                    <summary>Description <img src={fleche} alt="fleche fermé" /></summary>
                    Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied).
                </details>
                <details id="equipements">
                    <summary>Équipements <img src={fleche} alt="fleche fermé" /></summary>
                    Climatisation<br />
                    Wi-Fi<br />
                    Cuisine<br />
                    Espace de travail<br />
                    Fer à repasser<br />
                    Sèche-cheveux<br />
                    Cintres
                </details>
            </div>
        </main>



    )
}

export default Logement