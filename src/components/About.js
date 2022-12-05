import '../styles/About.css'
import fleche from '../assets/fleche.svg'
import apropos from '../assets/banniere-a-propos.svg'

const About = () => {
    return (
        <>
            <div class="apropos">
                <div class="banniereApropos">
                    <img src={apropos} alt="Paysage montagneux" />
                </div>
                <div class="descriptions">
                    <details>
                        <summary>Fiabilité <img src={fleche} alt="flèche" /> </summary>
                        Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                    </details>

                    <details>
                        <summary>Respect <img src={fleche} alt="flèche" /></summary>
                        La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                    </details>

                    <details>
                        <summary>Service <img src={fleche} alt="flèche" /></summary>
                        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                    </details>

                    <details>
                        <summary>Sécurité <img src={fleche} alt="flèche" /></summary>
                        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
                    </details>
                </div>
            </div>
        </>
    )
}

export default About