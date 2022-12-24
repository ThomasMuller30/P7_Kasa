import { useState } from 'react'
import '../styles/Gallery.css'

const Gallery = ({element}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    function goToPrevSlide() {
        setCurrentImageIndex(currentImageIndex === 0 ? element.pictures.length - 1 : currentImageIndex - 1);
    }

    function goToNextSlide() {
        setCurrentImageIndex(currentImageIndex === element.pictures.length - 1 ? 0 : currentImageIndex + 1);
    }

    return (
        <>
            <div className="carousel">
                <img src={element.pictures[currentImageIndex]} alt={element.pictures[currentImageIndex]} />
                <div id='ath'>
                    {element.pictures.length > 1 && (<i className="fa-solid fa-chevron-left chevron" onClick={goToPrevSlide}></i>)}
                    <p id='numberCarousel'>{currentImageIndex + 1} / {element.pictures.length}</p>
                    {element.pictures.length > 1 && (<i className="fa-solid fa-chevron-right chevron" onClick={goToNextSlide}></i>)}
                </div>
            </div>
        </>
    )
}

export default Gallery