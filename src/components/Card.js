const Card = ({ logement }) => {
    return (
        <div className="locations">
            <img src={logement.cover} alt={"Photo de " + logement.title} />
            <p className="titleLocation">{logement.title}</p>
        </div>
    )
}

export default Card