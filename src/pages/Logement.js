import '../styles/Logement.css'
// import fleche from '../assets/fleche.svg'
// import carrousel from '../assets/carrousel.jpg'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Error from '../pages/Error'
import Details from '../components/Details'
import Tag from '../components/Tag'
import '@fortawesome/fontawesome-free/css/all.css'

const Logement = ({ logements }) => {
    const { id } = useParams();

    const [logement] = useState(
        logements.find(item => item.id === id)
    );

    const rating = parseInt(logement.rating);

    const array = [...Array(rating)];
    const starVide = [...Array(5 - rating)];


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function goToPrevSlide() {
        setCurrentImageIndex(currentImageIndex === 0 ? logement.pictures.length - 1 : currentImageIndex - 1);
    }

    function goToNextSlide() {
        setCurrentImageIndex(currentImageIndex === logement.pictures.length - 1 ? 0 : currentImageIndex + 1);
    }

    return (

        <main>
            {logement !== undefined ? (
                <>
                    <div className="carousel">
                        <img src={logement.pictures[currentImageIndex]} alt={logement.pictures[currentImageIndex]} />
                        <div id='ath'>
                            <i class="fa-solid fa-chevron-left chevron" onClick={goToPrevSlide}></i>
                            <p id='numberCarousel'>{currentImageIndex} / {logement.pictures.length}</p>
                            <i class="fa-solid fa-chevron-right chevron" onClick={goToNextSlide}></i>
                        </div>

                    </div>
                    {/* <div id="carrousel">
                        <img src={carrousel} alt="test carrousel" />
                        <div id="ath">
                            <img id="flecheGauche" src={fleche} alt="fleche qui pointe à Gauche" />
                            <img id="flecheDroite" src={fleche} alt="fleche qui pointe à Droite" />
                        </div>
                        <p id="numberCarrousel">1/4</p>
                    </div> */}
                    <div id="enteteLogement">
                        <div id="leftSide">
                            <h1>{logement.title}</h1>
                            <p id="localisation">{logement.location}</p>
                            <div id="tags">
                                {logement.tags.map((tag) =>
                                    <Tag tag={tag}></Tag>
                                )}
                            </div>
                        </div>
                        <div id="rightSide">
                            <div id="identite">
                                <p>{logement.host.name}</p>
                                <img id="pictureProfil" src={logement.host.picture} alt="PP du propriétaire" />
                            </div>
                            <div id="note">
                                {array.map(() =>
                                    <i key={array.index} className="fa-solid fa-star"></i>
                                )}
                                {starVide.map(() =>
                                    <i key={starVide.index} className="fa-solid fa-star grise"></i>
                                )
                                }
                            </div>
                        </div>
                    </div>
                    <div id="contenu">
                        <Details summary='Description'>
                            {logement.description}
                        </Details>
                        <Details summary='Équipements'>
                            {logement.equipments.map((equipement) =>
                                <p>{equipement}</p>
                            )}
                        </Details>
                    </div>
                </>
            ) : (<Error />)}
        </main>



    )
}

export default Logement