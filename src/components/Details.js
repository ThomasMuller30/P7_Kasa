import fleche from '../assets/fleche.svg'

const Details = ({summary, children}) => {

    return (
        <details>
            <summary>{summary} <img src={fleche} alt="flèche" /> </summary>
            {children}
        </details>
    )
}

export default Details