import '../styles/About.css'
import apropos from '../assets/banniere-a-propos.jpg'
import Details from '../components/Details'
import { useEffect } from 'react'

const About = () => {

    useEffect(() => {
        document.title = "Kasa | A propos"
    }, [])

    const infos = [
        { summary: "Fiabilité", description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." },
        { summary: "Respect", description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." },
        { summary: "Service", description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." },
        { summary: "Sécurité", description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
    ]
    return (
        <>
            <main id='about'>
                <div class="apropos">
                    <div class="banniereApropos">
                        <img src={apropos} alt="Paysage montagneux" />
                    </div>
                    <div class="descriptions">
                        {infos.map((info) => (
                            <Details key={info.index} summary={info.summary}>
                                {info.description}
                            </Details>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default About