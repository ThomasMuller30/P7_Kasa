import '../styles/Logement.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Error from '../pages/Error'
import Details from '../components/Details'
import Tag from '../components/Tag'
import '@fortawesome/fontawesome-free/css/all.css'
import Gallery from '../components/Gallery'

const Logement = ({ logements }) => {

    const { id } = useParams();

    const [logement] = useState(
        logements.find(item => item.id === id)
    );

    useEffect(() => {
        document.title = `Kasa | ${logement.title}`
    }, [])

    return (

        <main id='logement'>
            {logement !== undefined ? (
                <>
                    <Gallery element={logement} />
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
                                {[...Array(parseInt(logement.rating))].map((i) =>
                                    <i key={i} className="fa-solid fa-star"></i>
                                )}
                                {[...Array(5 - parseInt(logement.rating))].map((i) =>
                                    <i key={i} className="fa-solid fa-star grise"></i>
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